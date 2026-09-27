import React from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';
import skillGroups from '../skillGroups';

// Same left inset and title sizes as the Contact slide below it.
const Container = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 15vh;
    padding-right: 24px;
    background: var(--bg);
    transition: background 0.5s ease;
    @media ${device.mobileS} {
    padding-left: 60px;
    }
    @media ${device.tablet} {
    padding-left: 90px;
    padding-right: 90px;
    }
    @media ${device.laptop} {
    padding-left: 120px;
    padding-right: 120px;
    }
`;

const SkillsTitle = styled.h2`
  margin: 0;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 28px 40px;
  margin-top: 32px;
`;

const GroupTitle = styled.h3`
  margin: 0 0 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--rule);
  font-family: 'DM Mono', monospace;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
`;

const Items = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Epilogue', sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: var(--ink);
  @media ${device.tablet} {
    font-size: 18px;
  }
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
