# Page Dependency Trees

## `/` — LAB8 homepage

- Entry: `src/main.jsx`
- Rendered page: `src/App.jsx`
- Real render branch: the unconditional `return <>…</>` in `App()` at lines 91–140; responsive behavior is CSS-driven.
- Dependencies:
  - `src/main.jsx`
    - `src/App.jsx`
      - `react` (`useState`)
      - `lucide-react` (`ArrowRight`, `Check`, `ChevronDown`, `Menu`, `X`)
      - `public/lab8-logo.svg`
      - `public/lab8-logo-light.svg`
      - `public/lab8-icon.svg`
    - `src/styles.css`
  - `index.html`
    - Google Fonts: Montserrat 500/600/700
    - Google Fonts: Poppins 400/500/600
    - `public/lab8-icon.svg`

### Visual section tree

- `Header`
  - `Brand`
  - desktop anchor navigation
  - WhatsApp CTA
  - mobile full-screen menu
- `main#top`
  - hero
    - typography and CTAs
    - `DigitalVisual`
  - services
  - process
  - portfolio
  - pricing/packages
  - FAQ accordion
  - final CTA
- footer
  - `Brand`
  - positioning line
  - `InstagramMark`

### Reproduction context candidate set

- `src/App.jsx` — full file (143 lines, below the ~900-line trim threshold)
- `src/styles.css` — full file (minified but below the threshold)
- `index.html` — full file
- `public/lab8-logo.svg` — current-state reproduction only
- `public/lab8-logo-light.svg` — current-state reproduction only
- `public/lab8-icon.svg` — current-state reproduction only
- `.superdesign/design-system.md`

For the redesign draft, do not reuse or auto-correct the three current logo SVGs. Use a temporary typographic `LAB8` wordmark and reserved placements for future official vectors.
