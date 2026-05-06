import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import MenuScreen from './MenuScreen';
import LegacyPortfolio from './LegacyPortfolio';
import FallingLeaves from './components/FallingLeaves';
import WinterWonderland from './components/WinterWonderland';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import ThemePicker from './components/ThemePicker';
import './Assets/Menu.css';

const AppContent = () => {
  const [view, setView] = useState('MENU'); // 'MENU' or 'PROFESSIONAL'
  const [transitioning, setTransitioning] = useState(false);
  const [entering, setEntering] = useState(true);
  const { activeTheme } = useTheme();

  useEffect(() => {
    // Clear the enter animation class after it finishes
    if (entering) {
      const timer = setTimeout(() => setEntering(false), 500);
      return () => clearTimeout(timer);
    }
  }, [entering, view]);

  const goToProfessional = () => {
    setTransitioning(true);
    setTimeout(() => {
      setView('PROFESSIONAL');
      setTransitioning(false);
      setEntering(true);
    }, 500);
  };

  const goToMenu = () => {
    setTransitioning(true);
    setTimeout(() => {
      setView('MENU');
      setTransitioning(false);
      setEntering(true);
    }, 500);
  };

  // Control body scroll based on view
  useEffect(() => {
    if (view === 'PROFESSIONAL') {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.body.style.height = 'auto';
      document.documentElement.style.height = 'auto';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.documentElement.style.height = '100%';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.height = '';
    };
  }, [view]);

  return (
    <>
      {activeTheme === 'autumn' ? <FallingLeaves /> : <WinterWonderland isProfessional={view === 'PROFESSIONAL'} />}
      
      <div className="bg-switcher-wrap">
        <ThemePicker />
      </div>

      <div className={`view-wrap ${transitioning ? 'view-exit' : (entering ? 'view-enter' : '')}`}>
        {view === 'PROFESSIONAL' ? (
          <>
            <button className="back-to-menu-btn" onClick={goToMenu} aria-label="Back to menu">
              <span className="back-bar"></span>
              <span className="back-label">← MENU</span>
            </button>
            <LegacyPortfolio />
          </>
        ) : (
          <MenuScreen onProjectsClick={goToProfessional} />
        )}
      </div>
    </>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
