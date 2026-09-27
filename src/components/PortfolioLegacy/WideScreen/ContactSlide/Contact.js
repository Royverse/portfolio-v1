import React, { Component } from 'react';
import styled from 'styled-components';
const githubImg = new URL('../../../../Assets/Images/Social/git.svg', import.meta.url).href;
const mailImg = new URL('../../../../Assets/Images/Social/mail.svg', import.meta.url).href;
const linkedInImg = new URL('../../../../Assets/Images/Social/linkedin.svg', import.meta.url).href;
import SocialLogo from './SocialLogo';
import device from '../../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height:80vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const ContactTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(${(scrollPercent) * 8}%)`,
  }),
})`
  transition: transform 0.5s ease-out;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  font-size: 200px;
  position: absolute;
  color: var(--border);
  top:12%;
  left:-70%;
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

const SocialMediaIcons = styled.div`
  /* border: 1px solid black; */
  margin-left: 20%;
  margin-right: 3%;
  z-index: 1;
  transform: translateY(210%);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

// Plain-text details, so the email is readable and copyable without the icons.
const ContactDetails = styled.p`
  position: absolute;
  left: 20%;
  right: 3%;
  bottom: 14%;
  margin: 0;
  text-align: center; /* centred under the icon row, which spans the same 20%–97% */
  font-family: 'DM Mono', monospace;
  font-size: clamp(14px, 1.1vw, 22px);
  letter-spacing: 0.06em;
  color: var(--ink-muted);

  a {
    color: var(--ink);
    text-decoration: none;
    border-bottom: 1px solid var(--accent);
  }
`;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      scrollHeight: 0,
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
    this.setState({ screenHeight: Math.round(window.document.documentElement.clientHeight) });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = window.document;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 1090) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= 100) {
      sp -= minlimit;
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <ContactTitle scrollPercent={scrollPercent}>CONTACT</ContactTitle>
        <SocialMediaIcons>

          <SocialLogo imgURL={githubImg} alternate="GitHub" redirectURL="https://github.com/Royverse" />
          <SocialLogo imgURL={mailImg} alternate="Email" redirectURL="mailto:roymootsana@gmail.com" />
          <SocialLogo imgURL={linkedInImg} alternate="LinkedIn" redirectURL="https://www.linkedin.com/in/roy-mootsana-77818a14a/" />
        </SocialMediaIcons>
        <ContactDetails>
          <a href="mailto:roymootsana@gmail.com">roymootsana@gmail.com</a>
          &nbsp;·&nbsp; Cape Town, South Africa
        </ContactDetails>
      </Container>
    );
  }
}

export default Contact;
