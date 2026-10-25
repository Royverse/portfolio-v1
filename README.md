# Roy Mootsana — Software Engineer Portfolio & Creative Coding Ecosystem

> **Live Production Apex**: [https://roymootsana.art/](https://roymootsana.art/)  
> **Commercial Studio**: [https://roymootsana.art/atelier/](https://roymootsana.art/atelier/)  
> **Host**: Netlify Site `roy-mootsana` (`1854f21c-af23-4c4c-942d-403eb7ceff63`)

---

## 🏛️ Ecosystem Overview

This repository (`portfolio-v1`) serves as the central hub of Roy Mootsana's portfolio and orchestrates 12 interactive experiments plus the flagship commercial application **Roy's Atelier Studio (Pro Edition)**:

```
roymootsana.art/
├── /                     → Portfolio (React, Parcel 2, Interactive Canvas & Parallax)
└── /atelier/             → Roy's Atelier Studio (Three.js, MediaPipe 1-Euro, 14-Bit WebMIDI)
```

---

## 🎹 Featured Commercial Product: Roy's Atelier Studio (Pro)

Located at **[`/atelier/`](https://roymootsana.art/atelier/)**, Roy's Atelier Studio is a commercial paid web application for expressive spatial audio and DAW control:
- **5 Rare World Instruments**: *Theremin* (Free), *Swiss Handpan* (Free), *Ondes Martenot* (Pro), *Cristal Baschet* (Pro), and *Spatial Laser Harp* (Pro).
- **Zero-Sensor Mid-Air Kinematics**: 60fps 1-Euro & Kalman-smoothed webcam tracking using MediaPipe.
- **14-Bit MPE/WebMIDI DAW Bridge**: 16,384-step Pitchbend and 1-click `[SOLO MAP]` isolation for Ableton Live, FL Studio, Bitwig, and Logic Pro.
- **Musical Scale Quantizer**: Magnetic pitch pull across *Dorian*, *Hirajoshi*, *Phrygian Dominant*, *Lydian*, and *Whole Tone*.
- **32-Bit Float Stem Recorder**: Instant export of uncompressed `.wav` stems and `.mid` performance files.
- **Ed25519 Stateless Licensing**: Offline-first verification via `/.netlify/functions/verify-license` supporting Polar.sh, Lemon Squeezy, Gumroad, and VIP press keys.

---

## 🌐 Sub-Path Deployment & Synchronization Architecture

Roy's Atelier Studio is developed in its own private repository (`Royverse/roys-atelier-studio`) and deployed natively through `portfolio-v1` at `https://roymootsana.art/atelier/`:

```
C:\Users\User\Documents\GitHub\
├── roys-atelier-studio\           (Private Commercial App Repo)
│   ├── vite.config.ts            (base: '/atelier/')
│   └── dist\                     (Vite build artifacts)
│
└── portfolio-v1\                 (Central Portfolio & Host)
    ├── netlify.toml              (Root Netlify build, functions, and camera permissions)
    ├── src\
    │   ├── _redirects            (/atelier/* & verify-license rewrite rules)
    │   ├── _headers              (Cache rules)
    │   └── atelier\              (Tracked production build of Atelier)
    ├── scripts\copy-static.js    (Auto-syncs ../roys-atelier-studio/dist into dist/atelier)
    └── dist\
        ├── index.html            (Portfolio main entry)
        └── atelier\              (Served at https://roymootsana.art/atelier/)
```

### Build & Deploy Sequence
1. **Build Atelier Studio**:
   ```bash
   cd ../roys-atelier-studio
   npm run build
   ```
2. **Build & Sync Portfolio**:
   ```bash
   cd ../portfolio-v1
   npm run build
   ```
   `scripts/copy-static.js` automatically mirrors `../roys-atelier-studio/dist` into `dist/atelier/`.
3. **Deploy to Netlify**:
   ```bash
   node orchestrate.mjs deploy --only portfolio-v1
   ```

---

## 🛠️ Multi-Project Orchestrator CLI

Use [`orchestrate.mjs`](./orchestrate.mjs) (or `.\orchestrate.ps1`) to coordinate git, builds, deployments, and URL verification across the entire ecosystem:

```bash
# List all registered ecosystem projects
node orchestrate.mjs list

# Check git status across all local repositories
node orchestrate.mjs status

# Parallel health check across all live URLs
node orchestrate.mjs verify

# Run builds across compiled projects
node orchestrate.mjs build

# Deploy to Netlify
node orchestrate.mjs deploy --only portfolio-v1
```

---

## 📄 Key Architecture Documents

- **[`AGENTS.md`](./AGENTS.md)** — Core ecosystem guidelines and project directory mappings.
- **[`CLAUDE.md`](./CLAUDE.md)** — Project matrix and multi-project CLI commands.
- **[`docs/ATELIER_INTEGRATION.md`](./docs/ATELIER_INTEGRATION.md)** — Deep technical breakdown of the `/atelier/` sub-path routing and serverless licensing integration.
- **[`projects.json`](./projects.json)** — Canonical machine-readable ecosystem registry.

---

## 📄 License

The portfolio shell is open-source under the [MIT License](LICENSE).  
The embedded Atelier Studio Pro application is proprietary commercial software (© Roy Mootsana).
