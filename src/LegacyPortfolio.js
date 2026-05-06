import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { createGlobalStyle } from 'styled-components';

import WideScreenHero from './components/PortfolioLegacy/WideScreen/HeroSlide/Hero';
import WideScreenWork from './components/PortfolioLegacy/WideScreen/WorkSlide/Work';
import WideScreenSkills from './components/PortfolioLegacy/WideScreen/Skills';
import WideScreenContact from './components/PortfolioLegacy/WideScreen/ContactSlide/Contact';

import MobileHero from './components/PortfolioLegacy/Mobile/HeroSlide/Hero';
import MobileWork from './components/PortfolioLegacy/Mobile/WorkSlide/Work';
import MobileSkills from './components/PortfolioLegacy/Mobile/Skills';
import MobileContact from './components/PortfolioLegacy/Mobile/ContactSlide/Contact';

import './Assets/index.css';

const GlobalStyle = createGlobalStyle`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`;

class LegacyPortfolio extends Component {
  componentDidMount() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }

  render() {
    return (
      <React.Fragment>
        <MediaQuery query="(min-width: 1225px)">
          <WideScreenHero />
          <WideScreenWork />
          <WideScreenSkills />
          <WideScreenContact />
        </MediaQuery>
        <MediaQuery query="(max-width: 1224px)">
          <MobileHero />
          <MobileWork />
          <MobileSkills />
          <MobileContact />
        </MediaQuery>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default LegacyPortfolio;
