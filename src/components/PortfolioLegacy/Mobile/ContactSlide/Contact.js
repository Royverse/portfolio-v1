import React, { Component } from 'react';
import styled from 'styled-components';
const githubImg = new URL('../../../../Assets/Images/Social/git.svg', import.meta.url).href;
const mailImg = new URL('../../../../Assets/Images/Social/mail.svg', import.meta.url).href;
const linkedInImg = new URL('../../../../Assets/Images/Social/linkedin.svg', import.meta.url).href;
import SocialLogo from './SocialLogo';
import device from '../../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    margin-top:20vh;
    min-height: 100vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    background: var(--bg);
    transition: background 0.5s ease;
    @media ${device.mobileS} {
    padding-left:60px;
    }
    @media ${device.mobileM} {
    padding-left:60px;
    }
    @media ${device.mobileL} {
    padding-left:60px;
    }
    @media ${device.tablet} {
    padding-left:90px;
    margin-bottom:90px;
    }
    @media ${device.laptop} {
    padding-left:120px;
    margin-bottom:120px;
    }
`;

const ContactTitle = styled.div`
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  color: var(--ink);
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 50px;
  }
  @media ${device.mobileL} {
    font-size: 60px;
  }
  @media ${device.tablet} {
    font-size: 90px;
  }
  @media ${device.laptop} {
    font-size: 95px;
  }
`;

const SocialMediaIcons = styled.div`
  /* border: 1px solid black; */
  z-index: 1;
  display: grid;
  grid-template: 80px 80px 80px / 1fr 1fr;
  @media ${device.mobileS} {
    margin-top: 60px;
    grid-gap: 40px;
  }
  @media ${device.mobileM} {
    margin-top: 60px;
    grid-gap: 60px;
  }
  @media ${device.mobileL} {
    margin-top: 60px;
    grid-gap: 70px;
  }
  @media ${device.tablet} {
    margin-top: 80px;
    grid-gap: 170px;
  }
  @media ${device.laptop} {
    margin-top: 120px;
    grid-gap: 200px;
  }
`;

// Plain-text details, so the email is readable and copyable without the icons.
const ContactDetails = styled.p`
  margin: 40px 0 0;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  line-height: 1.8;
  letter-spacing: 0.04em;
  color: var(--ink-muted);

  a {
    color: var(--ink);
    text-decoration: none;
    border-bottom: 1px solid var(--accent);
  }
`;

class Contact extends Component {
  render() {
    return (
      <Container>
        <ContactTitle>CONTACT</ContactTitle>
        <SocialMediaIcons>
          <SocialLogo imgURL={githubImg} alternate="GitHub" redirectURL="https://github.com/Royverse" />
          <SocialLogo imgURL={mailImg} alternate="Email" redirectURL="mailto:roymootsana@gmail.com" />
          <SocialLogo imgURL={linkedInImg} alternate="LinkedIn" redirectURL="https://www.linkedin.com/in/roy-mootsana-77818a14a/" />
        </SocialMediaIcons>
        <ContactDetails>
          <a href="mailto:roymootsana@gmail.com">roymootsana@gmail.com</a>
          <br />
          Cape Town, South Africa
        </ContactDetails>
      </Container>
    );
  }
}

export default Contact;
