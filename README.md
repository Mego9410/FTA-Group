# FTA-Group

A single, aesthetic home page that pulls together every Frank Taylor &amp; Associates website and app, grouped logically so users land in one place and reach exactly what they need.

Built with the **Frank Taylor &amp; Associates Design System** — one warm gold (`#E4AD25`) against near-black ink on white, Hanken Grotesk type, sentence-case headings, generous rounded cards and quiet motion.

## What's inside

A static site (no build step). Just open `index.html` or serve the folder.

```
index.html              # the portal page
app.js                  # reveal-on-scroll + footer year
styles/
  colors_and_type.css   # design tokens (from the FTA design system)
  components.css         # buttons / badges / cards (from the FTA design system)
  portal.css             # portal-specific layout
assets/                 # logo, favicon, hero image, SVG icon set
```

## The groups

| # | Group | Destinations |
|---|-------|--------------|
| 01 | Practice sales | [Frank Taylor &amp; Associates](https://www.ft-associates.com/) |
| 02 | Finance &amp; wealth | [FTA Finance](https://www.ftafinance.co.uk/) · [FTA Wealth Management](https://fta-fwm.com/) |
| 03 | Membership clubs | [The Principals Club](https://www.the-principals-club.com/) · [The Associates Club](https://www.the-associates-club.com/) |
| 04 | Media &amp; learning | [FTA Media](https://www.fta.media/) · [FTA Diploma](https://fta-diploma.vercel.app/) |
| 05 | Tools &amp; apps | [Eventbound](https://eventbound.co.uk/) · [DDV](https://ddv-mu.vercel.app/) · [FTA Short Link](https://fta-short.link/) |

## Run locally

```bash
# any static server works, e.g.
python -m http.server 8080
# then open http://localhost:8080
```

## Notes

- App descriptions are written from the brand voice; tweak any copy in `index.html` if a product's positioning differs.
- Brand fonts are matched via Google Fonts (Hanken Grotesk + Lora). Swap in licensed files when available.
