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
        projectName: 'IMD',
        projectDesc: 'At the International Institute for Management Development: digital products for global executive programmes—turning leadership diagnostics, live simulations and research data into software that holds up in the room.',
        projectType: 'WEB PLATFORMS',
        roles: ['Learning Innovation & STS Developer', '2023 – present'],
        problem: 'The International Institute for Management Development (IMD) runs executive programmes for global organisations. When off-the-shelf tools started limiting how faculty taught and how leaders received feedback, we brought those platforms in-house.',
        solution: 'Turned a paper-based board exercise into a live multiplayer simulation engineered to stay stable with a room full of executives.\nCo-built the new Leader’s Question Mix and extended it into a 360° feedback platform so cohorts can track growth over time.\nShaped the external reviewer experience on the Accelerator platform so feedback arrives on time and turns into clear reports.\nReplaced legacy research tooling for the World Competitiveness Center and added safeguards so bad data is caught before reaching client dashboards.\nLed an organisation-wide security review across the codebase and drove the remediation plan with engineering leadership.',
      },
      {
        number: '02',
        projectName: 'BluePrint',
        projectDesc: 'The design-system pilot for the Corporate & Investment Banking division of The Standard Bank of South Africa Limited—giving product teams one shared language in code.',
        projectType: 'DESIGN SYSTEM',
        roles: ['User Interface Designer', '2022 – 2023'],
        problem: 'Every product team in the division was rebuilding the same UI from scratch. BluePrint 3.0 set out to give designers and engineers a single, trusted component library.',
        solution: 'Translated Figma designs into accessible, production-ready Angular components that teams could drop straight into their products.\nShifted component APIs from visual appearance to semantic intent, making it naturally harder for teams to ship inconsistent UI.\nKept documentation, accessibility checks and releases tight enough that product teams trusted every upgrade.',
        QA: 'Automated visual regression and responsive checks in Storybook and Chromatic.\nUsability sessions and peer reviews before publishing.\nVerified package upgrades inside real banking page templates across browsers and devices.',
        quote: 'Roy is a rare find, and has shown great maturity and skill, far beyond expectation.',
        quoteAuthor: 'Design Lead, The Standard Bank of South Africa Limited',
      },
      {
        number: '03',
        projectName: 'BluePrint Apps',
        projectDesc: 'Enterprise banking applications built on BluePrint—proving the design system worked in real products, not just in Storybook.',
        projectType: 'ANGULAR APPS',
        roles: ['User Interface Designer', '2022 – 2023'],
        problem: 'A design system only matters if it holds up in production. The real test was shipping everyday banking applications on top of BluePrint.',
        solution: 'Built production Angular interfaces on the shared component library, cutting duplicate UI work across teams.\nValidated flows through usability testing so moving from one bank tool to another felt like a single, coherent product.',
      },
      {
        number: '04',
        projectName: 'Admin Portal',
        projectDesc: 'An operations portal that took a growing boutique off paper—bringing stock, client history and business reporting into one place.',
        projectType: 'WEB APP',
        roles: ['Lead UX/UI Developer', '2021'],
        problem: 'The business was losing time and stock to manual counts and scattered notes, with no clear view of how the shop was performing.',
        solution: 'Led a team of four to take the business digital from the ground up.\nReplaced manual stocktaking and paper records with a single portal that gave the owner reliable numbers.',
      },
      {
        number: '05',
        projectName: 'Nail Boutique',
        projectDesc: 'A booking site and interactive nail-art studio that turned walk-in enquiries into prepared online appointments.',
        projectType: 'WEBSITE',
        roles: ['Lead UX/UI Developer', '2021'],
        problem: 'Clients couldn’t see pricing, test ideas or book an appointment without calling the shop, leaving staff fielding the same questions all day.',
        solution: 'Built an interactive nail-art designer so clients could experiment with custom looks before walking through the door.\nPaired it with self-service online booking, cutting back-and-forth for staff and lifting booking efficiency.',
      },
      {
        number: '06',
        projectName: 'Readpoint',
        projectDesc: 'An e-commerce bookstore that took an independent bookseller online, with live inventory and checkout.',
        projectType: 'WEB APP',
        roles: ['Software Engineer', 'Freelance'],
        problem: 'An independent bookseller wanted to reach readers beyond foot traffic without overselling stock that was still tracked by hand.',
        solution: 'Built the online shop and checkout so readers could browse and buy from anywhere.\nTied payments directly to live inventory so stock stayed accurate automatically.',
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
              <h3>Impact & work</h3>
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
