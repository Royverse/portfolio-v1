/* eslint-disable linebreak-style */
/* eslint-disable react/sort-comp */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import TextContent from './TextContent';
import ImageContent from './ImageContent';
import ImdPanel from './ImdPanel';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Button = styled.button`
  background: transparent;
  color: var(--accent);
  border: none;
  padding: 10px 0;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dialog = styled.div`
background-color: var(--bg);
color: var(--ink);
border: 1px solid var(--border);
padding: 28px 32px;
border-radius: 12px;
width: 80%;
max-width: 880px;
max-height: 85vh;
overflow-y: auto;
font-family: 'Epilogue', sans-serif;
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);

h3 {
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin: 20px 0 8px;
}

h3:first-child {
  margin-top: 0;
}

p {
  font-size: 14px;
  margin-bottom: 15px;
}

ul {
  list-style-type: disc;
  margin: 0 0 15px 20px;
  padding: 0;
}

li {
  font-size: 14px;
  line-height: 1.55;
  margin-bottom: 6px;
}

blockquote {
  margin: 20px 0;
  padding: 14px 18px;
  border-left: 3px solid var(--accent);
  font-size: 15px;
  font-style: italic;
  line-height: 1.55;
}

cite {
  display: block;
  margin-top: 8px;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  font-style: normal;
  letter-spacing: 0.06em;
  color: var(--ink-muted);
}

button {
  background-color: var(--accent);
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
      showDialog: false,
      dialogProject: null,
    };
    this.pageSplitTimes = 1.4;
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
        projectName: 'IMD Business School',
        projectDesc: 'Internal products for executive education: assessments, leadership diagnostics, a live simulation and data tools.',
        projectType: 'WEB PLATFORMS',
        roles: ['Learning Innovation & STS Developer', '2023 – present'],
        problem: 'Internal products for IMD’s executive programmes, several replacing tools the teams had outgrown.',
        solution: 'Joined in QA in July 2023; Learning Innovation Developer since February 2024 and Strategic Talent Solutions Developer since October 2025.\nPart of the team that rebuilt Leader’s Question Mix, then built LQM 360 on top.\nBuilt a live multiplayer version of an existing board simulation, with safeguards for running it in sessions.\nBuilt the reviewer journey on the Accelerator assessment platform.\nBuilt a replacement for the World Competitiveness Center’s data tool.\nAdded tenant configuration and data cleaning to a talent dashboard.\nReviewed the organisation’s repositories for security risks and presented a remediation plan.',
      },
      {
        number: '02',
        projectName: 'BluePrint',
        projectDesc: 'The design-system pilot for Standard Bank’s Corporate & Investment Banking division: reusable Angular components, documented in Storybook.',
        projectType: 'DESIGN SYSTEM',
        roles: ['User Interface Designer', '2022 – 2023'],
        problem: 'Product teams in the division needed shared components instead of each building their own.',
        solution: 'Built and maintained reusable Angular components for BluePrint 3.0, placed at Standard Bank by iqbusiness.\nTurned Figma designs into accessible, documented Storybook components.\nMade components work at narrow widths and moved button variants from appearance to semantic intent.\nKept documentation, accessibility checks and the changelog current for product teams.',
        QA: 'Storybook and Chromatic for visual and responsive checks.\nUsability sessions and peer code reviews.\nPublished package versions tested before teams upgraded.\nComponents tested in real page templates, across browsers and devices.',
        quote: 'Roy is a rare find, and has shown great maturity and skill, far beyond expectation.',
        quoteAuthor: 'Design Lead, Standard Bank',
      },
      {
        number: '03',
        projectName: 'BluePrint Apps',
        projectDesc: 'Angular applications built on the BluePrint components, giving the bank’s products one look and behaviour.',
        projectType: 'ANGULAR APPS',
        roles: ['User Interface Designer', '2022 – 2023'],
        problem: 'Product teams needed applications that followed BluePrint, so users had a consistent experience.',
        solution: 'Built Angular applications on the BluePrint component library.\nApplied the same components and patterns across every app.\nRan usability tests to check the experience held up.',
      },
      {
        number: '04',
        projectName: 'Admin Portal',
        projectDesc: 'An admin portal for a nail boutique: stock, client records and reports in one place.',
        projectType: 'WEB APP',
        roles: ['Lead UX/UI Developer', '2021'],
        problem: 'The boutique managed stock and client details by hand and had no reliable reporting.',
        solution: 'Led a team of four that designed and built the boutique’s systems.\nBuilt the admin portal: stock control, client records and reports.',
      },
      {
        number: '05',
        projectName: 'Nail Boutique',
        projectDesc: 'The boutique’s website: services, prices and online booking, plus a designer where customers create their own nail art.',
        projectType: 'WEBSITE',
        roles: ['Lead UX/UI Developer', '2021'],
        problem: 'The boutique had little online presence and no online booking.',
        solution: 'Built a responsive website with services, prices and contact details.\nBuilt a nail-art designer for customers to try designs.\nAdded online booking.',
      },
      {
        number: '06',
        projectName: 'Readpoint',
        projectDesc: 'An online bookshop with a MongoDB database and payments, where customers browse and buy books.',
        projectType: 'WEB APP',
        roles: ['Software Engineer', 'Freelance'],
        problem: 'A bookseller wanted to sell online.',
        solution: 'Built the shop on Node.js, Express and MongoDB, with browsing and checkout.\nIntegrated a secure payment system.\nBuilt stock management that updates as books sell.',
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        problem: '',
        indicators: '',
        solution: '',
        QA: '',
      },

    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      vh: Math.round(window.document.documentElement.clientHeight * this.pageSplitTimes),
    });
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

    if (
      Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1
    ) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (
      slideNumber === this.workDetails.length - 1
      && Math.floor(scrollDistance / vh) < slideNumber
    ) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  handleButtonClick = (projectIndex) => {
    this.setState({
      showDialog: true,
      dialogProject: this.workDetails[projectIndex],
    });
  };

  handleCloseDialog = () => {
    this.setState({
      showDialog: false,
      dialogProject: null,
    });
  };

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;

    if (slideNumber >= this.workDetails.length) {
      return null;
    }
    const project = this.workDetails[slideNumber];
    let description = null;
    if (project.projectDesc) {
      description = (
        <div>
          <p>{project.projectDesc}</p>
          {project.projectType !== 'UI Designer' && (
            <Button type="button" onClick={() => this.handleButtonClick(slideNumber)}>
              More info →
            </Button>
          )}
        </div>
      );
    }

    return (
      <TextContent
        number={project.number}
        projectName={project.projectName}
        projectDesc={description}
        projectType={project.projectType}
        roles={project.roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    const { showDialog, dialogProject, slideNumber } = this.state;
    const list = text => (
      <ul>
        {text.split('\n').map(line => <li key={line}>{line}</li>)}
      </ul>
    );

    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        {slideNumber === 1 && <ImdPanel />}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
        {showDialog && (
          <Overlay onClick={e => e.target === e.currentTarget && this.handleCloseDialog()}>
            <Dialog role="dialog" aria-modal="true" aria-label={dialogProject.projectName}>
              <h3>Context</h3>
              <p>{dialogProject.problem}</p>
              <h3>What I did</h3>
              {list(dialogProject.solution)}
              {dialogProject.QA && (
                <>
                  <h3>Quality</h3>
                  {list(dialogProject.QA)}
                </>
              )}
              {dialogProject.quote && (
                <blockquote>
                  “{dialogProject.quote}”
                  <cite>— {dialogProject.quoteAuthor}</cite>
                </blockquote>
              )}
              <Button onClick={this.handleCloseDialog}>Close</Button>
            </Dialog>
          </Overlay>
        )}
      </Container>
    );
  }
}

export default Work;
