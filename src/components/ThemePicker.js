import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';

const ThemePicker = () => {
  const { theme, activeTheme, setManualTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const themes = [
    { id: 'auto', label: 'AUTO', status: 'active', desc: 'Light by day, dark at night' },
    { id: 'autumn', label: 'AUTUMN LEAVES', status: 'active', desc: 'Light mode' },
    { id: 'winter', label: 'WINTER SNOW', status: 'active', desc: 'Dark mode' },
  ];

  const currentThemeObj = themes.find(t => t.id === (theme || 'auto'));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id, status) => {
    if (status === 'pending') return;
    setManualTheme(id);
    setIsOpen(false);
  };

  return (
    <div className="theme-picker-container" ref={dropdownRef}>
      <button 
        className={`theme-picker-trigger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Pick theme"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="theme-bar"></span>
        <span className="theme-label">{currentThemeObj.label}</span>
        <span className="theme-chevron"></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="theme-dropdown"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="listbox"
          >
            <div className="dropdown-header">
              SELECT THEME
              <span className="info-icon-hint">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </span>
            </div>
            <div className="theme-options">
              {themes.map((t) => (
                <button
                  key={t.id}
                  className={`theme-option ${t.status} ${ (theme === t.id || (!theme && t.id === 'auto')) ? 'selected' : ''}`}
                  onClick={() => handleSelect(t.id, t.status)}
                  disabled={t.status === 'pending'}
                  role="option"
                  aria-selected={ (theme === t.id || (!theme && t.id === 'auto')) }
                >
                  <div className="option-info">
                    <span className="option-label">{t.label}</span>
                    <span className="option-desc">{t.desc}</span>
                  </div>
                  {t.status === 'pending' && <span className="pending-badge">PENDING</span>}
                  { (theme === t.id || (!theme && t.id === 'auto')) && <span className="selected-dot"></span>}
                </button>
              ))}
            </div>
            <div className="dropdown-footer">
              <div className="sync-info">
                <span className="sync-dot"></span>
                <p>Auto follows your clock: light from 6 am to 6 pm, dark after that.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemePicker;
