import { NextRequest, NextResponse } from "next/server";
import pkg from "agora-token";
const { RtcTokenBuilder, RtcRole } = pkg;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, credentials } = body;
    const uid = userId ? parseInt(userId) : Math.floor(Math.random() * 100000);
    const channel = `channel_${Date.now()}_${Math.random()
      .toString(36)
      .substring(7)}`;

    // Use credentials from request body with fallback to environment variables
    const APP_ID = credentials?.agora?.appId || process.env.AGORA_APP_ID;
    const APP_CERTIFICATE = credentials?.agora?.appCertificate || process.env.AGORA_APP_CERTIFICATE;

    if (!APP_ID || !APP_CERTIFICATE) {
      return NextResponse.json(
        { error: "Missing Agora credentials. Please configure in Settings." },
        { status: 400 }
      );
    }

    const role = RtcRole.PUBLISHER;
    const expirationTimeInSeconds = 3600;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
    const rtmUserId = uid.toString(); // RTM user ID as string

    // Generate token valid for both RTC and RTM
    // buildTokenWithRtm2: (appId, appCertificate, channelName, uid, role, privilegeExpiredTs, 
    //                     joinChannelPrivilegeExpiredTs, pubAudioPrivilegeExpiredTs, 
    //                     pubVideoPrivilegeExpiredTs, pubDataStreamPrivilegeExpiredTs,
    //                     rtmUid, rtmPrivilegeExpiredTs)
    const token = RtcTokenBuilder.buildTokenWithRtm2(
      APP_ID,
      APP_CERTIFICATE,
      channel,
      uid, // RTC UID (numeric)
      role,
      privilegeExpiredTs, // token expiration
      privilegeExpiredTs, // join channel privilege
      privilegeExpiredTs, // publish audio privilege
      privilegeExpiredTs, // publish video privilege
      privilegeExpiredTs, // publish data stream privilege
      rtmUserId, // RTM user ID (string)
      privilegeExpiredTs // RTM token expiration
    );

    const response = {
      token,
      appId: APP_ID,
      channel: channel,
      uid: uid,
      rtmUserId: rtmUserId, // RTM user ID for text messaging
    };

    console.log(`\n[POST] /api/agora/initialize`);
    console.log("Request:", JSON.stringify(body, null, 2));
    console.log("Response:", JSON.stringify(response, null, 2));

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to initialize Agora session" },
      { status: 500 }
    );
  }
}
