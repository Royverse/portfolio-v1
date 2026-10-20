---
name: portfolio-orchestrator
description: >-
  Multi-project orchestrator for Roy Mootsana's portfolio ecosystem and 12 experiment apps.
  Use when asked to perform mass edits, batch git operations, builds, live URL verifications,
  or Netlify deployments across all 13 projects.
---

# Portfolio Ecosystem Orchestrator

Orchestrates mass edits, status audits, builds, git commits, and Netlify deployments across Roy Mootsana's portfolio and 12 experiment web applications.

## Master Registry
See [`projects.json`](../../projects.json) for full metadata.

## CLI Usage
From the `portfolio-v1` directory:
- `node orchestrate.mjs list`
- `node orchestrate.mjs status`
- `node orchestrate.mjs exec "<command>"`
- `node orchestrate.mjs verify`
- `node orchestrate.mjs build`
- `node orchestrate.mjs deploy`
- `node orchestrate.mjs favicons`
- `node orchestrate.mjs commit "<message>"`
