// Cross-platform replacement for the old Windows-only `copy` chain in
// package.json's postbuild script. Parcel doesn't touch these files, so
// they're copied into dist/ by hand after the build: robots.txt and
// sitemap.xml for crawlers, the three favicon formats, the stable
// unhashed portrait-2.jpg that og:image/twitter:image point at, the
// Netlify cache-control rules in _headers, redirects, and Roy's Atelier Studio.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const files = [
  ['src/robots.txt', 'dist/robots.txt'],
  ['src/sitemap.xml', 'dist/sitemap.xml'],
  ['src/favicon.ico', 'dist/favicon.ico'],
  ['src/favicon.png', 'dist/favicon.png'],
  ['src/favicon.svg', 'dist/favicon.svg'],
  ['src/apple-touch-icon.png', 'dist/apple-touch-icon.png'],
  ['src/favicon-16.png', 'dist/favicon-16.png'],
  ['src/favicon-32.png', 'dist/favicon-32.png'],
  ['src/favicon-48.png', 'dist/favicon-48.png'],
  ['src/icon-192.png', 'dist/icon-192.png'],
  ['src/icon-512.png', 'dist/icon-512.png'],
  ['src/Assets/Images/Portrait/portrait-2.jpg', 'dist/portrait-2.jpg'],
  ['src/_headers', 'dist/_headers'],
  ['src/_redirects', 'dist/_redirects'],
];

for (const [from, to] of files) {
  const src = path.join(root, from);
  const dest = path.join(root, to);
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`copied ${from} -> ${to}`);
  }
}

function copyDirRecursive(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const s = path.join(srcDir, entry.name);
    const d = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

// 1. Copy built atelier app from src/atelier into dist/atelier
const srcAtelier = path.join(root, 'src', 'atelier');
const distAtelier = path.join(root, 'dist', 'atelier');
if (fs.existsSync(srcAtelier)) {
  copyDirRecursive(srcAtelier, distAtelier);
  console.log(`copied src/atelier -> dist/atelier`);
}

// 2. If local roys-atelier-studio sibling repo has an updated dist, sync it directly
const siblingAtelierDist = path.resolve(root, '..', 'roys-atelier-studio', 'dist');
if (fs.existsSync(siblingAtelierDist)) {
  copyDirRecursive(siblingAtelierDist, distAtelier);
  console.log(`synced ../roys-atelier-studio/dist -> dist/atelier`);
}
