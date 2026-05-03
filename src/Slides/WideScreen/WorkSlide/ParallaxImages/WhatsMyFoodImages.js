import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const homeImg = new URL('../../../../Assets/Images/ppapps/Group 19.png', import.meta.url).href;
const restaurantImg = new URL('../../../../Assets/Images/ppapps/Group 22.png', import.meta.url).href;
const addRestaurantImg = new URL('../../../../Assets/Images/ppapps/Group 30.png', import.meta.url).href;
const addFoodImg = new URL('../../../../Assets/Images/ppapps/Group 31.png', import.meta.url).href;

const Restaurant = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:0vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const Home = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-45vh;
right: 2vw;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.2px);
`;

const AddFood = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-60vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.4px);
`;

const AddRestaurant = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-45vh;
right: 4vw;
position: absolute;
/* border: 1px dashed red; */
height: 60vh;
filter: blur(0.2px);
`;

class WhatsMyFoodImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    // console.log('WMF scrollOffsetPercent ', scrollOffsetInPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <AddFood src={addFoodImg} scroll={scrollPercent} alt="addFood" />
        <AddRestaurant src={addRestaurantImg} scroll={scrollPercent} alt="addRestaurant" />
        <Home src={homeImg} scroll={scrollPercent} alt="Home" />
        <Restaurant src={restaurantImg} scroll={scrollPercent} alt="Restaurant" />
      </React.Fragment>
    );
  }
}

WhatsMyFoodImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default WhatsMyFoodImages;
