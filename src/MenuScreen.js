import React, { useState } from 'react';
import Portrait from './Portrait';
import SkillsAnimation from './SkillsAnimation';
import WorkShowcase from './WorkShowcase';

const MenuScreen = ({ onProjectsClick }) => {
  const [activeTab, setActiveTab] = useState('HOME');

  const handleNavClick = (tab) => {
    if (tab === 'PROFESSIONAL') {
      setActiveTab('PROFESSIONAL');
      onProjectsClick();
      return;
    }
    setActiveTab(tab);
  };

  const handleCloseOverlay = () => {
    setActiveTab('HOME');
  };

  return (
    <div className="scene">
      {/* Portrait */}
      <Portrait />

      {/* Navigation Menu */}
      <div className="nav-panel">
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
            <span className="nav-label">SKILLS</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'AI LABS' ? 'active' : ''}`}
            onClick={() => handleNavClick('AI LABS')}
          >
            <span className="nav-bar"></span>
            <span className="nav-label">AI LABS</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'PROFESSIONAL' ? 'active' : ''}`}
            onClick={() => handleNavClick('PROFESSIONAL')}
          >
            <span className="nav-bar"></span>
            <span className="nav-label">PROFESSIONAL</span>
          </button>
        </nav>

        <div className="status">
          <span className="status-dot"></span>
          <span className="status-label">EMPLOYED // OPEN TO OFFERS</span>
        </div>
      </div>

      {/* Skills Blossom Overlay */}
      <SkillsAnimation active={activeTab === 'SKILLS'} onClose={handleCloseOverlay} />

      {/* Experience / Work Showcase Overlay */}
      <WorkShowcase active={activeTab === 'AI LABS'} onClose={handleCloseOverlay} />
    </div>
  );
};

export default MenuScreen;
