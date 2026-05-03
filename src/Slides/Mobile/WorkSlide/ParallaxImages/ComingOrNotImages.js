import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import dots from '../../../../Assets/Images/portal/Group 23.png';
import bubbles from '../../../../Assets/Images/portal/Group 25.png';
import paths from '../../../../Assets/Images/portal/Group 24.png';
import bigBubble from '../../../../Assets/Images/portal/Group 26.png';


const Dots = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 30}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -200vh;
left:0vw;
/* border: 1px dashed red; */
height: 20vh; 
`;

const Bubbles = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 23}%) scale(0.9)`,
  }),
})`
position: absolute;
bottom:-190vh;
right: 0vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 20vh;
filter: blur(0.1px);
`;

const BigBubble = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 10}%) scale(0.7)`,
  }),
})`
bottom:-100vh;
left:-4vw;
position: absolute;
/* border: 1px dashed red; */
height: 20vh;
filter: blur(0.1px);
`;

const Paths = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.6)`,
  }),
})`
bottom:-80vh;
right: 1vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 20vh;
filter: blur(0.1px);
`;

class VoistrapWebImages3 extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <Paths src={paths.default || paths} scroll={scrollPercent} alt="paths" />
        <BigBubble src={bigBubble.default || bigBubble} scroll={scrollPercent} alt="bigBubble" />
        <Bubbles src={bubbles.default || bubbles} scroll={scrollPercent} alt="bubbles" />
        <Dots src={dots.default || dots} scroll={scrollPercent} alt="dots" />
      </React.Fragment>
    );
  }
}

VoistrapWebImages3.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapWebImages3;
