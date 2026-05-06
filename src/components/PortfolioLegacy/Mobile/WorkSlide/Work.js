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
        projectName: 'BluePrint Storybook',
        projectDesc: 'Collaborated with a team to develop a comprehensive design system for a client. Created an extensive Storybook showcasing all the design elements and components.',
        projectType: 'DESIGN SYSTEM',
        roles: ['UI Designer', 'Technologist'],
      },
      {
        number: '02',
        projectName: 'BluePrint Apps',
        projectDesc: 'Built apps utilizing the design system we created for our client, resulting in consistent design and functionality across all apps.',
        projectType: 'ANGULAR APPS',
        roles: ['UI Designer', 'Front-end Developer'],
      },
      {
        number: '03',
        projectName: 'Admin Portal',
        projectDesc: 'Developed an admin portal for a nail boutique with a database to capture stock and client information, streamlining business operations and providing valuable insights.',
        projectType: 'WEB APP',
        roles: ['MEAN Stack Developer', 'UI Designer'],
      },
      {
        number: '04',
        projectName: 'Nail boutique website',
        projectDesc: "Collaborated with a team to develop a website for a nail boutique with a customizer feature that allows customers to design their own nail art.",
        projectType: 'WEBSITE',
        roles: ['Web Developer'],
      },
      {
        number: '05',
        projectName: 'Readpoint',
        projectDesc: 'Developed an e-commerce website for selling books with a MongoDB database and a payment system. The website allows customers to securely browse and purchase books.',
        projectType: 'WEB APP',
        roles: ['Full Stack Developer'],
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
