import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../../../Assets/Responsive/breakpoints';

const Stage = styled.div`
position: relative;
/* border:1px solid black; */
z-index: 1;
width:100%;
overflow: hidden;
`;

const moveUp = init => keyframes`
0%{
    transform: translateY(${init}px);
}
100%{
    transform: translateY(0px);
}
`;

const hideWhiteBlocks = () => keyframes`
0%{
    opacity: 1;
    height: 35vh;
}
100%{
    opacity: 0;
    height: 0vh;
}
`;

const TextToReveal = styled.div`
  font-family: ${props => props.fontFam};
  text-align:center;
  color: var(--ink);
  text-shadow: var(--aura-glow);
  letter-spacing: -0.02em;
  font-weight: 500;
  opacity: 0.9;
  @media ${device.tablet} {
    font-size: 100px;
    animation: ${props => (props.reveal ? moveUp(100) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${100 * 1.4}px);
  }
  @media ${device.laptop} {
    font-size: 140px;
    animation: ${props => (props.reveal ? moveUp(140) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${140 * 1.4}px);
  }
  @media ${device.laptopL} {
    font-size: 150px;
    animation: ${props => (props.reveal ? moveUp(150) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${150 * 1.4}px);
  }
  @media ${device.desktop} {
    font-size: 200px;
    animation: ${props => (props.reveal ? moveUp(200) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${200 * 1.4}px);
  }
`;



class NameReveal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal: false,
    };
    this.revealText = this.revealText.bind(this);
  }

  componentDidMount() {
    const { timeDelay } = this.props;
    this.revealText(timeDelay);
  }

  revealText(timeout) {
    setTimeout(() => {
      this.setState({ reveal: true });
    }, timeout);
  }

  render() {
    const { text, fontFam } = this.props;
    const { reveal } = this.state;
    return (
      <Stage>
        <TextToReveal
          fontFam={fontFam}
          reveal={reveal}
        >
          {text}
        </TextToReveal>
      </Stage>
    );
  }
}

NameReveal.propTypes = {
  text: PropTypes.string.isRequired,
  fontFam: PropTypes.string,
  timeDelay: PropTypes.number.isRequired,
};

NameReveal.defaultProps = {
  fontFam: "'Syne', sans-serif",
};
export default NameReveal;
