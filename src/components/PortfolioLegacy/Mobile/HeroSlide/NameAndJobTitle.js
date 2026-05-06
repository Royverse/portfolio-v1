import React, { Component } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import device from '../../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 35vh;
    width: 100%;
    padding: 10vh 20px 0;
    position: relative;
    z-index: 50;
`;

const Name = styled(motion.div)`
  font-family: 'Bauhaus93';
  text-align: center;
  color: var(--ink);
  line-height: 0.9;
  letter-spacing: -0.02em;
  @media ${device.mobileS} { font-size: 70px; }
  @media ${device.mobileM} { font-size: 80px; }
  @media ${device.mobileL} { font-size: 90px; }
  @media ${device.tablet} { font-size: 150px; }
  @media ${device.laptop} { font-size: 160px; }
`;

const Title = styled(motion.div)`
  font-family: 'AvenirRoman';
  text-align: center;
  margin-top: 20px;
  color: var(--ink-muted);
  letter-spacing: 0.4em;
  text-transform: uppercase;
  @media ${device.mobileS} { font-size: 10px; }
  @media ${device.mobileM} { font-size: 12px; }
  @media ${device.mobileL} { font-size: 14px; }
  @media ${device.tablet} { font-size: 24px; }
  @media ${device.laptop} { font-size: 28px; }
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <Name
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontWeight: 500, opacity: 0.9 }}
        >
          Roy Mootsana
        </Name>
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        >
          <i>Design and Development</i>
        </Title>
      </Container>
    );
  }
}

export default NameAndJobTitle;
