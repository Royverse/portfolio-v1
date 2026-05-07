import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 40vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const AboutMeTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(${(scrollPercent) * 5.5}%)`,
  }),
})`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: var(--ink);
  opacity: 0.07;
  top :30%;
  left:-15%;
  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;

const AboutMeDescription = styled.div`
  align-items: center;
  font-family: 'AvenirLight';
  text-align: left;
  margin-left: 30%;
  margin-right: 5%;
  position: relative;
  @media ${device.laptop} {
    transform: translateY(40%);
    font-size: 30px;
  }
  @media ${device.laptopL} {
    transform: translateY(35%);
    font-size: 38px;
  }
  @media ${device.desktop} {
    transform: translateY(30%);
    font-size: 70px;
  }
`;

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = window.document;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const maxlimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight;
    if (sp >= 0 && sp <= maxlimit) {
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>

        <AboutMeTitle scrollPercent={scrollPercent}>ABOUT ME</AboutMeTitle>

        <AboutMeDescription>
        Software Engineer and UX Architect bridging the gap between rigorous engineering and human-centred design.
        A systems thinker with a designer's eye, a chess strategist's patience, and a builder's bias for action.
        </AboutMeDescription>
      </Container>
    );
  }
}

export default AboutMe;
