"use client";

import { useState, useRef, useEffect } from "react";
import { useAgora } from "@/hooks/useAgora";
import { ConversationalAIAPI } from "@/lib/conversational-ai-api";
import {
  EConversationalAIAPIEvents,
  ETranscriptHelperMode,
  EChatMessagePriority,
  EChatMessageType,
  ETurnStatus,
  type ITranscriptHelperItem,
  type IChatMessageText,
} from "@/lib/conversational-ai-api/type";
import { AllCredentials } from "@/lib/types/credentials";

interface Product {
  id: string;
  name: string;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  uid?: string;
  turnId?: number; // Track turn_id to replace intermediate messages
  turn_id?: number; // Also include as turn_id for compatibility
  timestamp?: number; // Include timestamp for sorting
  isLoading?: boolean; // Flag to show loading animation
}

interface ChatInterfaceProps {
  product: Product;
  credentials: AllCredentials | null;
  onClose: () => void;
}

export function ChatInterface({ product, credentials, onClose }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [agentVolume, setAgentVolume] = useState(100); // Agent volume (0-100)
  const [waitingForAgent, setWaitingForAgent] = useState(false); // Track if we're waiting for agent response
  const [isMinimized, setIsMinimized] = useState(false); // Minimized state
  const [microphones, setMicrophones] = useState<MediaDeviceInfo[]>([]); // Available microphones
  const [selectedMicrophone, setSelectedMicrophone] = useState<string>(""); // Selected microphone ID
  const [agoraConfig, setAgoraConfig] = useState<{
    appId: string;
    channel: string;
    token: string;
    uid: number;
    rtmUserId: string;
  } | null>(null);
  const [agentId, setAgentId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isInitializingRef = useRef(false);
  const rtmClientRef = useRef<any>(null);
  const convoApiRef = useRef<ConversationalAIAPI | null>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize Agora RTC connection
  const agora = useAgora(
    agoraConfig
      ? {
          appId: agoraConfig.appId,
          channel: agoraConfig.channel,
          token: agoraConfig.token,
          uid: agoraConfig.uid,
        }
      : {
          appId: "",
          channel: "",
          token: "",
          uid: 0,
        }
  );

  // Render video to canvas with transparent background (chroma key removal)
  useEffect(() => {
    if (!agora?.remoteVideoTrack || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Create a hidden video element to play the track
    const videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.playsInline = true;
    videoElement.style.display = "none";
    document.body.appendChild(videoElement);
    videoElementRef.current = videoElement;

    // Play the video track on the hidden element
    agora.remoteVideoTrack.play(videoElement);

    // Function to apply chroma key (green screen removal) - using improved algorithm
    const applyChromaKey = (imageData: ImageData) => {
      const data = imageData.data;
      const greenThreshold = 100;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Check if pixel is green (green screen detection)
        // Green is significantly more than red and blue
        const isGreen = g > greenThreshold && g > r * 1.2 && g > b * 1.2;

        if (isGreen) {
          data[i + 3] = 0; // Make transparent
        }
      }

      return imageData;
    };

    // Function to draw frame with chroma key
    const drawFrame = () => {
      if (!videoElement || videoElement.readyState !== videoElement.HAVE_ENOUGH_DATA) {
        animationFrameRef.current = requestAnimationFrame(drawFrame);
        return;
      }

      // Get actual video dimensions
      const videoWidth = videoElement.videoWidth;
      const videoHeight = videoElement.videoHeight;
      
      if (videoWidth === 0 || videoHeight === 0) {
        animationFrameRef.current = requestAnimationFrame(drawFrame);
        return;
      }

      // Container dimensions
      const containerWidth = 320; // w-80 = 320px
      const containerHeight = 240; // h-[240px]
      
      // Calculate aspect ratios
      const aspectRatio = videoWidth / videoHeight;
      
      // Calculate dimensions to maintain aspect ratio (fit within container)
      let drawWidth = containerWidth;
      let drawHeight = containerWidth / aspectRatio;
      let offsetX = 0;
      let offsetY = 0;
      
      // If height exceeds container, scale to fit height instead
      if (drawHeight > containerHeight) {
        drawHeight = containerHeight;
        drawWidth = containerHeight * aspectRatio;
        offsetX = (containerWidth - drawWidth) / 2;
      } else {
        offsetY = (containerHeight - drawHeight) / 2;
      }
      
      // Set canvas size to match video dimensions for better quality
      canvas.width = videoWidth;
      canvas.height = videoHeight;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw video frame to canvas at full resolution
      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

      // Get image data and apply chroma key
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const processedImageData = applyChromaKey(imageData);
      ctx.putImageData(processedImageData, 0, 0);

      // Continue animation loop
      animationFrameRef.current = requestAnimationFrame(drawFrame);
    };

    // Start the animation loop when video metadata is loaded
    videoElement.addEventListener("loadedmetadata", () => {
      drawFrame();
    });
    
    // Also start if video is already loaded
    if (videoElement.readyState >= videoElement.HAVE_METADATA) {
      drawFrame();
    }

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      if (agora?.remoteVideoTrack) {
        agora.remoteVideoTrack.stop();
      }
      if (videoElementRef.current) {
        videoElementRef.current.remove();
        videoElementRef.current = null;
      }
    };
  }, [agora?.remoteVideoTrack]);

  // Update agent volume when remote audio track changes or volume changes
  useEffect(() => {
    if (agora?.remoteAudioTrack) {
      agora.remoteAudioTrack.setVolume(agentVolume);
    }
  }, [agora?.remoteAudioTrack, agentVolume]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize Agora session on mount
  useEffect(() => {
    const initializeAgora = async () => {
      if (isInitializingRef.current) return;
      isInitializingRef.current = true;
      try {
        // Initialize Agora session
        const initRes = await fetch("/api/agora/initialize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: Math.floor(Math.random() * 100000),
            credentials,
          }),
        });

        const initData = await initRes.json();
        setAgoraConfig({
          appId: initData.appId,
          channel: initData.channel,
          token: initData.token,
          uid: initData.uid,
          rtmUserId: initData.rtmUserId || initData.uid.toString(),
        });

        // Start AI agent
        const agentRes = await fetch("/api/agora/start-agent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            channel: initData.channel,
            userId: initData.uid,
            token: initData.token,
            productId: product.id, // Pass product ID so AI knows which product to discuss
            credentials,
          }),
        });

        if (!agentRes.ok) {
          const errorData = await agentRes.json();
          throw new Error(
            errorData.error || `Failed to start agent: ${agentRes.status}`
          );
        }

        const agentData = await agentRes.json();

        if (agentData.agent_id) {
          setAgentId(agentData.agent_id);
        }

        // Set greeting message from ConvoAI if available
        // Store it with uid so it doesn't get overwritten by transcript updates
        const greetingMessage =
          agentData.greeting_message ||
          agentData.properties?.llm?.greeting_message;
        if (greetingMessage) {
          setMessages([
            {
              role: "assistant",
              content: greetingMessage,
              uid: "1000", // Agent UID
            },
          ]);
        }

        setIsInitializing(false);
      } catch (error) {
        console.error("Failed to initialize Agora:", error);
        setIsInitializing(false);
      }
    };

    initializeAgora();
  }, [product.id, credentials]);

  // Get available microphones using Agora SDK
  useEffect(() => {
    const getMicrophones = async () => {
      try {
        if (!agora?.localAudioTrack) return;

        const AgoraRTC = (await import("agora-rtc-sdk-ng")).default;
        // Use Agora's getMicrophones method
        const mics = await AgoraRTC.getMicrophones();
        setMicrophones(mics);

        if (mics.length > 0 && !selectedMicrophone) {
          // Set the first microphone as default
          setSelectedMicrophone(mics[0].deviceId);
        }
      } catch (error) {
        console.error("Error getting microphones:", error);
      }
    };

    if (
      typeof window !== "undefined" &&
      agora?.isConnected &&
      agora?.localAudioTrack
    ) {
      getMicrophones();
    }
  }, [agora?.isConnected, agora?.localAudioTrack]);

  // Initialize RTM and ConversationalAIAPI toolkit
  useEffect(() => {
    if (
      !agoraConfig ||
      !agora?.client ||
      typeof window === "undefined" ||
      convoApiRef.current
    ) {
      return;
    }

    let isMounted = true;

    const initToolkit = async () => {
      try {
        // Initialize RTM client
        const AgoraRTM = await import("agora-rtm-sdk");
        const RTM =
          (AgoraRTM.default as any)?.RTM ||
          (AgoraRTM as any).RTM ||
          AgoraRTM.default;

        if (!RTM || typeof RTM !== "function") {
          throw new Error("Failed to get RTM class");
        }

        const rtmClient = new RTM(agoraConfig.appId, agoraConfig.rtmUserId);
        rtmClientRef.current = rtmClient;

        await rtmClient.login({ token: agoraConfig.token });

        if (!isMounted) {
          await rtmClient.logout().catch(() => {});
          return;
        }

        // Initialize ConversationalAIAPI toolkit
        const convoAPI = ConversationalAIAPI.init({
          rtcEngine: agora.client!,
          rtmEngine: rtmClient as any,
          renderMode: ETranscriptHelperMode.TEXT,
          enableLog: true, // Enable logging to debug
        });

        convoApiRef.current = convoAPI;

        // Subscribe to channel messages (required before agent starts)
        await convoAPI.subscribeMessage(agoraConfig.channel);

        // Listen for transcript updates (both user and agent)
        // Use the EventHelper's on method properly
        const transcriptHandler = (
          transcripts: ITranscriptHelperItem<any>[]
        ) => {
          if (!isMounted) return;

          // Get user's UID for comparison
          const userRtcUid = agoraConfig?.uid?.toString() || "";
          const userRtmUid = agoraConfig?.rtmUserId || "";

          const newMessages: ChatMessage[] = transcripts
            .filter((item) => {
              // Check if item has text - could be in item.text or (item as any).data?.text (Frank's structure)
              const itemAny = item as any;
              const hasText =
                (item.text && item.text.trim()) ||
                (itemAny.data?.text && itemAny.data.text.trim());

              // Only show final messages (not intermediate/transcribing ones)
              const isFinal =
                item.status === ETurnStatus.END ||
                itemAny.data?.isFinal === true ||
                itemAny.data?.final === true ||
                (itemAny.status && String(itemAny.status) === "final");

              if (!hasText) {
                return false;
              }

              // IMPORTANT: Check for user transcription FIRST to avoid misidentifying
              // User transcriptions can come in different formats:
              // 1. metadata.object === "user.transcription"
              // 2. data.speaker includes "user"
              // 3. UID matches the user's RTC UID (not "1000" which is agent)
              // 4. publisher matches user's RTM user ID
              const itemUid = String(
                item.uid ||
                  itemAny.agentUserId ||
                  itemAny.data?.agentUserId ||
                  itemAny.publisher ||
                  "unknown"
              );

              // Check if UID matches user's UID (either RTC or RTM)
              const matchesUserUid = 
                itemUid === userRtcUid || 
                itemUid === userRtmUid ||
                String(item.uid) === userRtcUid ||
                String(itemAny.publisher) === userRtmUid;

              // Check if UID is NOT the agent (agent is always "1000")
              const isNotAgentUid = itemUid !== "1000" && itemUid !== "unknown";

              const isUserMessage =
                item.metadata?.object === "user.transcription" ||
                itemAny.data?.speaker?.toLowerCase().includes("user") ||
                itemAny.object === "user.transcription" ||
                matchesUserUid ||
                (isNotAgentUid && 
                 itemUid !== "" && 
                 !item.metadata?.object?.includes("assistant") &&
                 !itemAny.data?.speaker?.toLowerCase().includes("assistant"));

              const isAgentMessage =
                !isUserMessage &&
                (itemUid === "1000" ||
                  item.metadata?.object === "assistant.transcription" ||
                  itemAny.object === "assistant.transcription" ||
                  itemAny.data?.speaker?.toLowerCase().includes("assistant") ||
                  (item.metadata && "quiet" in item.metadata));

              // Show ALL user messages (including intermediate) so voice transcriptions don't disappear
              // Show ALL agent messages (including intermediate) for real-time updates
              // We'll handle deduplication in the message update logic below
              // Only filter out if it's neither user nor agent
              if (!isUserMessage && !isAgentMessage) {
                return false;
              }

              return true;
            })
            .map((item) => {
              // Support both our structure (item.text) and Frank's structure (item.data.text)
              const itemAny = item as any;
              const text = item.text || itemAny.data?.text || "";
              const itemUid = String(
                item.uid ||
                  itemAny.agentUserId ||
                  itemAny.data?.agentUserId ||
                  itemAny.publisher ||
                  "unknown"
              );

              // IMPORTANT: Check for user transcription FIRST to avoid misidentifying user messages as agent
              // Use the same detection logic as in the filter above
              const matchesUserUid = 
                itemUid === userRtcUid || 
                itemUid === userRtmUid ||
                String(item.uid) === userRtcUid ||
                String(itemAny.publisher) === userRtmUid;

              const isNotAgentUid = itemUid !== "1000" && itemUid !== "unknown";

              const isUserMessage =
                item.metadata?.object === "user.transcription" ||
                itemAny.data?.speaker?.toLowerCase().includes("user") ||
                itemAny.object === "user.transcription" ||
                matchesUserUid ||
                (isNotAgentUid && 
                 itemUid !== "" && 
                 !item.metadata?.object?.includes("assistant") &&
                 !itemAny.data?.speaker?.toLowerCase().includes("assistant"));

              // Check if it's agent: UID is "1000" or the metadata indicates it's an agent transcription
              // Only mark as agent if it's NOT a user message
              const isAgent =
                !isUserMessage &&
                (itemUid === "1000" ||
                  item.metadata?.object === "assistant.transcription" ||
                  itemAny.object === "assistant.transcription" ||
                  itemAny.data?.speaker?.toLowerCase().includes("assistant") ||
                  (item.metadata && "quiet" in item.metadata)); // Agent transcriptions have "quiet" field

              // Debug: Uncomment if needed for ASR debugging
              // console.log("[ChatInterface] Transcript item:", { itemUid, text: text.substring(0, 50), isUserMessage, isAgent });
              return {
                role: isAgent ? "assistant" : "user",
                content: text,
                uid: itemUid,
                turnId: item.turn_id, // Include turn_id for tracking
                turn_id: item.turn_id, // Also include as turn_id for compatibility
                timestamp: item._time || Date.now(), // Include timestamp for sorting
              } as ChatMessage & {
                turnId?: number;
                turn_id?: number;
                timestamp?: number;
              };
            });

          // Debug: Uncomment if needed
          // console.log("[ChatInterface] New messages from transcripts:", newMessages);

          // Check if we have any agent messages to clear waiting state
          const hasAgentMessage = newMessages.some(
            (msg) => msg.role === "assistant" && msg.content.trim()
          );
          if (hasAgentMessage) {
            setWaitingForAgent(false);
          }

          // Update messages, tracking by turn_id to replace intermediate messages with final ones
          setMessages((prev) => {
            // FIRST: Remove ALL loading messages from prev - they will be replaced by actual transcripts
            const prevWithoutLoading = prev.filter((msg) => !msg.isLoading);

            // Use a single map to track messages by key, preserving order
            const messagesMap = new Map<string, ChatMessage>();

            // First, add all existing messages from prev (without loading ones)
            // Use index as part of key to ensure uniqueness and preserve order
            prevWithoutLoading.forEach((msg, index) => {
              const turnId = (msg as any).turnId || (msg as any).turn_id;
              // Include role and index in key to prevent collisions between user and agent messages
              const key =
                turnId !== undefined && turnId !== null && turnId !== -1
                  ? `${msg.role}-${msg.uid || "unknown"}-${turnId}`
                  : `${msg.role}-${msg.uid || "unknown"}-${index}-${
                      msg.content || "no-content"
                    }`;
              messagesMap.set(key, msg);
            });

            // Then, update/add new messages (this will replace existing ones with same key)
            newMessages.forEach((msg) => {
              if (!msg.content.trim()) return;

              const itemAny = msg as any;
              const turnId = itemAny.turnId || itemAny.turn_id;

              // For user messages, FIRST find and delete ANY loading message from this user
              // This must happen before key generation to ensure loading messages are removed
              if (msg.role === "user" && msg.uid) {
                let loadingKeysToDelete: string[] = [];
                let shouldSkip = false;

                // Find ALL loading messages from this user and mark them for deletion
                for (const [
                  existingKey,
                  existingMsg,
                ] of messagesMap.entries()) {
                  const isLoading = existingMsg.isLoading === true;
                  const isUser = existingMsg.role === "user";
                  const sameUid = String(existingMsg.uid) === String(msg.uid);
                  const exactContentMatch =
                    existingMsg.content.trim().toLowerCase() ===
                    msg.content.trim().toLowerCase();

                  if (!isUser || !sameUid) {
                    continue; // Skip messages that don't match user/uid
                  }

                  // If it's a loading message, mark it for deletion
                  if (isLoading) {
                    loadingKeysToDelete.push(existingKey);
                  } else if (exactContentMatch && !isLoading) {
                    // Exact duplicate (non-loading) - skip adding this transcript
                    shouldSkip = true;
                    break; // Found duplicate, exit loop
                  }
                }

                // Delete ALL loading messages found (do this after the loop to avoid modifying while iterating)
                loadingKeysToDelete.forEach((key) => {
                  messagesMap.delete(key);
                });

                if (shouldSkip) {
                  return; // Don't add this message at all - we already have it
                }
              }

              // Now generate the key for this message
              // Include role in key to prevent collisions between user and agent messages
              const key =
                turnId !== undefined && turnId !== null && turnId !== -1
                  ? `${msg.role}-${msg.uid || "unknown"}-${turnId}`
                  : `${msg.role}-${msg.uid || "unknown"}-${
                      msg.content || "no-content"
                    }`;

              const existingMsg = messagesMap.get(key);

              if (existingMsg) {
                // Only replace if it's the same role (user messages should only replace user messages, etc.)
                // This prevents agent messages from overwriting user messages and vice versa
                if (existingMsg.role === msg.role) {
                  // Replace existing message with same turn_id and role
                  // For agent messages, always update (for real-time streaming)
                  // For user messages, always update (to replace intermediate with final, or update final)
                  const isAgentMsg = msg.role === "assistant";

                  // Always update - for agents it's real-time, for users we want final versions
                  messagesMap.set(key, msg);
                } else {
                  // Different role - this shouldn't happen with the new key format, but log it just in case
                  console.warn(
                    "[ChatInterface] Key collision detected between different roles:",
                    {
                      key,
                      existingRole: existingMsg.role,
                      newRole: msg.role,
                      existingContent: existingMsg.content.substring(0, 50),
                      newContent: msg.content.substring(0, 50),
                    }
                  );
                  // Add the new message with a modified key to avoid collision
                  const uniqueKey = `${key}-${Date.now()}`;
                  messagesMap.set(uniqueKey, msg);
                }
              } else {
                // New message with this key (loading message already deleted if found)
                messagesMap.set(key, msg);
              }
            });

            // Convert to array for sorting
            const uniqueMessages = Array.from(messagesMap.values());

            // FINAL SAFETY CHECK: Remove any remaining loading messages
            const messagesWithoutLoading = uniqueMessages.filter(
              (msg) => !msg.isLoading
            );

            // Sort messages by timestamp first (chronological order), then by turn_id as fallback
            // This ensures messages appear in the order they were actually sent/received
            const sortedMessages = messagesWithoutLoading.sort((a, b) => {
              // Primary sort: timestamp (actual chronological order)
              const timestampA = (a as any).timestamp || 0;
              const timestampB = (b as any).timestamp || 0;

              if (timestampA !== timestampB) {
                return timestampA - timestampB; // Ascending: older first, newer at bottom
              }

              // Secondary sort: turn_id (if timestamps are the same)
              const turnIdA = (a as any).turnId || (a as any).turn_id || 0;
              const turnIdB = (b as any).turnId || (b as any).turn_id || 0;
              return turnIdA - turnIdB;
            });

            console.log(
              "[ChatInterface] Updated messages (sorted, loading removed):",
              sortedMessages
            );
            return sortedMessages;
          });
        };

        // Subscribe to the event using the EventHelper's on method
        (convoAPI as any).on(
          EConversationalAIAPIEvents.TRANSCRIPT_UPDATED,
          transcriptHandler
        );
      } catch (error) {
        console.error("Toolkit init error:", error);
      }
    };

    initToolkit();

    return () => {
      isMounted = false;
      if (convoApiRef.current) {
        try {
          // Remove all event listeners before cleanup
          (convoApiRef.current as any).removeAllEventListeners();
          // Note: unsubscribe is async but cleanup can't be async, so we call it without await
          convoApiRef.current.unsubscribe().catch(() => {
            // Ignore unsubscribe errors in cleanup
          });
          convoApiRef.current.destroy();
        } catch (e) {
          // Ignore cleanup errors
        }
        convoApiRef.current = null;
      }
      if (rtmClientRef.current) {
        rtmClientRef.current.logout().catch(() => {});
        rtmClientRef.current = null;
      }
    };
  }, [agoraConfig, agora?.client]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading || !convoApiRef.current || !agentId) return;

    const userMessage = input;
    setInput("");
    setIsLoading(true);
    setWaitingForAgent(true); // Start waiting for agent response

    // Add a loading indicator (3 dots) instead of the actual message
    // The actual message will come from the transcription event
    const loadingTimestamp = Date.now();
    setMessages((prev) => {
      const loadingMsg: ChatMessage = {
        role: "user",
        content: "", // Empty content, will show loading animation
        uid: agoraConfig?.rtmUserId,
        turnId: -1, // Temporary ID for loading message
        turn_id: -1,
        timestamp: loadingTimestamp,
        isLoading: true, // Flag to show loading animation
      };

      // Add to end and sort to maintain order
      const updated = [...prev, loadingMsg].sort((a, b) => {
        const timestampA = a.timestamp || 0;
        const timestampB = b.timestamp || 0;
        if (timestampA !== timestampB) return timestampA - timestampB;
        const turnIdA = a.turnId || a.turn_id || 0;
        const turnIdB = b.turnId || b.turn_id || 0;
        return turnIdA - turnIdB;
      });
      return updated;
    });

    try {
      // Use toolkit's sendText method
      const message: IChatMessageText = {
        messageType: EChatMessageType.TEXT,
        text: userMessage,
        priority: EChatMessagePriority.INTERRUPTED,
        responseInterruptable: true,
      };
      await convoApiRef.current.sendText("1000", message);
      setIsLoading(false);
      // Keep waitingForAgent true until agent responds
    } catch (error: any) {
      console.error("Chat error:", error);
      console.error("Error details:", error?.message, error?.stack);
      // Remove loading message on error
      setMessages((prev) => prev.filter((msg) => !msg.isLoading));
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
      setIsLoading(false);
      setWaitingForAgent(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleEndCall = async () => {
    // Call leave endpoint for the Agora Conversational AI agent
    if (agentId) {
      try {
        await fetch("/api/agora/leave-agent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ agentId, credentials }),
        });
      } catch (e) {
        // Ignore errors when leaving agent
      }
    }

    if (agora) {
      agora.leave();
    }
    if (convoApiRef.current) {
      try {
        await convoApiRef.current.unsubscribe();
        convoApiRef.current.destroy();
      } catch (e) {
        // Ignore cleanup errors
      }
      convoApiRef.current = null;
    }
    if (rtmClientRef.current) {
      rtmClientRef.current.logout().catch(() => {});
      rtmClientRef.current = null;
    }
    onClose();
  };

  const handleClose = () => {
    handleEndCall();
  };

  const handleToggleMute = () => {
    if (agora) {
      agora.toggleMute();
    }
  };

  const handleAgentVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setAgentVolume(newVolume);
    if (agora?.remoteAudioTrack) {
      agora.remoteAudioTrack.setVolume(newVolume);
    }
  };

  const handleVolumeMin = () => {
    setAgentVolume(0);
    if (agora?.remoteAudioTrack) {
      agora.remoteAudioTrack.setVolume(0);
    }
  };

  const handleVolumeMax = () => {
    setAgentVolume(100);
    if (agora?.remoteAudioTrack) {
      agora.remoteAudioTrack.setVolume(100);
    }
  };

  // Handle microphone change
  const handleMicrophoneChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const deviceId = e.target.value;
    if (!agora?.localAudioTrack) {
      console.error("Local audio track not available");
      return;
    }

    const previousDeviceId = selectedMicrophone;
    setSelectedMicrophone(deviceId);

    try {
      // Use setDevice method on the microphone audio track
      await agora.localAudioTrack.setDevice(deviceId);
      console.log("Microphone changed to:", deviceId);
    } catch (error) {
      console.error("Error setting microphone:", error);
      // Revert selection on error
      setSelectedMicrophone(previousDeviceId);
    }
  };

  return (
    <>
      {/* Video Container - Always visible, positioned directly on top of chat or minimized button */}
      {agora?.remoteVideoTrack && (
        <div 
          ref={videoContainerRef}
          className={`fixed w-80 h-[240px]`}
          style={{ 
            zIndex: 45, // Lower z-index so buttons (z-50+) are always clickable
            // Position directly on top with no gap
            // Chat container: bottom-6 (24px) + h-[400px] = top edge at 424px
            // Overlap by 30px to compensate for video/canvas gap when expanded
            // When minimized: button is at bottom-6 (24px), button is ~40-50px tall, so top is at ~64-74px
            // Overlap by 40px (30px + 10px more) to compensate for canvas/video gap
            // When minimized, center Effie over the button
            // Button is at right-6 (24px = 1.5rem), button is ~180px wide
            // To perfectly center: button center is at 24px + 90px = 114px from right
            // Effie (320px wide) center should be at 114px from right
            // So Effie's right edge = 114px + 160px = 274px from right
            // But since Effie is wider, align right edges and use transform to shift left
            bottom: isMinimized ? '34px' : '394px',
            right: isMinimized ? '1.5rem' : '1.5rem', // Align right edge with button
            transform: isMinimized ? 'translateX(70px)' : 'none', // Shift right by 70px to center
            pointerEvents: 'none' // Always allow clicks through so buttons are clickable
          }}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain"
            style={{ backgroundColor: 'transparent', display: 'block' }}
          />
        </div>
      )}

      {isMinimized ? (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsMinimized(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-sm font-medium transition"
          >
            <div className="relative">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" />
              </svg>
              {agora?.isConnected && (
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full border border-white animate-pulse"></div>
              )}
            </div>
            <span>AI Assistant</span>
            {agora?.isConnected && (
              <span className="text-xs bg-green-500 px-2 py-0.5 rounded-full">
                Active
              </span>
            )}
          </button>
        </div>
      ) : (
        <div className="fixed bottom-6 right-6 z-50 w-80">
      
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 h-[400px] flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="flex items-center justify-between p-2.5 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  agora?.isConnected ? "bg-green-100" : "bg-gray-100"
                }`}
              >
                <svg
                  className={`w-4 h-4 ${
                    agora?.isConnected ? "text-green-600" : "text-gray-400"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" />
                </svg>
              </div>
              {agora?.isConnected && (
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
              )}
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-900">
                AI Assistant
              </h3>
              {isInitializing ? (
                <span className="text-[10px] text-gray-500">Connecting...</span>
              ) : agora?.isConnected ? (
                <span className="text-[10px] text-green-600 font-medium">
                  Active
                </span>
              ) : (
                <span className="text-[10px] text-gray-500">Ready</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsMinimized(true)}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition text-gray-600"
              title="Minimize"
              aria-label="Minimize"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>
            <button
              onClick={handleEndCall}
              disabled={isInitializing}
              className="bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-3 py-1.5 rounded-lg transition font-medium flex items-center justify-center gap-1.5 text-xs relative"
              style={{ zIndex: 60 }}
              title="End conversation"
              aria-label="End conversation"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M16 8l-8 8m0 0l-2-2m2 2l2-2"
                />
              </svg>
              <span>End</span>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-2.5 space-y-2 bg-gray-50 text-xs">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-lg px-3 py-1.5 ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 shadow-sm border border-gray-100"
                }`}
              >
                {msg.isLoading ? (
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce opacity-75"></div>
                    <div
                      className="w-1.5 h-1.5 bg-current rounded-full animate-bounce opacity-75"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 bg-current rounded-full animate-bounce opacity-75"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                ) : (
                  <p className="text-xs leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </p>
                )}
              </div>
            </div>
          ))}
          {/* Show loading indicator when waiting for agent response */}
          {waitingForAgent && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 rounded-lg px-3 py-1.5 shadow-sm border border-gray-100">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area - Compact Design */}
        <div className="p-2.5 border-t border-gray-200 bg-white space-y-2">
          {/* Mute Button and Volume Control - Same Line */}
          <div className="flex items-center gap-1.5">
            {/* Mute Button - Icon Only */}
            <button
              onClick={handleToggleMute}
              disabled={!agora?.isConnected || isInitializing}
              className={`p-1.5 rounded-lg transition ${
                agora?.isMuted
                  ? "bg-red-100 text-red-700 hover:bg-red-200"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
              title={agora?.isMuted ? "Unmute microphone" : "Mute microphone"}
              aria-label={agora?.isMuted ? "Unmute" : "Mute"}
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {agora?.isMuted ? (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                    />
                  </>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                )}
              </svg>
            </button>

            {/* Agent Volume Control */}
            <button
              onClick={handleVolumeMin}
              disabled={!agora?.isConnected || isInitializing}
              className="p-1 rounded transition text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Volume 0"
              aria-label="Set volume to 0"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={agentVolume}
              onChange={handleAgentVolumeChange}
              disabled={!agora?.isConnected || isInitializing}
              className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              title={`Agent volume: ${agentVolume}%`}
            />
            <button
              onClick={handleVolumeMax}
              disabled={!agora?.isConnected || isInitializing}
              className="p-1 rounded transition text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Volume 100"
              aria-label="Set volume to 100"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            </button>
          </div>

          {/* Text Input - Always Visible */}
          <div className="flex gap-1.5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 bg-gray-50"
              disabled={isLoading || isInitializing || !convoApiRef.current}
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              disabled={
                isLoading ||
                !input.trim() ||
                isInitializing ||
                !convoApiRef.current ||
                !agentId
              }
              className="bg-gray-700 hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-3 py-1.5 rounded-lg text-xs transition font-medium"
              title={
                !convoApiRef.current || !agentId
                  ? "Waiting for agent to be ready..."
                  : ""
              }
            >
              Send
            </button>
          </div>

          {/* Audio Settings - Collapsible */}
          <details className="group">
            <summary className="cursor-pointer text-[10px] text-gray-500 hover:text-gray-700 flex items-center gap-1">
              <svg
                className="w-2.5 h-2.5 transition-transform group-open:rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Audio settings
            </summary>
            <div className="mt-1.5 pt-1.5 border-t border-gray-100">
              <label className="block text-[10px] text-gray-600 mb-1">
                Microphone
              </label>
              <select
                value={selectedMicrophone}
                onChange={handleMicrophoneChange}
                disabled={!agora?.isConnected || isInitializing}
                className="w-full text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              >
                {microphones.map((mic) => (
                  <option key={mic.deviceId} value={mic.deviceId}>
                    {mic.label || `Microphone ${mic.deviceId.slice(0, 8)}`}
                  </option>
                ))}
              </select>
            </div>
          </details>
        </div>
      </div>
    </div>
      )}
    </>
  );
}
