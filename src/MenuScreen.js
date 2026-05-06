import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Portrait from './components/Portrait';
import SkillsAnimation from './components/SkillsAnimation';
import WorkShowcase from './components/WorkShowcase';
import DataAnalysis from './components/DataAnalysis';
import Lightning from './components/Lightning';
import { useTheme } from './components/ThemeContext';

const MenuScreen = ({ onProjectsClick }) => {
  const [activeTab, setActiveTab] = useState('HOME');
  const [showLightning, setShowLightning] = useState(false);
  const [isFabOpen, setIsFabOpen] = useState(false);
  const { activeTheme } = useTheme();

  useEffect(() => {
    if (activeTab === 'SKILLS') {
      document.body.classList.add('force-light-theme');
    } else {
      document.body.classList.remove('force-light-theme');
    }

    return () => {
      document.body.classList.remove('force-light-theme');
    };
  }, [activeTab]);

  const handleNavClick = (tab) => {
    setIsFabOpen(false);
    if (tab === 'PROFESSIONAL') {
      setActiveTab('PROFESSIONAL');
      onProjectsClick();
      return;
    }

    if (tab === 'AI LABS') {
      setShowLightning(true);
      setTimeout(() => {
        setActiveTab(tab);
        setTimeout(() => setShowLightning(false), 800);
      }, 800);
      return;
    }

    setActiveTab(tab);
  };

  const handleCloseOverlay = () => {
    setActiveTab('HOME');
  };

  const toggleFab = () => setIsFabOpen(!isFabOpen);

  const menuItems = [
    { id: 'PROFESSIONAL', label: 'EXPERIENCE' },
    { id: 'AI LABS', label: 'AI EXPERIMENTS' },
    { id: 'SKILLS', label: 'COMPETENCIES' },
  ];

  return (
    <div className="scene">
      {/* Portrait */}
      <Portrait />

      {/* Desktop Navigation Menu */}
      <div className="nav-panel desktop-only">
        <p className="sys-label">PORTFOLIO.SYS // INIT</p>
        <h1 className="name">ROY MOOTSANA</h1>
        <p className="title">SOFTWARE ENGINEER</p>
        <div className="divider"></div>

        <nav className="main-nav">
          <button
            className={`nav-item ${activeTab === 'SKILLS' ? 'active' : ''}`}
            onClick={() => handleNavClick('SKILLS')}
          >
            <span className="nav-bar"></span>
            <span className="nav-label">CORE COMPETENCIES</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'AI LABS' ? 'active' : ''}`}
            onClick={() => handleNavClick('AI LABS')}
          >
            <span className="nav-bar"></span>
            <span className="nav-label">AI EXPERIMENTS & PROJECTS</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'PROFESSIONAL' ? 'active' : ''}`}
            onClick={() => handleNavClick('PROFESSIONAL')}
          >
            <span className="nav-bar"></span>
            <span className="nav-label">PROFESSIONAL EXPERIENCE</span>
          </button>
        </nav>

        <div className="status">
          <span className="status-dot"></span>
          <span className="status-label">EMPLOYED // OPEN TO OFFERS</span>
        </div>

        <DataAnalysis visible={activeTab === 'HOME'} theme={activeTheme} />
      </div>

      {/* Mobile FAB Menu */}
      <div className="mobile-only">
        <motion.div 
          className="mobile-hero-info"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="mobile-name">ROY MOOTSANA</h1>
          <p className="mobile-title">SOFTWARE ENGINEER</p>
        </motion.div>

        <AnimatePresence>
          {isFabOpen && (
            <>
              <motion.div 
                className="fab-dim"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFabOpen(false)}
              />
              <div className="fab-pills">
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    className="fab-pill"
                    initial={{ opacity: 0, x: 20, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 20, y: 10 }}
                    transition={{ delay: i * 0.05, type: 'spring', damping: 20 }}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <div className="pill-bar"></div>
                    <span className="pill-txt">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </>
          )}
        </AnimatePresence>

        <button 
          className={`fab-main ${isFabOpen ? 'open' : ''}`} 
          onClick={toggleFab}
          aria-label="Toggle menu"
        >
          <div className="fab-icon-wrap">
            <span className="fab-line l1"></span>
            <span className="fab-line l2"></span>
            <span className="fab-line l3"></span>
          </div>
        </button>
      </div>

      {/* Skills Blossom Overlay */}
      <SkillsAnimation active={activeTab === 'SKILLS'} onClose={handleCloseOverlay} />

      {/* Experience / Work Showcase Overlay */}
      <WorkShowcase active={activeTab === 'AI LABS'} onClose={handleCloseOverlay} />

      {/* Lightning Strike Transition */}
      {showLightning && (
        <div className={`lightning-strike-wrap ${showLightning ? 'active' : ''}`}>
          <Lightning hue={200} speed={3} intensity={0.2} size={0.5} />
        </div>
      )}
    </div>
  );
};

export default MenuScreen;
