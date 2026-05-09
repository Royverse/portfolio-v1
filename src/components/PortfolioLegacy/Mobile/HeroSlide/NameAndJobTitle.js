import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import device from '../../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Changed from 35vh to center it properly */
    width: 100%;
    padding: 0 20px;
    position: relative;
    z-index: 50;
`;

const Stage = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Name = styled(motion.div)`
  font-family: 'Cinzel', serif;
  text-align: center;
  color: var(--ink);
  line-height: 1;
  letter-spacing: -0.02em;
  font-weight: 700;
  white-space: nowrap;
  @media ${device.mobileS} { font-size: 32px; }
  @media ${device.mobileM} { font-size: 38px; }
  @media ${device.mobileL} { font-size: 44px; }
  @media ${device.tablet} { font-size: 100px; }
`;

const Title = styled(motion.div)`
  font-family: 'Rajdhani', sans-serif;
  text-align: center;
  margin-top: 15px;
  color: var(--ink);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  @media ${device.mobileS} { font-size: 12px; }
  @media ${device.mobileM} { font-size: 14px; }
  @media ${device.mobileL} { font-size: 16px; }
  @media ${device.tablet} { font-size: 24px; }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
`;

const ArrowWrapper = styled.div`
  animation: ${bounce} 2s infinite;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <Stage>
          <Name
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            Roy Mootsana
          </Name>
        </Stage>
        <Stage>
          <Title
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.3 }}
          >
            Design and Development
          </Title>
        </Stage>

        <ArrowWrapper>
          <Stage>
            <Title
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
            >
              ↓
            </Title>
          </Stage>
        </ArrowWrapper>
      </Container>
    );
  }
}

export default NameAndJobTitle;
