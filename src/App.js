import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import MenuScreen from './MenuScreen';
import LegacyPortfolio from './LegacyPortfolio';
import './Assets/Menu.css';

const App = () => {
  const [view, setView] = useState('MENU'); // 'MENU' or 'PROJECTS'
  const [transitioning, setTransitioning] = useState(false);
  const [entering, setEntering] = useState(true);

  useEffect(() => {
    // Clear the enter animation class after it finishes
    if (entering) {
      const timer = setTimeout(() => setEntering(false), 500);
      return () => clearTimeout(timer);
    }
  }, [entering, view]);

  const goToProjects = () => {
    setTransitioning(true);
    setTimeout(() => {
      setView('PROJECTS');
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
    if (view === 'PROJECTS') {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.body.style.height = 'auto';
      document.documentElement.style.height = 'auto';
      // Scroll to top when entering projects
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

  if (view === 'PROJECTS') {
    return (
      <div className={`view-wrap ${transitioning ? 'view-exit' : (entering ? 'view-enter' : '')}`}>
        {/* Floating back button */}
        <button className="back-to-menu-btn" onClick={goToMenu} aria-label="Back to menu">
          <span className="back-bar"></span>
          <span className="back-label">← MENU</span>
        </button>
        <LegacyPortfolio />
      </div>
    );
  }

  return (
    <div className={`view-wrap ${transitioning ? 'view-exit' : (entering ? 'view-enter' : '')}`}>
      <MenuScreen onProjectsClick={goToProjects} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
