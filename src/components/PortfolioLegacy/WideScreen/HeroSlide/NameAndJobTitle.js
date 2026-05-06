import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import NameReveal from './NameReveal';
import TitleReveal from './TitleReveal';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    /* border: 1px solid blue; */
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
`;

const ArrowWrapper = styled.div`
  animation: ${bounce} 2s infinite;
  margin-top: 20px;
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <NameReveal text="Roy Mootsana" fontFam="Algerian" timeDelay={500} />
        <br />
        <TitleReveal text="Design and Development " fontFam="Bahnschrift SemiBold" timeDelay={1300} />
        <ArrowWrapper>
          <TitleReveal text="⬇" fontFam="Algerian" timeDelay={1300} />
        </ArrowWrapper>
   
      </Container>
    );
  }
}

export default NameAndJobTitle;
