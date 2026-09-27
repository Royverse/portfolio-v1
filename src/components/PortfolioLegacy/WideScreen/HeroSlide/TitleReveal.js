import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../../../Assets/Responsive/breakpoints';

const Stage = styled.div`
position: relative;
/* border:1px solid black; */
z-index: 1;
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
  letter-spacing: 0.05em;
  font-weight: 500;
  text-transform: uppercase;
  animation: ${props => (props.reveal ? moveUp(props.fontSizeInPx) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
  transform: translateY(${props => (props.fontSizeInPx * 1.4)}px);
  @media ${device.tablet} {
    font-size: 28px;
    animation: ${props => (props.reveal ? moveUp(28) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${28 * 1.4}px);
  }
  @media ${device.laptop} {
    font-size: 40px;
    animation: ${props => (props.reveal ? moveUp(40) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${40 * 1.4}px);
  }
  @media ${device.laptopL} {
    font-size: 50px;
    animation: ${props => (props.reveal ? moveUp(50) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${50 * 1.4}px);
  }
  @media ${device.desktop} {
    font-size: 60px;
    animation: ${props => (props.reveal ? moveUp(60) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${60 * 1.4}px);
  }
`;



class TitleReveal extends Component {
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

TitleReveal.propTypes = {
  text: PropTypes.string.isRequired,
  fontFam: PropTypes.string,
  timeDelay: PropTypes.number.isRequired,
};

TitleReveal.defaultProps = {
  fontFam: "'Syne', sans-serif",
};
export default TitleReveal;
