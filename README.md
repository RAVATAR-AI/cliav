# Cliav.com

Landing page for Cliav, hosted on GitHub Pages. Plain HTML/CSS/JS, no build step.

Design: [Figma — Desktop / 1920 Cliav F](https://www.figma.com/design/5Lj1KgHGXPhM7RRRyc7v6o/RAVATAR-webpage-design--Claude-?node-id=2148-1478)

## Structure

```
index.html            Landing page (all sections)
privacy/index.html    → cliav.com/privacy/
terms/index.html      → cliav.com/terms/
404.html              GitHub Pages not-found page
CNAME                 Custom domain (cliav.com)
.nojekyll             Serve files as-is, skip Jekyll
robots.txt, sitemap.xml
assets/
  css/tokens.css      Colors and spacing from Figma variables
  css/styles.css      Layout and section styles
  js/main.js          Mobile nav, FAQ
  img/logo/           Logo (SVG)
  img/icons/          Card and diagram icons (SVG)
  img/sections/       Section images — see README inside for slot list
  img/og/             Social share image (1200 × 630)
  favicon/            favicon.svg, apple-touch-icon.png
  fonts/              Self-hosted fonts (if not using Google Fonts)
```

## Deploy

1. Settings → Pages → Source: **Deploy from a branch**, `main` / `(root)`.
2. Custom domain: `cliav.com` (the CNAME file sets this). Tick **Enforce HTTPS** once the certificate is issued.
3. DNS at your registrar:
   - Apex `cliav.com`: A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: CNAME → `ravatar-ai.github.io`

Pages caches files for 10 minutes. The CSS and JS links in every HTML page end in `?v=YYYYMMDD`; change that number whenever `assets/css` or `assets/js` changes, so browsers never pair a new page with an old cached stylesheet.

## Run locally

```
python3 -m http.server 8000
```
Then open http://localhost:8000
