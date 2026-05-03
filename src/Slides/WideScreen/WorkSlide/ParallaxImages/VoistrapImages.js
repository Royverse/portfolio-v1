import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const voistrapHomeImg = new URL('../../../../Assets/Images/storybook/Group 14.png', import.meta.url).href;
const voistrapMeetingsImg = new URL('../../../../Assets/Images/storybook/Group 16.png', import.meta.url).href;
const voistrapPeopleImg = new URL('../../../../Assets/Images/storybook/Group 29.png', import.meta.url).href;



const VoistrapPhoneHome = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -40vh;
left:0vw;
/* border: 1px dashed red; */
height: 40vh; 
`;

const VoistrapPhoneMeetings = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-100vh;
right: 2vw;
/* border: 1px dashed red; */
height: 50vh;
filter: blur(0.6px);
`;

const VoistrapPhoneScore = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
`;

const VoistrapPhonePeople = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -20vh;
left:0vw;
/* border: 1px dashed red; */
height: 50vh; 
`;

class VoistrapImages extends Component {
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
        <VoistrapPhonePeople src={voistrapPeopleImg} scroll={scrollPercent} alt="voistrapPeople" />
        <VoistrapPhoneMeetings src={voistrapMeetingsImg} scroll={scrollPercent} alt="voistrapMeetings" />
        <VoistrapPhoneHome src={voistrapHomeImg} scroll={scrollPercent} alt="voistrapHome" />
      </React.Fragment>
    );
  }
}

VoistrapImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapImages;
