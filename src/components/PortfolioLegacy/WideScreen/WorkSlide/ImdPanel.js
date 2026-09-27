import React from 'react';
import styled, { keyframes } from 'styled-components';

// IMD's products are internal, so this slide lists what was built instead of
// showing screenshots of them. Pinned like the text column, because a slide
// scrolls for 1.4 screens and a static panel would leave before its text.
const PRODUCTS = [
  ['Strategic Execution Simulation', 'Next.js · Prisma · PostgreSQL'],
  ['Accelerator assessment platform', 'Angular · Flask · Azure'],
  ["Leader's Question Mix & LQM 360", 'Next.js · Azure AD B2C'],
  ['World Competitiveness Center data app', 'Next.js · FastAPI · MSAL'],
  ['Talent Dashboard', 'Django REST · Next.js'],
  ['Organisation-wide security audit', '52 repositories'],
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(calc(-50% + 16px)); }
  to { opacity: 1; transform: translateY(-50%); }
`;

const Panel = styled.div`
  position: fixed;
  top: 50%;
  left: 53%;
  right: 6%;
  transform: translateY(-50%);
  animation: ${fadeIn} 0.6s cubic-bezier(0.19, 1, 0.22, 1) both;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Label = styled.p`
  margin: 0 0 18px;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--ink);
`;

const Row = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid var(--rule);
`;

const Name = styled.span`
  font-family: 'Syne', sans-serif;
  font-weight: 500;
  font-size: clamp(17px, 1.5vw, 26px);
  color: var(--ink);
`;

const Stack = styled.span`
  flex: none;
  font-family: 'DM Mono', monospace;
  font-size: clamp(10px, 0.75vw, 13px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-muted);
`;

const ImdPanel = () => (
  <Panel>
    <Label>Selected work at IMD</Label>
    <List>
      {PRODUCTS.map(([name, stack]) => (
        <Row key={name}>
          <Name>{name}</Name>
          <Stack>{stack}</Stack>
        </Row>
      ))}
    </List>
  </Panel>
);

export default ImdPanel;
