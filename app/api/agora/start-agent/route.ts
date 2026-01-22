import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import pkg from "agora-token";
const { RtcTokenBuilder, RtcRole } = pkg;
import { fetchProduct } from "@/lib/product";

// Note: Product data is now centralized in lib/product.ts
// This keeps the code simple and maintainable for potential customers

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { channel, userId, token, productId, credentials } = body;

    console.log(`[POST] /api/agora/start-agent`);
    console.log(
      "Request body:",
      JSON.stringify(
        { channel, userId, token: token?.substring(0, 20) + "...", productId },
        null,
        2
      )
    );

    if (!channel || !userId || !token) {
      return NextResponse.json(
        { error: "Channel, userId, and token are required" },
        { status: 400 }
      );
    }

    // Get product context - productId defaults to '1' if not provided
    const product = await fetchProduct(productId || "1");
    const context = `You are Katya, a fun, energetic, and enthusiastic shopping assistant! You're passionate about helping customers find the perfect product and you get genuinely excited about cool features. You have a warm, friendly personality with a touch of playfulness - think of yourself as that helpful friend who knows all about tech and loves sharing cool details.

Your name is Katya, and you should introduce yourself naturally when appropriate. You're knowledgeable but never boring - you make product information interesting and engaging!

Product: ${product.name}
Price: $${product.price} (Original: $${product.originalPrice}, Save ${
      product.discount
    }%)
Rating: ${product.rating}/5 stars (${product.reviewCount} reviews)
Stock Status: ${product.inStock ? "In Stock" : "Out of Stock"}
Description: ${product.description}

Specifications:
${Object.entries(product.specifications)
  .map(([key, value]) => `- ${key}: ${value}`)
  .join("\n")}

${
  product.specifications?.Colors
    ? `Available Colors: ${product.specifications.Colors}`
    : ""
}

Recent Customer Reviews:
${product.reviews
  .slice(0, 5)
  .map(
    (r: any) =>
      `• ${r.userName} (${r.rating}/5 stars): "${r.title}" - ${r.comment}`
  )
  .join("\n\n")}

YOUR PERSONALITY & STYLE:
- Be enthusiastic and friendly - show genuine excitement about cool features
- Use natural, conversational language (you can say things like "Oh, that's such a great question!" or "I love this feature!")
- Be helpful and informative, but keep it fun and engaging
- Show personality - you're not a robot, you're Effie!
- When highlighting features, get a little excited about the cool ones (like AI learning, music sync, etc.)
- Be warm and approachable - make customers feel comfortable asking questions
- NEVER use emojis in your responses - use words to express emotion instead (this is critical for TTS compatibility)

IMPORTANT RULES:
1. Answer questions about this product, including: features, reviews, pricing, specifications, availability, colors, variants, shipping, returns, and any product-related questions
2. If asked about product availability or colors, provide helpful information. ${
      product.specifications?.Colors
        ? `For example, if asked "Can I get Red?" or "Do you have it in red?", explain the available colors (${product.specifications.Colors}) and that red is not currently available`
        : "If the product has color options, mention them. If not, explain that this product comes in the available options shown in the specifications."
    }
3. If asked about unrelated topics (cooking, baking, recipes, weather, sports, politics, general knowledge, completely different products), politely redirect with personality: "Oh, I'd love to chat about that, but I'm here to help you with the ${
      product.name
    }! Want to know about its awesome features or what customers are saying?"
4. Be helpful, friendly, and engaging - show enthusiasm!
5. Reference specific reviews when relevant to answer questions - mention what customers loved!
6. If asked about availability, mention it's ${
      product.inStock ? "currently in stock" : "currently out of stock"
    }
7. Help with purchase decisions by comparing features, mentioning reviews, and highlighting value - get excited about the cool features!
8. Answer questions about product variants, colors, and options naturally and helpfully
9. NEVER use emojis, symbols, or special characters that could break text-to-speech - use words to express emotions and reactions
10. Remember: You're Effie - be yourself, be fun, and make shopping enjoyable!`;

    // Use credentials from request body with fallback to environment variables
    const APP_ID = credentials?.agora?.appId || process.env.AGORA_APP_ID;
    const API_KEY = credentials?.agora?.apiKey || process.env.AGORA_API_KEY;
    const API_SECRET = credentials?.agora?.apiSecret || process.env.AGORA_API_SECRET;
    const APP_CERTIFICATE = credentials?.agora?.appCertificate || process.env.AGORA_APP_CERTIFICATE;

    if (!APP_ID || !API_KEY || !API_SECRET || !APP_CERTIFICATE) {
      return NextResponse.json(
        { error: "Missing Agora credentials. Please configure in Settings." },
        { status: 400 }
      );
    }

    const role = RtcRole.PUBLISHER;
    const expirationTimeInSeconds = 3600;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
    const agentRtmUserId = "1000"; // Agent RTM user ID

    // Generate token valid for both RTC and RTM for the agent
    // RTC UID: 1000 (numeric to match agent_rtc_uid), RTM UID: "1000" (string)
    const agentToken = RtcTokenBuilder.buildTokenWithRtm2(
      APP_ID,
      APP_CERTIFICATE,
      channel,
      1000, // RTC UID (numeric, matches agent_rtc_uid "1000")
      role,
      privilegeExpiredTs, // token expiration
      privilegeExpiredTs, // join channel privilege
      privilegeExpiredTs, // publish audio privilege
      privilegeExpiredTs, // publish video privilege
      privilegeExpiredTs, // publish data stream privilege
      agentRtmUserId, // RTM user ID (string "1000")
      privilegeExpiredTs // RTM token expiration
    );

    // Generate token for HeyGen avatar (UID 2000)
    const avatarRtcUid = 2000;
    const avatarToken = RtcTokenBuilder.buildTokenWithRtm2(
      APP_ID,
      APP_CERTIFICATE,
      channel,
      avatarRtcUid, // RTC UID for avatar (numeric)
      role,
      privilegeExpiredTs, // token expiration
      privilegeExpiredTs, // join channel privilege
      privilegeExpiredTs, // publish audio privilege
      privilegeExpiredTs, // publish video privilege
      privilegeExpiredTs, // publish data stream privilege
      avatarRtcUid.toString(), // RTM user ID (string)
      privilegeExpiredTs // RTM token expiration
    );

    const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

    // Get HeyGen configuration (optional)
    const heygenApiToken = credentials?.avatar?.heygenApiToken || process.env.HEYGEN_API_TOKEN || "";
    const heygenAvatarId = credentials?.avatar?.heygenAvatarId || process.env.HEYGEN_AVATAR_ID || "";

    // Get LLM configuration (required)
    const LLM_URL = credentials?.llm?.url || process.env.LLM_URL || "https://api.openai.com/v1/chat/completions";
    const LLM_API_KEY = credentials?.llm?.apiKey || process.env.LLM_API_KEY;
    const LLM_MODEL = credentials?.llm?.model || process.env.LLM_MODEL;

    // Get TTS configuration (required)
    const TTS_API_KEY = credentials?.tts?.apiKey || process.env.TTS_API_KEY;
    const TTS_REGION = credentials?.tts?.region || process.env.TTS_REGION || "eastus";

    // Validate required credentials
    if (!LLM_API_KEY || !LLM_MODEL || !TTS_API_KEY) {
      return NextResponse.json(
        { error: "Missing LLM or TTS credentials. Please configure in Settings." },
        { status: 400 }
      );
    }

    const payload = {
      name: `ecommerce_ai_agent_${Date.now()}_${Math.random()
        .toString(36)
        .substring(7)}`,
      properties: {
        channel: channel,
        token: agentToken,
        agent_rtc_uid: "1000",
        agent_rtm_uid: "1000",
        remote_rtc_uids: [`${Number(userId)}`],
        idle_timeout: 120,
        advanced_features: {
          enable_rtm: true, // Start the Signaling service (required for transcripts)
        },
        parameters: {
          data_channel: "rtm", // Enable Signaling as the data transmission channel (required for transcripts)
          audio_scenario: "chorus",
          enable_aivad: true,
          enable_error_message: true,
          enable_metrics: true,
        },
        llm: {
          url: LLM_URL,
          api_key: LLM_API_KEY,
          system_messages: [
            {
              role: "system",
              content: context,
            },
          ],
          greeting_message:
            "Hello! I'm here to help you with this product. Ask me anything about features, reviews, or specifications!",
          failure_message:
            "I'm sorry, I can only assist with questions related to this product. Could you please ask about our product?",
          max_history: 30,
          input_modalities: ["text"],
          output_modalities: ["text"],
          params: {
            model: LLM_MODEL,
          },
        },
        asr: {
          vendor: "ares",
          language: "en-US",
        },
        tts: {
          vendor: "microsoft",
          params: {
            key: TTS_API_KEY,
            region: TTS_REGION,
            voice_name: "en-US-AriaNeural",
            sample_rate: 24000,
            rate: "1.3",
          },
        },
        avatar: {
          vendor: "heygen",
          enable: heygenApiToken && heygenAvatarId ? true : false,
          params: {
            quality: "low",
            api_key: heygenApiToken,
            agora_uid: avatarRtcUid.toString(),
            agora_token: avatarToken,
            avatar_id: heygenAvatarId,
            disable_idle_timeout: false,
            activity_idle_timeout: 60,
          },
        },
      },
    };

    console.log(`[start-agent] Agent token (UID 1000): ${agentToken}`);
    console.log(`[start-agent] User token (UID ${userId}): ${token}`);
    console.log(
      `[start-agent] Complete /join payload:`,
      JSON.stringify(payload, null, 2)
    );

    const response = await axios.post(
      `https://api.agora.io/api/conversational-ai-agent/v2/projects/${APP_ID}/join`,
      payload,
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response:", JSON.stringify(response.data, null, 2));
    return NextResponse.json(response.data);
  } catch (error) {
    const err = error as any;
    const status = err?.response?.status;
    const data = err?.response?.data;

    // Handle 409 Conflict - agent already running
    if (status === 409 && data?.agent_id) {
      console.log(
        "Agent already running, returning existing agent:",
        data.agent_id
      );
      return NextResponse.json({
        agent_id: data.agent_id,
        status: data.status || "RUNNING",
        create_ts: data.create_ts,
        ...data,
      });
    }

    const message =
      data?.detail ||
      data?.message ||
      err?.message ||
      "Failed to start AI agent";

    console.error(
      "[start-agent] error:",
      JSON.stringify(data || err?.message, null, 2)
    );
    return NextResponse.json(
      { error: message, detail: data || err?.message },
      { status: 500 }
    );
  }
}
