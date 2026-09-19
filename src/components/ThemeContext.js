import React, { createContext, useContext, useState, useEffect, useLayoutEffect } from 'react';

const ThemeContext = createContext();

const STORAGE_KEY = 'user-theme-preference';

// Storage can throw (old Safari private mode, blocked site data); the theme
// still works without it, it just isn't remembered.
const readSavedTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return null;
  }
};

const saveTheme = (value) => {
  try {
    if (value) localStorage.setItem(STORAGE_KEY, value);
    else localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    // Not persisted; the in-memory choice still applies.
  }
};

// Day (6 AM - 6 PM) vs Night (6 PM - 6 AM)
const calculateAutoTheme = () => {
  const hour = new Date().getHours();
  return (hour >= 6 && hour < 18) ? 'autumn' : 'winter';
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Themes: 'autumn' or 'winter'; null means auto (by time of day)
  const [theme, setTheme] = useState(() => readSavedTheme() || null);

  // Resolve the real theme up front so night visitors don't get a light first paint.
  const [activeTheme, setActiveTheme] = useState(() => theme || calculateAutoTheme());

  useEffect(() => {
    const updateTheme = () => {
      if (theme) {
        setActiveTheme(theme);
      } else {
        setActiveTheme(calculateAutoTheme());
      }
    };

    updateTheme();

    // Check every minute for auto updates
    const interval = setInterval(updateTheme, 60000);
    return () => clearInterval(interval);
  }, [theme]);

  // Before paint, so the body never shows the wrong theme's colours.
  useLayoutEffect(() => {
    document.body.classList.remove('theme-autumn', 'theme-winter');
    document.body.classList.add(`theme-${activeTheme}`);
  }, [activeTheme]);

  const setManualTheme = (newTheme) => {
    if (newTheme === 'auto') {
      saveTheme(null);
      setTheme(null);
    } else {
      saveTheme(newTheme);
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, activeTheme, setManualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
