# Roy Mootsana Portfolio Ecosystem — Claude Guidelines & Memory

This workspace is the central hub for Roy Mootsana's portfolio (`portfolio-v1`) and coordinates all 12 live experiment projects featured in the portfolio showcase.

All 13 projects are cloned locally in side-by-side repositories under `C:\Users\User\Documents\GitHub\` and are deployed live on Netlify and GitHub Pages.

---

## 1. Master Ecosystem Registry

The machine-readable registry is stored in [`projects.json`](./projects.json).

| # | ID | Project Name | Tech Stack | Local Directory | GitHub Repo | Branch | Netlify Site ID / Target | Live URL | Theme Color |
|---|---|---|---|---|---|---|---|---|---|
| **00** | `portfolio-v1` | Portfolio (Base) | React / Vite / Tailwind | `C:\Users\User\Documents\GitHub\portfolio-v1` | `Royverse/portfolio-v1` | `main` | `1854f21c-af23-4c4c-942d-403eb7ceff63` | https://roymootsana.art/ | `#333333` |
| **01** | `air-canvas` | Air Canvas AI | Vite / MediaPipe / Canvas | `C:\Users\User\Documents\GitHub\air-canvas` | `Royverse/air-canvas` | `master` | `df7b5aa3-1ba1-45d9-96e3-00ca3b8d9606` | https://air-canvas-ai.netlify.app/ | `#7F77DD` |
| **02** | `not-financial-advice` | not financial advice. | Next.js 15 / Supabase / Gemini | `C:\Users\User\Documents\GitHub\not-financial-advice` | `Royverse/not-financial-advice` | `main` | `36c82fc4-9616-4ccb-b073-ad50578e7056` | https://notfinancialadvice.site/ | `#10B981` |
| **03** | `moodSupport` | Mood Support | React / Framer Motion / Gemini | `C:\Users\User\Documents\GitHub\moodSupport` | `Royverse/moodSupport` | `main` | `13c720ca-3f7f-4bf3-8113-59604865eda3` | https://mood-align.netlify.app/ | `#E11D48` |
| **04** | `AR-PORTAL` | AR Portal | A-Frame / AR.js / Three.js | `C:\Users\User\Documents\GitHub\AR-PORTAL` | `Royverse/AR-PORTAL` | `main` | `c0ab67d9-db90-49d7-ac61-dcfab71cd0ac` | https://ar-portal-demo.netlify.app/ | `#06B6D4` |
| **05** | `os-by-midnight` | Midnight OS | Next.js 16 / Static Export | `C:\Users\User\Documents\GitHub\os-by-midnight` | `Royverse/os-by-midnight` | `master` | `9e4bdcff-6efb-454a-bcac-9d90b4c7ff07` | https://midnight-os-demo.netlify.app/ | `#94A3B8` |
| **06** | `luminary` | LUMINARY | Three.js / Verlet Physics | `C:\Users\User\Documents\GitHub\luminary` | `Royverse/luminary` | `main` | `6defaba1-316b-4fc7-acc1-c4f02d314496` | https://luminary-flight.netlify.app/ | `#0D9488` |
| **07** | `wand-wave` | Wonderwave | MediaPipe Tasks / Three.js | `C:\Users\User\Documents\GitHub\wand-wave` | `Royverse/wand-wave` | `main` | `f245b312-bdcc-4d25-a1ba-3635890da0d4` | https://wand-wave.netlify.app/ | `#2DD4BF` |
| **08** | `echo` | ECHO | Three.js / Web Speech / Gemini | `C:\Users\User\Documents\GitHub\echo` | `Royverse/echo` | `main` | `d7834c0b-b3e2-4380-9aea-d3a1271eeb94` | https://echo-voice-sandbox.netlify.app/ | `#A855F7` |
| **09** | `ideation-canvas` | milkyway.ai | React 18 / Vite / NVIDIA NIM | `C:\Users\User\Documents\GitHub\ideation-canvas` | `Royverse/ideation-canvas` | `main` | `36b7fef2-6771-4c8c-9fc1-8a56842b3ebf` | https://milkyway-ai-galaxy.netlify.app/ | `#3B82F6` |
| **10** | `cold-wake` | Cold Wake | WebGL2 / GLSL Shaders | `C:\Users\User\Documents\GitHub\cold-wake` | `Royverse/cold-wake` | `main` | `c3a9b589-5c43-4699-a15d-df1da3c403f9` | https://cold-wake-game-1.netlify.app/ | `#38BDF8` |
| **11** | `piano` | Overtone | Vanilla JS / Web Audio | `C:\Users\User\Documents\GitHub\piano` | `Royverse/piano` | `main` | GitHub Pages | https://royverse.github.io/piano/ | `#F59E0B` |
| **12** | `roys-atelier-studio` | Roy's Atelier Studio (Pro) | Three.js / 1-Euro Kinematics / WebMIDI / Vite | `C:\Users\User\Documents\GitHub\roys-atelier-studio` | `Royverse/roys-atelier-studio` | `main` | `1854f21c-af23-4c4c-942d-403eb7ceff63` | https://roymootsana.art/atelier/ | `#D97706` |

---

## 2. Multi-Project Orchestrator CLI

Use [`orchestrate.mjs`](./orchestrate.mjs) (or `.\orchestrate.ps1`) to run actions across all 13 projects simultaneously:

```bash
# View table of all 13 projects and local path statuses
node orchestrate.mjs list

# Check git status (branches & modified files) across all repos
node orchestrate.mjs status

# Execute any shell command across all repositories
node orchestrate.mjs exec "git pull origin main"
node orchestrate.mjs exec "npm test" --only air-canvas,roys-atelier-studio

# Run parallel HTTP health check across all 13 live URLs
node orchestrate.mjs verify

# Build all compiled projects
node orchestrate.mjs build

# Deploy all production builds directly to Netlify
node orchestrate.mjs deploy

# Re-generate signature custom-bordered favicons across all projects
node orchestrate.mjs favicons

# Bulk stage, commit, and push modified repositories
node orchestrate.mjs commit "feat: update analytics script"
```

---

## 3. Brand & Favicon Architecture

Every project features the signature Roy Mootsana rounded favicon (`#111` dark fill with signature SVG glyph) framed with a **3px solid accent stroke** corresponding to that project's designated theme color:
- Vector asset: `favicon.svg`
- Multi-resolution ICO: `favicon.ico` (packing 16, 32, 48 PNG frames)
- High-res PNGs: `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`
- Generator: [`scripts/generate_custom_favicons.ps1`](./scripts/generate_custom_favicons.ps1)

HTML Standard across all projects:
```html
<link rel="icon" href="/favicon.ico" sizes="48x48" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

---

## 4. Environment & Deployment Tooling

- **Netlify CLI**: Installed and authenticated (`netlify deploy --dir <dir> --site <siteId> --prod`).
- **GitHub CLI**: Installed and authenticated (`gh`).
- **Node.js**: v22.17.1.
- **PowerShell**: 5.1 on Windows.
- **Branch Conventions**: Note that `air-canvas` and `os-by-midnight` use `master`, while all other repositories use `main`.

---

## 5. Roy's Atelier Studio (`/atelier/`) Deployment Pipeline

Roy's Atelier Studio (Pro Edition) is hosted directly under Roy's apex domain at `https://roymootsana.art/atelier/`. Detailed architecture is documented in [`docs/ATELIER_INTEGRATION.md`](./docs/ATELIER_INTEGRATION.md).

### Pipeline Highlights
- **Vite Base Path**: Configured as `base: '/atelier/'` in `roys-atelier-studio/vite.config.ts`.
- **Automated Copy Hook**: `scripts/copy-static.js` in `portfolio-v1` checks for `../roys-atelier-studio/dist` and automatically copies it to `dist/atelier/` during `npm run build`.
- **License Verifier**: Serverless function at `portfolio-v1/netlify/functions/verify-license.js`, proxied via `src/_redirects` (`/atelier/api/verify-license /.netlify/functions/verify-license 200`).
- **Webcam Security Policy**: Root `netlify.toml` injects `Permissions-Policy: camera=(self)` and `Cross-Origin-Opener-Policy: same-origin-allow-popups` on `/atelier/*` routes for MediaPipe tracking.
- **Deployment**: Deploying `portfolio-v1` updates both the root portfolio and the commercial Studio in a single atomic release.
