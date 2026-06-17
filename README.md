# SR Graphics — Website v2.0

**Live site:** https://sr-graphics.vercel.app  
**Stack:** Vanilla HTML · CSS · JS · Vite · Deployed on Vercel

---

## What's in this repo

```
sr-graphics/
├── index.html          ← The entire site (HTML + CSS + JS, self-contained)
├── src/
│   ├── index.css       ← Reserved for future global overrides
│   └── main.js         ← Kept for Vite compatibility
├── vite.config.js
├── package.json
├── eslint.config.js
└── .gitignore
```

## Features (v2.0 upgrades)

- ✅ Floating WhatsApp button — pre-filled messages per service
- ✅ Bulk price calculator with live per-unit cost slider
- ✅ Filterable portfolio/gallery section
- ✅ LocalBusiness JSON-LD schema (Google local pack)
- ✅ Full Open Graph + SEO meta tags
- ✅ Scroll-triggered reveal animations + counter animations
- ✅ Contact form routes to WhatsApp with pre-filled enquiry
- ✅ Stats band (8+ years, 500+ clients, 2000+ projects)
- ✅ Mobile nav with overlay
- ✅ `prefers-reduced-motion` respected

## Running locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

Push to GitHub — Vercel auto-deploys on every commit.  
No build configuration needed (Vite detects `index.html` automatically).

## Adding real portfolio images

In `index.html`, find `.portfolio-thumb` divs and replace the emoji with:

```html
<img src="/assets/your-photo.jpg" alt="Project name" style="width:100%;height:100%;object-fit:cover;">
```

Place images in `/public/assets/` so Vite copies them to `dist/`.

## Contact

📞 +91 75848 96513  
✉️ srgraphics71@gmail.com  
📍 Bardhaman, West Bengal, India
