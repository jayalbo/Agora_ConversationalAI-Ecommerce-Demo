import { useState, useEffect } from 'react';

const STORAGE_KEY = 'convoai_theme';

export type Theme = 'light' | 'dark';

/**
 * Hook for managing theme (dark/light mode) with localStorage persistence
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark'); // Default to dark mode
  const [isLoading, setIsLoading] = useState(true);

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        setTheme(stored);
      }
    } catch (error) {
      console.error('Failed to load theme from localStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Apply theme class to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch (error) {
      console.error('Failed to save theme to localStorage:', error);
    }
  };

  return {
    theme,
    isLoading,
    toggleTheme,
    isDark: theme === 'dark',
  };
}
