# Roy Mootsana Portfolio Ecosystem — Agent Guidelines

## Ecosystem Architecture
This repository (`portfolio-v1`) serves as the central hub for Roy Mootsana's portfolio (`https://roymootsana.art/`) and coordinates the 12 live experiment projects featured in `src/components/WorkShowcase.js` plus the private commercial project (`roys-atelier-studio`).

All 14 projects are cloned side-by-side on this machine in `C:\Users\User\Documents\GitHub\`:
- `portfolio-v1` (Base portfolio, `https://roymootsana.art/`)
- `air-canvas` (`https://air-canvas-ai.netlify.app/`)
- `not-financial-advice` (`https://notfinancialadvice.site/`)
- `moodSupport` (`https://mood-align.netlify.app/`)
- `AR-PORTAL` (`https://ar-portal-demo.netlify.app/`)
- `os-by-midnight` (`https://midnight-os-demo.netlify.app/`)
- `luminary` (`https://luminary-flight.netlify.app/`)
- `wand-wave` (`https://wand-wave.netlify.app/`)
- `echo` (`https://echo-voice-sandbox.netlify.app/`)
- `ideation-canvas` (`https://milkyway-ai-galaxy.netlify.app/`)
- `cold-wake` (`https://cold-wake-game-1.netlify.app/`)
- `piano` (`https://royverse.github.io/piano/`)
- `roys-atelier-studio` (Commercial Pro Edition, `https://roymootsana.art/atelier/`)

## Canonical Registry & Tooling
- Complete project metadata (Netlify Site IDs, local paths, repos, branches, build commands, and theme colors) is stored in [`projects.json`](./projects.json).
- Multi-project orchestrator CLI: [`orchestrate.mjs`](./orchestrate.mjs) (or `.\orchestrate.ps1`).
- Atelier Studio Integration Guide: [`docs/ATELIER_INTEGRATION.md`](./docs/ATELIER_INTEGRATION.md).

### Quick Orchestrator Commands
- `node orchestrate.mjs list` — Display all registered projects and local path statuses.
- `node orchestrate.mjs status` — Check git status across all repos.
- `node orchestrate.mjs exec "<cmd>"` — Run any command across all repos (use `--only <id>` to filter).
- `node orchestrate.mjs verify` — Parallel HTTP health check across all live URLs.
- `node orchestrate.mjs build` — Run production builds on all compiled projects.
- `node orchestrate.mjs deploy` — Deploy production builds to Netlify via Netlify CLI.
- `node orchestrate.mjs favicons` — Re-generate custom-bordered signature favicons.
- `node orchestrate.mjs commit "<msg>"` — Git add, commit, and push modified repositories.

## Commercial Sub-Path Architecture: Roy's Atelier Studio (`/atelier/`)
`roys-atelier-studio` is Roy's commercial paid web app (replacing the experimental Theremin). It does not deploy to a separate Netlify site; it deploys directly onto `https://roymootsana.art/atelier/` through this repository:
1. **Compilation**: `roys-atelier-studio` builds with Vite base `/atelier/` into its `dist/`.
2. **Synchronization**: `scripts/copy-static.js` in `portfolio-v1` automatically syncs `../roys-atelier-studio/dist` into `portfolio-v1/dist/atelier/` during `npm run build`. A tracked backup also lives in `src/atelier/`.
3. **Licensing & Routing**: `netlify.toml` and `src/_redirects` route `/atelier/api/verify-license` to `netlify/functions/verify-license.js` (Ed25519-signed verification for Polar.sh, Lemon Squeezy, Gumroad, and VIP press keys).
4. **Permissions**: `Permissions-Policy: camera=(self), payment=(self)` and `Cross-Origin-Opener-Policy: same-origin-allow-popups` are enforced at root headers.
5. **Standalone Retirement**: Standalone Netlify sites `roys-theremin.netlify.app` and `roys-atelier-studio.netlify.app` are deleted. All traffic lives on `roymootsana.art`. See [`docs/ATELIER_INTEGRATION.md`](./docs/ATELIER_INTEGRATION.md).

## Multi-Project Editing Rules
1. **Parallel & Batch Operations**: When asked to make mass changes (e.g. updating headers, styles, analytics, dependencies, or favicons), inspect `projects.json` for paths and use `orchestrate.mjs` for execution.
2. **Branding Integrity**: Each project retains the signature Roy Mootsana icon on `#111` rounded background, framed by its unique accent theme border color defined in `projects.json`.
3. **Deployment**: Netlify deployments can be executed via Netlify CLI (`netlify deploy --dir <dir> --site <siteId> --prod`) or the Netlify MCP server.
