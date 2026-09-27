import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import NameReveal from './NameReveal';
import TitleReveal from './TitleReveal';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    /* Keeping the background out assuming your main layout handles the dark theme */
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
`;

const ArrowWrapper = styled.div`
  animation: ${bounce} 2s infinite;
  margin-top: 30px;
`;

class NameAndJobTitle extends Component {
  render() {
    return (
        <Container>
          {/* Same display and label faces as the menu: Syne over DM Mono */}
          <NameReveal 
            text="Roy Mootsana" 
            fontFam="'Syne', sans-serif" 
            timeDelay={500} 
          />
          
          <div style={{ marginTop: '10px' }} />

          <TitleReveal 
            text="Engineering and Design" 
            fontFam="'DM Mono', monospace" 
            timeDelay={1300} 
          />

          <ArrowWrapper>
            {/* Swapped the emoji arrow for a cleaner text character, but you can swap it back! */}
            <TitleReveal 
              text="↓" 
              fontFam="'DM Mono', monospace" 
              timeDelay={1500} 
            />
          </ArrowWrapper>
        </Container>
    );
  }
}

export default NameAndJobTitle;