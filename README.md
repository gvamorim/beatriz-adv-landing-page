# BVC Advocacia Consultiva — Landing Page

Institutional landing page for Beatriz Vieira Costa (OAB/MG 241.090), founder
of BVC Advocacia Consultiva, focused on preventive HR legal counsel, NR-1,
employment compliance, training, and corporate talks.

**All user-facing site copy is in Brazilian Portuguese (pt-BR).** This README
is in English for developers and contributors.

Static site built with **Astro** and **Tailwind CSS**, deployed automatically
to GitHub Pages on every push to `main`.

## Tech stack

- **[Astro](https://astro.build)** — static site generator (latest)
- **[Tailwind CSS](https://tailwindcss.com)** — utility-first styling (latest)
- **CSS + Intersection Observer** — scroll animations without extra libraries

## Project structure

```text
src/
  components/          Nav, Hero, Founder, Services, Approach, Banner, NR1,
                       Palestras, ServicesDetail, MainCTA, Footer, Icon, Reveal
  layouts/             BaseLayout.astro
  pages/               index.astro (single page with anchor sections)
  scripts/             reveal.ts (IntersectionObserver + mobile menu)
  styles/              global.css (design tokens, buttons, cards, animations)
  lib/                 links.ts (WhatsApp, LinkedIn, Instagram, nav anchors)
public/                highlight.png, lecture.png, course.png, favicon.svg
.github/workflows/   deploy.yml (GitHub Pages deployment)
```

Quick-jump anchors (same order as scroll): `#inicio`, `#fundadora`, `#servicos`,
`#nr1`, `#palestras`, `#contato`.

## Prerequisites

- Node.js (latest LTS recommended — tested on Node 20)
- npm (or yarn/pnpm)

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open **[http://localhost:4321/](http://localhost:4321/)**
(or the URL/port Astro prints in the terminal). File changes hot-reload.

## Production build

```bash
npm run build     # outputs to dist/
npm run preview   # serves dist/ locally for a production-like check
```

## Deploy (GitHub Pages)

Deployment is automated: on every push to `main`, the **Deploy to GitHub Pages**
workflow (`.github/workflows/deploy.yml`) runs on GitHub’s runners — installs
dependencies, runs `npm run build`, and publishes `dist/` to GitHub Pages.

To enable it:

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. In `astro.config.mjs`, set `site` to your public URL (e.g.
   `https://www.bvcadvocacia.com.br` for the custom domain) and `base` to `/`.
   For the default `https://<user>.github.io/<repo>/` URL only, use that as
   `site` and `base: '/<repo-name>/'` so assets resolve correctly.

## Page sections (Portuguese UI)

### Home (`#inicio`)

Hero with preventive legal positioning, signed quote, and key stats.

### About the founder (`#fundadora`)

Institutional photo (`public/highlight.png`), OAB MG 241.090, bio, and areas of
expertise: preventive employment law, criminal law, and forensic graphology.

### Services (`#servicos`)

Grid of six service areas with deep-link cards to detailed blocks below.

### NR-1 (`#nr1`)

NR-1 compliance (psychosocial risks, PGRS), implementation checklist, and CTA.

### Talks (`#palestras`)

Image gallery (`public/lecture.png`, `public/course.png`), format cards, topic
list, and WhatsApp CTA.

### Contact (`#contato`)

Final CTA and footer with social links:

- WhatsApp: +55 (31) 98480-5500
- LinkedIn: <https://www.linkedin.com/in/beatrizvieiracosta/>
- Instagram: <https://www.instagram.com/beatrizvc.adv>

## Design notes (site is pt-BR)

- Boutique law firm aesthetic.
- Warm palette (beige, brown, caramel).
- Rounded corners on cards and buttons (no harsh squares).
- Elegant buttons and letter spacing.
- Fade/scroll animations via Intersection Observer.
- No emojis — icons are inline SVGs.
