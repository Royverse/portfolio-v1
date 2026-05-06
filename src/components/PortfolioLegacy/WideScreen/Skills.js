import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 120vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  
`;

const SkillsTitle = styled.div`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: var(--ink);
  top: 40%;
  right: -50%;
`;

const SkillsList = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: 'AvenirRoman';
  text-align: left;
  margin-left: 15%;
  margin-right: 10%;
  z-index: 1;
  transform: translateY(30%);
`;

const CertificateGallery = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  animation: scrollLoop 20s linear infinite;

  /* Hide the scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome and Safari */
  }
`;


const CertificateImageLink = styled.a`
  flex: 0 0 auto;
  margin: 10px;
  scroll-snap-align: start;
`;

const CertificateImage = styled.img`
  width: 200px;
  height: auto;
`;

class Skills extends Component {
  render() {
    return (
      <Container>
        <SkillsTitle>SKILLS</SkillsTitle>
      </Container>
    );
  }
}

export default Skills;
