import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { agentId, credentials } = body;

    if (!agentId) {
      return NextResponse.json(
        { error: "agentId is required" },
        { status: 400 }
      );
    }

    // Use credentials from request body with fallback to environment variables
    const APP_ID = credentials?.agora?.appId || process.env.AGORA_APP_ID;
    const API_KEY = credentials?.agora?.apiKey || process.env.AGORA_API_KEY;
    const API_SECRET = credentials?.agora?.apiSecret || process.env.AGORA_API_SECRET;

    if (!APP_ID || !API_KEY || !API_SECRET) {
      return NextResponse.json(
        { error: "Missing Agora credentials. Please configure in Settings." },
        { status: 400 }
      );
    }

    const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

    console.log(`[leave-agent] Attempting to leave agent: ${agentId}`);

    // Try POST with agent ID in the path (most likely format)
    const response = await axios.post(
      `https://api.agora.io/api/conversational-ai-agent/v2/projects/${APP_ID}/agents/${agentId}/leave`,
      {},
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(`[leave-agent] Successfully left agent: ${agentId}`);

    return NextResponse.json(response.data);
  } catch (error) {
    const err = error as any;
    const status = err?.response?.status;
    const data = err?.response?.data;

    const message =
      data?.detail ||
      data?.message ||
      err?.message ||
      "Failed to leave AI agent";

    console.error(
      "[leave-agent] error - Status:",
      status,
      "URL:",
      `https://api.agora.io/api/conversational-ai-agent/v2/projects/${body.credentials?.agora?.appId || process.env.AGORA_APP_ID}/agents/${agentId}/leave`,
      "Response:",
      JSON.stringify(data || err?.message, null, 2)
    );
    return NextResponse.json(
      { error: message, detail: data || err?.message, status: status },
      { status: status || 500 }
    );
  }
}
