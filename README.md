# SR Graphics — Website v3.0

**Live site:** https://sr-graphics.vercel.app  
**Stack:** Vanilla HTML · CSS · JS · Vite · Deployed on Vercel

---

## What's in this repo

```
sr-graphics/
├── index.html              ← Page markup, SEO meta, LocalBusiness JSON-LD
├── src/
│   ├── main.js             ← Entry point, wires up the modules
│   ├── styles/
│   │   ├── variables.css   ← Design tokens, light/dark themes
│   │   ├── base.css        ← Reset, container, focus styles
│   │   ├── layout.css      ← Page structure (nav, hero, sections, footer)
│   │   ├── components.css  ← Cards, gallery, lightbox, forms, buttons
│   │   └── main.css        ← Imports the four files above
│   └── js/
│       ├── theme.js        ← Light/dark toggle
│       ├── navigation.js   ← Sticky nav, mobile menu, active link
│       ├── animations.js   ← Reveal on scroll, counters
│       ├── portfolio.js    ← Gallery category filters
│       ├── lightbox.js     ← Full-screen image viewer
│       └── contact.js      ← Enquiry form → WhatsApp
├── public/
│   ├── favicon.svg
│   └── images/             ← Optimised site images (jpg + webp)
├── assets/source-photos/   ← Unedited originals, for re-cropping
├── vite.config.js
└── package.json
```

## Features

- Real photography throughout — hero, gallery, about, social share card
- Masonry gallery with category filters and a keyboard-navigable lightbox
- Four-step process section, stats band, trust bar, testimonials
- Top utility bar with phone, address, opening hours and rating
- Light/dark theme toggle (respects system preference, remembers the choice)
- LocalBusiness JSON-LD with address, hours, geo coordinates and images
- Open Graph + Twitter cards, favicon, responsive layout, mobile nav
- Contact form that hands the enquiry to WhatsApp with the details pre-filled
- `prefers-reduced-motion` respected

## Running locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

Push to GitHub — Vercel auto-deploys on every commit.
No build configuration needed (Vite detects `index.html` automatically).

## Swapping the photos

Site images live in `public/images/` as paired `.jpg` + `.webp`. Every `<picture>`
block references both, so replace them with the same filenames and the gallery,
hero and lightbox pick them up automatically.

Unedited originals are kept in `assets/source-photos/`.

## Contact

📞 +91 75848 96513  
✉️ srgraphics71@gmail.com  
📍 Kalibazar Road, Near Girls High School, Bardhaman – 713103
