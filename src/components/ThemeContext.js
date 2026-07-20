import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Themes that are actually shipped — a stale or hand-edited preference
// for anything else falls back to auto.
const VALID_THEMES = ['autumn', 'winter', 'summer'];

const THEME_LABELS = {
  autumn: 'Autumn Leaves',
  winter: 'Winter Wonderland',
  summer: 'Summer Solstice',
};

// Browser chrome tint per theme (mobile address bar / PWA title bar).
const THEME_COLORS = {
  autumn: '#f3f6f4',
  winter: '#0a0f1e',
  summer: '#fdf8ec',
};

// Daylight (6 AM - 4 PM) -> autumn, golden hour (4 PM - 7 PM) -> summer,
// night (7 PM - 6 AM) -> winter.
const calculateAutoTheme = () => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 16) return 'autumn';
  if (hour >= 16 && hour < 19) return 'summer';
  return 'winter';
};

export const ThemeProvider = ({ children }) => {
  // Themes: 'autumn', 'winter', 'spring', 'summer'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('user-theme-preference');
    return VALID_THEMES.includes(saved) ? saved : null; // null means auto
  });

  // Resolve the active theme immediately so the very first paint is already
  // correct — no flash of the default season before the effects run.
  const [activeTheme, setActiveTheme] = useState(() => theme || calculateAutoTheme());

  useEffect(() => {
    const updateTheme = () => {
      setActiveTheme(theme || calculateAutoTheme());
    };

    updateTheme();

    // Check every minute for auto updates
    const interval = setInterval(updateTheme, 60000);
    return () => clearInterval(interval);
  }, [theme]);

  useEffect(() => {
    // Apply classes to body
    document.body.classList.remove('theme-autumn', 'theme-winter', 'theme-summer');
    document.body.classList.add(`theme-${activeTheme}`);

    // Let non-React chrome follow the season: the live favicon script reads
    // data-theme, and theme-color tints the mobile browser UI.
    document.documentElement.setAttribute('data-theme', activeTheme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', THEME_COLORS[activeTheme] || THEME_COLORS.autumn);
    }
    window.dispatchEvent(new CustomEvent('rm-theme-change'));

    console.log(`Setting theme to: ${THEME_LABELS[activeTheme] || activeTheme}`);
  }, [activeTheme]);

  const setManualTheme = (newTheme) => {
    if (newTheme === 'auto') {
      localStorage.removeItem('user-theme-preference');
      setTheme(null);
    } else {
      localStorage.setItem('user-theme-preference', newTheme);
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, activeTheme, setManualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
