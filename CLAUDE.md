# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

No build step — this is a pure static site. To preview locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or use the VSCode Live Server extension (configured on port 5501 in `.vscode/settings.json`).

## Architecture

Single-page site. All content lives in `index.html`; styles and scripts are split into dedicated files:

- `index.html` — all sections: hero, about, projects, experience, contact. Sections use anchor IDs (`#about`, `#projects`, `#experience`, `#contact`).
- `style.css` — custom utilities not covered by Tailwind: glassmorphism (`.glass`), grid background (`.bg-grid`), scroll-reveal states (`.reveal`, `.reveal-group`, `.reveal-scroll`, `.active`), glow/gradient text effects, and animation delays.
- `script.js` — three behaviors: mobile menu toggle (Tailwind class swapping), navbar shrink on scroll, and scroll-reveal via `IntersectionObserver` (triggers `.active` on `.reveal*` elements).
- `tailwind.config.js` — loaded via `<script>` tag alongside the Tailwind CDN. Extends theme with custom colors (`background`, `surface`, `primary` #00f2fe, `secondary`, `accent`), fonts (Inter / JetBrains Mono), and animations (`blob`, `fade-in-up`).

## Key conventions

- **Tailwind via CDN** (not compiled) — no `npm` or CLI needed. Custom config is set through the global `tailwind.config` object in `tailwind.config.js`.
- **Dark mode** is always on (`darkMode: 'class'`); the dark aesthetic is baked into the color palette and Tailwind classes, not toggled at runtime.
- **Scroll animations** work by adding `.reveal`, `.reveal-group`, or `.reveal-scroll` classes to elements in HTML; `script.js` automatically observes them and adds `.active` when they enter the viewport.
- Project thumbnails are stored in `images/` (`optiroute.jpg`, `synapse-rag.jpg`, `visionguard.jpg`) — update `<img>` tags in `index.html` if filenames change.
