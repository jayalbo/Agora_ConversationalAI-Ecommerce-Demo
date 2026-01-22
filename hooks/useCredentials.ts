import { useState, useEffect } from 'react';
import { AllCredentials } from '@/lib/types/credentials';

const STORAGE_KEY = 'convoai_credentials';

/**
 * Hook for managing credentials in browser localStorage
 */
export function useCredentials() {
  const [credentials, setCredentials] = useState<AllCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load credentials from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setCredentials(parsed);
      }
    } catch (error) {
      console.error('Failed to load credentials from localStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save credentials to localStorage
  const saveCredentials = (newCredentials: AllCredentials) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newCredentials));
      setCredentials(newCredentials);
      return true;
    } catch (error) {
      console.error('Failed to save credentials to localStorage:', error);
      return false;
    }
  };

  // Clear credentials from localStorage
  const clearCredentials = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setCredentials(null);
      return true;
    } catch (error) {
      console.error('Failed to clear credentials from localStorage:', error);
      return false;
    }
  };

  return {
    credentials,
    isLoading,
    saveCredentials,
    clearCredentials,
  };
}
