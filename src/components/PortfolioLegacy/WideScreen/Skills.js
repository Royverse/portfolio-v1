import React from 'react';
import styled from 'styled-components';
import skillGroups from '../skillGroups';

// The Work slides pin their text column until the empty last slide begins at
// 7 × 1.4 screens. The top margin holds this section back until then, so the
// last project's text never sits on top of it. Contact's scroll offset
// (ContactSlide/Contact.js) is tuned to this margin and the 120vh height.
const Container = styled.section`
  margin-top: 55vh;
  height: 120vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
`;

const SkillsTitle = styled.h2`
  margin: 0 0 56px;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  font-size: clamp(64px, 7vw, 140px);
  letter-spacing: -0.02em;
  line-height: 1;
  color: var(--ink);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 48px 56px;

  /* Education lines are long; give them two columns so they don't wrap three times. */
  & > div:last-child {
    grid-column: span 2;
  }
`;

const GroupTitle = styled.h3`
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--rule);
  font-family: 'DM Mono', monospace;
  font-weight: 500;
  font-size: clamp(11px, 0.8vw, 15px);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
`;

const Items = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Epilogue', sans-serif;
  font-weight: 300;
  font-size: clamp(16px, 1.25vw, 24px);
  line-height: 1.6;
  color: var(--ink);
`;

const Skills = () => (
  <Container>
    <SkillsTitle>SKILLS</SkillsTitle>
    <Grid>
      {skillGroups.map(({ title, items }) => (
        <div key={title}>
          <GroupTitle>{title}</GroupTitle>
          <Items>
            {items.map(item => <li key={item}>{item}</li>)}
          </Items>
        </div>
      ))}
    </Grid>
  </Container>
);

export default Skills;
