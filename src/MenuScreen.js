import React, { useState } from 'react';
import Portrait from './Portrait';
import SkillsAnimation from './SkillsAnimation';

const MenuScreen = ({ onProjectsClick }) => {
  const [activeTab, setActiveTab] = useState('HOME');

  const handleNavClick = (tab) => {
    if (tab === 'PROJECTS') {
      setActiveTab('PROJECTS');
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
        <h1 className="name">ROY<br/>MOOTSANA</h1>
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
            className={`nav-item ${activeTab === 'EXPERIENCE' ? 'active' : ''}`}
            onClick={() => handleNavClick('EXPERIENCE')}
          >
            <span className="nav-bar"></span>
            <span className="nav-label">EXPERIENCE</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'PROJECTS' ? 'active' : ''}`}
            onClick={() => handleNavClick('PROJECTS')}
          >
            <span className="nav-bar"></span>
            <span className="nav-label">PROJECTS</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'CONTACT' ? 'active' : ''}`}
            onClick={() => handleNavClick('CONTACT')}
          >
            <span className="nav-bar"></span>
            <span className="nav-label">CONTACT</span>
          </button>
        </nav>

        <div className="status">
          <span className="status-dot"></span>
          <span className="status-label">AVAILABLE FOR HIRE</span>
        </div>
      </div>

      {/* Skills Blossom Overlay */}
      <SkillsAnimation active={activeTab === 'SKILLS'} onClose={handleCloseOverlay} />
    </div>
  );
};

export default MenuScreen;
