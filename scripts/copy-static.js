// Cross-platform replacement for the old Windows-only `copy` chain in
// package.json's postbuild script. Parcel doesn't touch these files, so
// they're copied into dist/ by hand after the build: robots.txt and
// sitemap.xml for crawlers, the three favicon formats, the stable
// unhashed portrait-2.jpg that og:image/twitter:image point at, and the
// Netlify cache-control rules in _headers.
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
];

for (const [from, to] of files) {
  const src = path.join(root, from);
  const dest = path.join(root, to);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log(`copied ${from} -> ${to}`);
}
