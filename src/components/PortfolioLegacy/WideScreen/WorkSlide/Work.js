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
        projectDesc:
          'Internal products for executive education, built and run end to end: assessment platforms, leadership diagnostics, a live multiplayer simulation and data tools.',
        projectType: 'FULL-STACK',
        roles: ['Learning Innovation & STS Developer', '2023 – present'],
        problem:
          'IMD runs executive programmes for multinational companies and needed products it could own: assessments, diagnostics, simulations and research tooling, several of them replacing tools the teams had outgrown.',
        indicators:
          'A Qualtrics 360 tool that could not run repeat feedback rounds across a programme.\nA Power Apps front end the World Competitiveness Center had outgrown.\nLive sessions where one admin edit or a stalled team affects a room of executives.\nIdentity and secrets spread across many repositories.',
        solution:
          'Started in QA in July 2023; Learning Innovation Developer since February 2024 and Strategic Talent Solutions Developer since October 2025.\nPart of the team that rewrote Leader’s Question Mix, then built LQM 360 on top.\nBuilt the Strategic Execution Simulation from an existing paper-based board simulation, with live-session safeguards.\nBuilt the reviewer journey on the Accelerator platform (Angular, Flask).\nBuilt a Next.js and FastAPI replacement for the World Competitiveness Center’s Power Apps tool.\nAdded tenant configuration and data cleaning to a multi-tenant talent dashboard.\nAudited all 52 of the organisation’s code repositories for exposed secrets and security risks, and wrote and presented the remediation plan.',
        QA: '',
      },
      {
        number: '02',
        projectName: 'BluePrint',
        projectDesc: 'BluePrint 3.0, the design-system pilot for Standard Bank\'s Corporate & Investment Banking division: reusable Angular components, documented in Storybook.',
        projectType: 'DESIGN SYSTEM',
        roles: ['User Interface Designer', '2022 – 2023'],
        problem: 'Standard Bank\'s Corporate & Investment Banking division was introducing a new visual language, BluePrint 3.0, and its product teams needed components they could adopt instead of each building their own.',
        indicators: 'Different teams designing and building the same components separately.\nAn inconsistent look and behaviour from one product to the next.\nNo single, documented home for the components.',
        solution: 'Built and maintained reusable Angular library components for BluePrint 3.0, placed at Standard Bank by iqbusiness.\nTurned Figma designs into accessible, documented Storybook components.\nMoved button variants from appearance to semantic intent, and made components work at narrow widths.\nKept the Storybook docs, accessibility add-on and changelog current for product teams.',
        QA: 'Storybook: checked controls, responsiveness and visual alignment.\nReviews: ran usability sessions, reviewed naming and formatting, and did peer code reviews.\nChromatic: automated visual testing as part of continuous integration.\nNexus: tested published package versions before teams upgraded.\nApplications: checked components inside real page templates.\nDevices: tested across browsers, platforms and screen sizes.',
        quote: 'Roy is a rare find, and has shown great maturity and skill, far beyond expectation.',
        quoteAuthor: 'Mel M. Saayman, Design Lead, Standard Bank',
      },
      {
        number: '03',
        projectName: 'BluePrint Apps',
        projectDesc: 'Angular apps built on the BluePrint components, so the bank\'s products shared one look and behaviour.',
        projectType: 'ANGULAR APPS',
        roles: ['User Interface Designer', '2022 – 2023'],
        problem: 'Product teams needed applications that followed BluePrint, so users got the same experience from one app to the next.',
        indicators: 'Each app had drifted into its own design language.\nComponents and patterns were hard to keep consistent.\nMoving between apps felt like moving between different products.',
        solution: 'Built Angular applications on the BluePrint component library.\nUsed the same components, patterns and interactions across every app.\nRan usability tests to check the experience held up.',
        QA: '',
      },
      {
        number: '04',
        projectName: 'Admin Portal',
        projectDesc: 'An admin portal for a nail boutique: stock, client records and reports in one place.',
        projectType: 'WEB APP',
        roles: ['Lead UX/UI Developer', '2021'],
        problem: 'The boutique managed its stock and client details by hand and couldn\'t get reliable reports on the business.',
        indicators: 'Stock counted by hand, which led to errors.\nClient details not kept in one system.\nReports that were slow to produce and hard to trust.',
        solution: 'Led a team of four that designed and built the boutique\'s systems.\nBuilt the admin portal: stock control, client records and report generation.',
        QA: '',
      },
      {
        number: '05',
        projectName: 'Nail Boutique',
        projectDesc: 'The boutique\'s website: services, prices and online booking, plus a designer where customers create their own nail art.',
        projectType: 'WEBSITE',
        roles: ['Lead UX/UI Developer', '2021'],
        problem: 'The boutique had little online presence and no way for customers to plan a design or book online.',
        indicators: 'Hard to find online.\nNo way to design nail art or book an appointment online.\nServices, prices and contact details weren\'t easy to see.',
        solution: 'Built a responsive website in HTML, CSS and JavaScript with services, prices and contact details.\nBuilt a nail-art designer so customers could try designs before booking.\nAdded online booking for appointments.',
        QA: '',
      },
      {
        number: '06',
        projectName: 'Readpoint',
        projectDesc: 'An online bookshop with a MongoDB database and payments, where customers browse and buy books.',
        projectType: 'WEB APP',
        roles: ['Full-Stack Developer', 'Freelance'],
        problem: 'A book seller wanted to sell online and make browsing and buying books easy.',
        indicators: 'No way to reach customers beyond the shop.\nNo convenient, secure way to buy books online.\nStock tracked by hand, with mistakes.',
        solution: 'Built the shop on Node.js, Express and MongoDB, with browsing and checkout.\nIntegrated a secure payment system.\nBuilt stock management that updates as books sell.',
        QA: '',
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
              <h3>The problem</h3>
              <p>{dialogProject.problem}</p>
              <h3>What wasn’t working</h3>
              {list(dialogProject.indicators)}
              <h3>What I did</h3>
              {list(dialogProject.solution)}
              {dialogProject.QA && (
                <>
                  <h3>Quality checks</h3>
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
