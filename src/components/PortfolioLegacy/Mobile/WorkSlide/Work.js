import React, { Component } from 'react';
import styled from 'styled-components';
import vhCheck from 'vh-check';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    background: var(--bg);
    min-height: 100vh;
    transition: background 0.5s ease;
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.3;
    this.lastScrollTop = 0;
    this.ticking = false;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      { number: '', projectName: '', projectDesc: '', projectType: '', roles: [''] },
      {
        number: '01',
        projectName: 'IMD',
        projectDesc: 'At the International Institute for Management Development: digital products for global executive programmes—turning leadership diagnostics, live simulations and research data into software that holds up in the room.',
        projectType: 'WEB PLATFORMS',
        roles: ['Learning Innovation & STS Developer', '2023 – present'],
      },
      {
        number: '02',
        projectName: 'BluePrint',
        projectDesc: 'The design-system pilot for the Corporate & Investment Banking division of The Standard Bank of South Africa Limited—giving product teams one shared language in code.',
        projectType: 'DESIGN SYSTEM',
        roles: ['User Interface Designer', '2022 – 2023'],
      },
      {
        number: '03',
        projectName: 'BluePrint Apps',
        projectDesc: 'Enterprise banking applications built on BluePrint—proving the design system worked in real products, not just in Storybook.',
        projectType: 'ANGULAR APPS',
        roles: ['User Interface Designer', '2022 – 2023'],
      },
      {
        number: '04',
        projectName: 'Admin Portal',
        projectDesc: 'An operations portal that took a growing boutique off paper—bringing stock, client history and business reporting into one place.',
        projectType: 'WEB APP',
        roles: ['Lead UX/UI Developer', '2021'],
      },
      {
        number: '05',
        projectName: 'Nail Boutique',
        projectDesc: 'A booking site and interactive nail-art studio that turned walk-in enquiries into prepared online appointments.',
        projectType: 'WEBSITE',
        roles: ['Lead UX/UI Developer', '2021'],
      },
      {
        number: '06',
        projectName: 'Readpoint',
        projectDesc: 'An e-commerce bookstore that took an independent bookseller online, with live inventory and checkout.',
        projectType: 'WEB APP',
        roles: ['Software Engineer', 'Freelance'],
      },
      { number: '', projectName: '', projectDesc: '', projectType: '', roles: [''] },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    const vhDiff = vhCheck().offset;
    this.setState({
      vh: Math.round((window.document.documentElement.clientHeight + vhDiff) * this.pageSplitTimes),
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        const { body, documentElement } = window.document;
        const { vh, slideNumber } = this.state;
        const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
        
        const newSlideNumber = Math.floor(scrollDistance / vh);
        if (newSlideNumber !== slideNumber && newSlideNumber >= 0 && newSlideNumber < this.workDetails.length) {
          this.setState({ slideNumber: newSlideNumber });
        }
        
        this.lastScrollTop = scrollDistance;
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  render() {
    const { slideNumber } = this.state;
    const project = this.workDetails[slideNumber] || this.workDetails[0];

    return (
      <Container>
        <TextContent
          number={project.number}
          projectName={project.projectName}
          projectDesc={project.projectDesc}
          projectType={project.projectType}
          roles={project.roles}
          refreshToggle={true}
        />
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
