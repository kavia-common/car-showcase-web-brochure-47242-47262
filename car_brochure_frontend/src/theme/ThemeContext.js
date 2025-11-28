import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { theme as baseTheme } from './theme';

const ThemeContext = createContext({
  theme: baseTheme,
  mode: 'light',
  toggle: () => {}
});

// PUBLIC_INTERFACE
export function ThemeProvider({ children }) {
  /**
   * Provides theme tokens and a toggle for future dark/light support.
   * Persists mode to localStorage.
   */
  const [mode, setMode] = useState(() => localStorage.getItem('theme-mode') || 'light');

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const value = useMemo(() => ({
    theme: baseTheme,
    mode,
    toggle: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }), [mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// PUBLIC_INTERFACE
export function useTheme() {
  /** Hook to access the theme context values. */
  return useContext(ThemeContext);
}
