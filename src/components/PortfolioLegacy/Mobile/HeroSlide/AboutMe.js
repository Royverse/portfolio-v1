import React, { Component } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import device from '../../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 50vh;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 50;
`;

const AboutMeDescription = styled(motion.span)`
  font-family: 'Epilogue', sans-serif;
  text-align: center;
  color: var(--ink);
  line-height: 1.5;
  @media ${device.mobileS} { font-size: 18px; }
  @media ${device.mobileM} { font-size: 20px; }
  @media ${device.mobileL} { font-size: 22px; }
  @media ${device.tablet} { font-size: 32px; }
  @media ${device.laptop} { font-size: 36px; }
`;

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <AboutMeDescription
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Full-stack software engineer in Cape Town, currently building products for IMD Business School. I came to engineering through design systems, and I build web products end to end in TypeScript and Python, from the interface down to the API and its security.
        </AboutMeDescription>
      </Container>
    );
  }
}

export default AboutMe;
