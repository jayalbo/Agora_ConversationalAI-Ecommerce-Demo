'use client';

import { useState, useEffect } from 'react';
import { AllCredentials, validateCredentials } from '@/lib/types/credentials';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (credentials: AllCredentials) => void;
  initialCredentials: AllCredentials | null;
}

export default function SettingsModal({
  isOpen,
  onClose,
  onSave,
  initialCredentials,
}: SettingsModalProps) {
  const [formData, setFormData] = useState<AllCredentials>({
    agora: {
      appId: '',
      appCertificate: '',
      apiKey: '',
      apiSecret: '',
    },
    llm: {
      url: 'https://api.openai.com/v1/chat/completions',
      apiKey: '',
      model: '',
    },
    tts: {
      apiKey: '',
      region: 'eastus',
    },
    avatar: {
      heygenApiToken: '',
      heygenAvatarId: '',
      akoolApiToken: '',
      akoolAvatarId: '',
    },
  });

  const [errors, setErrors] = useState<string[]>([]);

  // Pre-fill form with existing credentials when modal opens
  useEffect(() => {
    if (isOpen && initialCredentials) {
      setFormData({
        agora: { ...initialCredentials.agora },
        llm: { ...initialCredentials.llm },
        tts: { ...initialCredentials.tts },
        avatar: initialCredentials.avatar ? { ...initialCredentials.avatar } : {
          heygenApiToken: '',
          heygenAvatarId: '',
          akoolApiToken: '',
          akoolAvatarId: '',
        },
      });
    }
  }, [isOpen, initialCredentials]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateCredentials(formData);
    if (!validation.valid) {
      setErrors(validation.missingFields);
      return;
    }

    setErrors([]);
    onSave(formData);
    onClose();
  };

  const handleInputChange = (
    section: 'agora' | 'llm' | 'tts' | 'avatar',
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Conversational AI Settings
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl leading-none"
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          {/* Security Warning */}
          <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              <strong>Security Notice:</strong> Credentials are stored in your browser&apos;s localStorage.
              Only use this in trusted environments and ensure you&apos;re using HTTPS in production.
            </p>
          </div>

          {/* Error Display */}
          {errors.length > 0 && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg">
              <p className="text-sm font-semibold text-red-800 dark:text-red-300 mb-2">
                Please fill in the following required fields:
              </p>
              <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-400">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Agora Credentials */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 pb-2 border-b border-gray-200 dark:border-gray-600">
                Agora Credentials (Required)
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    App ID *
                  </label>
                  <input
                    type="text"
                    value={formData.agora.appId}
                    onChange={(e) => handleInputChange('agora', 'appId', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Enter Agora App ID"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    App Certificate *
                  </label>
                  <input
                    type="password"
                    value={formData.agora.appCertificate}
                    onChange={(e) => handleInputChange('agora', 'appCertificate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Enter Agora App Certificate"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    API Key *
                  </label>
                  <input
                    type="password"
                    value={formData.agora.apiKey}
                    onChange={(e) => handleInputChange('agora', 'apiKey', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Enter Agora API Key"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    API Secret *
                  </label>
                  <input
                    type="password"
                    value={formData.agora.apiSecret}
                    onChange={(e) => handleInputChange('agora', 'apiSecret', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Enter Agora API Secret"
                  />
                </div>
              </div>
            </div>

            {/* LLM Credentials */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 pb-2 border-b border-gray-200 dark:border-gray-600">
                LLM Credentials (Required)
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    API URL *
                  </label>
                  <input
                    type="text"
                    value={formData.llm.url}
                    onChange={(e) => handleInputChange('llm', 'url', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="https://api.openai.com/v1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    API Key *
                  </label>
                  <input
                    type="password"
                    value={formData.llm.apiKey}
                    onChange={(e) => handleInputChange('llm', 'apiKey', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Enter LLM API Key"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Model *
                  </label>
                  <input
                    type="text"
                    value={formData.llm.model}
                    onChange={(e) => handleInputChange('llm', 'model', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="e.g., gpt-4o"
                  />
                </div>
              </div>
            </div>

            {/* TTS Credentials */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 pb-2 border-b border-gray-200 dark:border-gray-600">
                Text-to-Speech Credentials (Required)
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    API Key *
                  </label>
                  <input
                    type="password"
                    value={formData.tts.apiKey}
                    onChange={(e) => handleInputChange('tts', 'apiKey', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Enter TTS API Key"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Region *
                  </label>
                  <input
                    type="text"
                    value={formData.tts.region}
                    onChange={(e) => handleInputChange('tts', 'region', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="eastus"
                  />
                </div>
              </div>
            </div>

            {/* Avatar Credentials (Optional) */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 pb-2 border-b border-gray-200 dark:border-gray-600">
                Avatar Credentials (Optional)
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    HeyGen API Token
                  </label>
                  <input
                    type="password"
                    value={formData.avatar?.heygenApiToken || ''}
                    onChange={(e) => handleInputChange('avatar', 'heygenApiToken', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Enter HeyGen API Token (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    HeyGen Avatar ID
                  </label>
                  <input
                    type="text"
                    value={formData.avatar?.heygenAvatarId || ''}
                    onChange={(e) => handleInputChange('avatar', 'heygenAvatarId', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Enter HeyGen Avatar ID (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Akool API Token
                  </label>
                  <input
                    type="password"
                    value={formData.avatar?.akoolApiToken || ''}
                    onChange={(e) => handleInputChange('avatar', 'akoolApiToken', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Enter Akool API Token (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Akool Avatar ID
                  </label>
                  <input
                    type="text"
                    value={formData.avatar?.akoolAvatarId || ''}
                    onChange={(e) => handleInputChange('avatar', 'akoolAvatarId', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Enter Akool Avatar ID (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-600">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 dark:bg-blue-500 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Save Credentials
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
