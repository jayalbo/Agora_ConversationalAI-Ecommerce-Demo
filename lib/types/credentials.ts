/**
 * Type definitions for conversational AI credentials
 */

export interface AgoraCredentials {
  appId: string;
  appCertificate: string;
  apiKey: string;
  apiSecret: string;
}

export interface LLMCredentials {
  url: string;
  apiKey: string;
  model: string;
}

export interface TTSCredentials {
  apiKey: string;
  region: string;
}

export interface AvatarCredentials {
  heygenApiToken?: string;
  heygenAvatarId?: string;
  akoolApiToken?: string;
  akoolAvatarId?: string;
}

export interface AllCredentials {
  agora: AgoraCredentials;
  llm: LLMCredentials;
  tts: TTSCredentials;
  avatar?: AvatarCredentials;
}

/**
 * Validates that all required credentials are present
 */
export function validateCredentials(credentials: AllCredentials | null): {
  valid: boolean;
  missingFields: string[];
} {
  const missingFields: string[] = [];

  if (!credentials) {
    return {
      valid: false,
      missingFields: ['All credentials are missing'],
    };
  }

  // Validate Agora credentials
  if (!credentials.agora?.appId) missingFields.push('Agora App ID');
  if (!credentials.agora?.appCertificate) missingFields.push('Agora App Certificate');
  if (!credentials.agora?.apiKey) missingFields.push('Agora API Key');
  if (!credentials.agora?.apiSecret) missingFields.push('Agora API Secret');

  // Validate LLM credentials
  if (!credentials.llm?.url) missingFields.push('LLM URL');
  if (!credentials.llm?.apiKey) missingFields.push('LLM API Key');
  if (!credentials.llm?.model) missingFields.push('LLM Model');

  // Validate TTS credentials
  if (!credentials.tts?.apiKey) missingFields.push('TTS API Key');
  if (!credentials.tts?.region) missingFields.push('TTS Region');

  // Avatar credentials are optional, so we don't validate them

  return {
    valid: missingFields.length === 0,
    missingFields,
  };
}
