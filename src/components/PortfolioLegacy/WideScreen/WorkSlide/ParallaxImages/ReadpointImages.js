import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const bigBubble = new URL('../../../../../Assets/Images/Readpoint/Group 32.png', import.meta.url).href;


const BigBubble = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 10}%) scale(0.7)`,
  }),
})`
bottom:-50vh;
left:-4vw;
position: absolute;
height: 50vh;
filter: blur(0.1px);
`;

class ReadpointImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + (index - 1);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <BigBubble src={bigBubble} scroll={scrollPercent} alt="bigBubble" />
      </React.Fragment>
    );
  }
}

ReadpointImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default ReadpointImages;
