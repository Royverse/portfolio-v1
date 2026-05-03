import React, { Component } from 'react';
import styled from 'styled-components';
import vhCheck from 'vh-check';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
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
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: '01',
        projectName: 'BluePrint Storybook',
        projectDesc: 'Collaborated with a team to develop a comprehensive design system for a client. Created an extensive Storybook showcasing all the design elements and components.',
        projectType: 'DESIGN SYSTEM',
        roles: ['UI Designer', 'Technonogist'],
      },
      {
        number: '02',
        projectName: 'BluePrint Apps',
        projectDesc: 'Built apps utilizing the design system we created for our client, resulting in consistent design and functionality across all apps. ',
        projectType: 'ANGULAR APPS',
        roles: ['UI Designer', 'Front-end Developer'],
      },
      {
        number: '03',
        projectName: 'Admin Portal',
        projectDesc: 'Developed an admin portal for a nail boutique with a database to capture stock and client information, as well as logic to generate reports, streamlining business operations and providing valuable insights into stock and client data.',
        projectType: 'WEB APP',
        roles: ['MEAN Stack Developer', 'UI Designer'],
      },
      {
        number: '04',
        projectName: 'Nail boutique website',
        projectDesc: "Collaborated with a team to develop a website for a nail boutique with a customizer feature that allows customers to design their own nail art. The website also included information on the boutique's services, pricing, and booking options.",
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
      {
        number: '06',
        projectName: 'Bit more about me...',
        projectDesc: 'There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for."- Milton Glaser',
        projectType: 'UI Designer',
        roles: [],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const vhDiff = vhCheck().offset;
    this.setState(
      {
        vh: Math.round(
          (window.document.documentElement.clientHeight + vhDiff) * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = window.document;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
