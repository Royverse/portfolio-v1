# Roy's Atelier Studio (Pro) — Integration & Deployment Guide

> **Production Endpoint**: `https://roymootsana.art/atelier/`  
> **Netlify Site**: `roy-mootsana` (`1854f21c-af23-4c4c-942d-403eb7ceff63`)  
> **Commercial Repo**: `Royverse/roys-atelier-studio` (Private)

---

## 1. Context & Evolution: Replacing Roy's Theremin

Originally, project #12 in `src/components/WorkShowcase.js` was "Roy's Theremin", hosted on `roys-theremin.netlify.app`.

In October 2026, Roy upgraded and expanded this project into **Roy's Atelier Studio (Pro Edition)**—a full commercial product featuring 5 rare world instruments (*Theremin*, *Cristal Baschet*, *Swiss Handpan*, *Ondes Martenot*, and *Spatial Laser Harp*), 14-bit MPE/WebMIDI DAW integration, Scale Quantizer, and Stem Recorder.

### Transition Steps Completed:
1. **GitHub Visibility**: `Royverse/roys-theremin` repository visibility was switched to **Private**.
2. **Netlify Teardown**: Standalone Netlify sites `roys-theremin.netlify.app` and `roys-atelier-studio.netlify.app` were permanently deleted.
3. **Domain Consolidation**: The standalone product is now hosted natively under Roy's apex domain at **`https://roymootsana.art/atelier/`**.
4. **Showcase Overhaul**: Card #12 in `src/components/WorkShowcase.js` was completely rewritten with commercial positioning, updated tech pills, deep-link call-to-action (`Open Studio (Pro) ↗`), and upgraded dual-mode 2D/3D canvas artwork (`drawAtelier` & `drawAtelierM`).

---

## 2. Technical Sub-Path Architecture

### Vite Scoping in `roys-atelier-studio`
The commercial application is configured with `base: '/atelier/'` in its `vite.config.ts`. All compiled assets, chunks, and workers are referenced via `/atelier/assets/...`.

### Self-Healing Asset Sync (`scripts/copy-static.js`)
When building `portfolio-v1` (`npm run build`), Parcel outputs the base portfolio bundle into `dist/`. The postbuild script (`scripts/copy-static.js`) then runs:
1. Copies `src/atelier/` (the committed backup) into `dist/atelier/`.
2. Checks if `../roys-atelier-studio/dist` exists locally; if found, it automatically mirrors the latest files into `dist/atelier/`.
This dual-check ensures the site builds identically whether deployed from a local monorepo checkout or an isolated CI server.

### Netlify Configuration (`netlify.toml` & `src/_redirects`)
1. **Routing & SPA Fallbacks**:
   - `/atelier` redirects cleanly to `/atelier/` with status 200/301.
   - `/atelier/*` routes to `/atelier/:splat`.
2. **Serverless License Verification**:
   - Both `/atelier/api/verify-license` and `/api/verify-license` route to `/.netlify/functions/verify-license`.
   - The function `netlify/functions/verify-license.js` verifies keys against Polar.sh, Lemon Squeezy, Gumroad, and VIP press keys, returning Ed25519-signed offline receipts.
3. **Permissions & Security Headers**:
   - `Permissions-Policy: camera=(self), microphone=(), geolocation=(), payment=(self)` ensures browser webcam permissions are never blocked.
   - `Cross-Origin-Opener-Policy: same-origin-allow-popups` allows secure popup checkouts for payment merchants.

---

## 3. SEO, Social Sharing & PWA Integration

1. **OpenGraph & Twitter Cards**:
   - A dedicated 1200x630 banner is served at `https://roymootsana.art/atelier/og-preview.png`.
   - Rich `og:title`, `og:description`, and `twitter:card` tags are injected into `atelier/index.html`.
2. **Canonical Links & Sitemap**:
   - `<link rel="canonical" href="https://roymootsana.art/atelier/" />` prevents search engine duplication.
   - `https://roymootsana.art/atelier/` is indexed in `src/sitemap.xml` with priority `0.95`.
3. **PWA Scope Isolation**:
   - `atelier/manifest.json` specifies `scope: "/atelier/"` and `start_url: "/atelier/"`.
   - Service worker `sw.js` caches assets relative to its scope, preventing cache pollution of the base portfolio.
