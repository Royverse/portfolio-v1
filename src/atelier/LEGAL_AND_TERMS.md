# Legal, Terms of Service, Privacy Policy & Third-Party Disclosures

**Product:** Roy's Atelier Studio (Pro Edition)  
**Author & Developer:** Roy Mootsana ([roymootsana.art](https://roymootsana.art))  
**Customer Support Helpline:** `support@roymootsana.art`  
**Merchant of Record Providers:** Polar.sh (Primary), Lemon Squeezy, Gumroad  
**Effective Date:** 2026-10-25  

---

## 1. Customer Support & Helpline
For customer service, technical assistance, license key retrieval, or bug reports:
- **Email Helpline:** `support@roymootsana.art`
- **Response SLA:** Within 24–48 business hours.
- **Support Scope:** License key activation, offline receipt recovery, DAW WebMIDI mapping (Ableton Live, FL Studio, Logic Pro, Reaper), audio driver latency troubleshooting, and feature requests.

---

## 2. Privacy Policy & Camera Safety Guarantee
Roy's Atelier Studio is an offline-first, client-side web application. We take user privacy with the utmost seriousness:

1. **Local, On-Device Vision Processing**:
   - Camera access (`navigator.mediaDevices.getUserMedia`) is used strictly to extract real-time hand landmark coordinates via Google MediaPipe Hands running locally in WebAssembly.
   - **NO video frames, images, audio feeds, or biometric templates are ever recorded, saved, uploaded, or transmitted to any server or third party.**
   - All kinematic coordinate calculations take place in volatile browser memory and are discarded frame-by-frame (60fps).
2. **Local Storage**:
   - The application uses browser `localStorage` solely for:
     - Cryptographically signed offline license receipts (`roys_atelier_pro_receipt`).
     - User interface state (theme preference, UI positions, guide dismissal).
   - No tracking cookies, third-party advertising trackers, or fingerprinting scripts are used.
3. **Network Egress Firewall & Hardware Isolation**:
   - The application embeds an automated client-side Egress Firewall (`SecurityShield`) that actively intercepts outgoing network primitives (`fetch`, `XMLHttpRequest`, `sendBeacon`, `WebSocket`) to mathematically block any transmission of media streams, video frames, or biometric vectors.
   - Microphone hardware access is disabled at the browser platform level via HTTP `Permissions-Policy: microphone=()`. Roy's Atelier instruments are driven purely by mathematical physical-modeling synthesis in the Web Audio API.
   - Content Security Policy (CSP Level 3) restricts script execution and network endpoints exclusively to authorized origins, preventing third-party code injection or data exfiltration.
4. **Network Requests**:
   - Outgoing network calls occur only when:
     - Validating or activating a license key against the serverless endpoint (`/.netlify/functions/verify-license`).
     - Downloading static WebAssembly model binaries from authorized CDN (`cdn.jsdelivr.net`) upon initial load if not already cached offline by the Service Worker.
     - Navigating to Merchant of Record checkout pages (Polar.sh, Gumroad, Lemon Squeezy).

---

## 3. Terms of Service & Commercial License

### 3.1 License Grant
- **Free Tier:** Users are granted a perpetual, non-exclusive license to use the Theremin and Swiss Handpan instruments for personal or non-commercial use.
- **Pro Tier (Roy's Atelier Studio License):** Upon purchasing a Studio License ($29 Launch Special / $39 Regular), the purchaser is granted a perpetual, non-exclusive, worldwide, royalty-free commercial license to:
  - Access all 5 instruments (Theremin, Cristal Baschet, Swiss Handpan, Ondes Martenot, Spatial Laser Harp).
  - Use the 10-Axis WebMIDI Controller to route MIDI data to any Digital Audio Workstation (DAW) or hardware synthesizer.
  - Export 32-bit WAV stem recordings and MIDI files.
  - Use any musical compositions, sound recordings, or performances created with Roy's Atelier Studio in commercial music releases, broadcasts, films, games, or live performances without paying royalties.

### 3.2 Refund Policy (30-Day Money-Back Guarantee)
We stand behind the craftsmanship of Roy's Atelier Studio:
- If you are unsatisfied with your purchase or encounter hardware incompatibilities, you may request a 100% full refund within **30 days of purchase**.
- Refund requests can be initiated by emailing `support@roymootsana.art` with your order email or license key, or via the Merchant of Record customer portal (Polar.sh, Lemon Squeezy, or Gumroad).

---

## 4. Third-Party Licenses & Fair Use Disclosures

Roy's Atelier Studio is built using open-source software and historical acoustic research:

### 4.1 Open-Source Software Attributions
- **Google MediaPipe Hands**:
  - Licensed under the Apache License, Version 2.0.
  - Copyright Google LLC.
  - [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
- **Three.js**:
  - Licensed under the MIT License.
  - Copyright © 2010-2026 Three.js authors (Ricardo Cabello / Mr.doob).
- **1-Euro Filter (One-Euro Filter)**:
  - Licensed under the BSD 2-Clause License.
  - Copyright © 2012 Géry Casiez, Nicolas Roussel, Daniel Vogel.
- **Vite & TypeScript**:
  - Licensed under the MIT License.
  - Copyright © 2019-present Evan You & Vite contributors; Copyright Microsoft Corporation.

### 4.2 Historical Instrument Heritage & Fair Use Statement
- **Theremin**: Developed in 1920 by Léon Theremin. The foundational heterodyne acoustic principles and patent have long expired into the public domain.
- **Ondes Martenot**: Created in 1928 by Maurice Martenot. This application provides an original additive/subtractive physical-modeling synthesizer inspired by the mechanical ring (*bague*) and *touche d'intensité*.
- **Cristal Baschet**: Created in 1952 by Bernard and François Baschet. Our implementation uses custom Web Audio API waveguide acoustic modeling (fiberglass cone resonance and glass rod friction modeling) as an artistic homage.
- **Swiss Handpan**: Inspired by the steel pan percussion idioms developed in Switzerland and Trinidad.
- **Spatial Laser Harp**: An artistic performance interface concept popularized by Bernard Szajner and Jean-Michel Jarre.
- *Notice:* All sound generation is achieved through original real-time mathematical physical-modeling synthesis authored in the Web Audio API. No proprietary audio recordings, copyrighted sample libraries, or manufacturer-specific ROMs have been reproduced or redistributed.
