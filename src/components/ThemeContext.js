import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Themes: 'autumn', 'winter', 'spring', 'summer'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('user-theme-preference');
    return saved || null; // null means auto
  });

  const [activeTheme, setActiveTheme] = useState('autumn');

  const calculateAutoTheme = useCallback(() => {
    const hour = new Date().getHours();
    // Day (6 AM - 6 PM) vs Night (6 PM - 6 AM)
    return (hour >= 6 && hour < 18) ? 'autumn' : 'winter';
  }, []);

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
  }, [theme, calculateAutoTheme]);

  useEffect(() => {
    // Apply classes to body
    document.body.classList.remove('theme-autumn', 'theme-winter');
    document.body.classList.add(`theme-${activeTheme}`);
    
    console.log(`Setting theme to: ${activeTheme === 'autumn' ? 'Autumn Leaves' : 'Winter Wonderland'}`);
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
