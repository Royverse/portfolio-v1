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
        projectName: 'IMD Business School',
        projectDesc: 'Internal products for executive education, built and run end to end: assessment platforms, leadership diagnostics, a live multiplayer simulation and data tools.',
        projectType: 'FULL-STACK',
        roles: ['Learning Innovation & STS Developer', '2023 – present'],
      },
      {
        number: '02',
        projectName: 'BluePrint',
        projectDesc: 'BluePrint 3.0, the design-system pilot for Standard Bank\'s Corporate & Investment Banking division: reusable Angular components, documented in Storybook.',
        projectType: 'DESIGN SYSTEM',
        roles: ['User Interface Designer', '2022 – 2023'],
      },
      {
        number: '03',
        projectName: 'BluePrint Apps',
        projectDesc: 'Angular apps built on the BluePrint components, so the bank\'s products shared one look and behaviour.',
        projectType: 'ANGULAR APPS',
        roles: ['User Interface Designer', '2022 – 2023'],
      },
      {
        number: '04',
        projectName: 'Admin Portal',
        projectDesc: 'An admin portal for a nail boutique: stock, client records and reports in one place.',
        projectType: 'WEB APP',
        roles: ['Lead UX/UI Developer', '2021'],
      },
      {
        number: '05',
        projectName: 'Nail Boutique',
        projectDesc: 'The boutique\'s website: services, prices and online booking, plus a designer where customers create their own nail art.',
        projectType: 'WEBSITE',
        roles: ['Lead UX/UI Developer', '2021'],
      },
      {
        number: '06',
        projectName: 'Readpoint',
        projectDesc: 'An online bookshop with a MongoDB database and payments, where customers browse and buy books.',
        projectType: 'WEB APP',
        roles: ['Full-Stack Developer', 'Freelance'],
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
