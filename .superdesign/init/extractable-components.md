# Extractable Components

## Layout components

### Header

- Source: `src/App.jsx`
- Category: layout
- Description: Sticky desktop header plus full-screen mobile navigation.
- Extractable props: `activeItem` (string, default `"top"`), `showMobileMenu` (boolean, default `false`), `ctaHref` (string, default `"#"`).
- Hardcoded: navigation labels, Lucide menu/close icons, CSS classes.

### Brand

- Source: `src/App.jsx`
- Category: layout
- Description: LAB8 logo link used in header and footer.
- Extractable props: `light` (boolean, default `false`), `homeHref` (string, default `"#top"`).
- Hardcoded: alt text and current SVG paths.
- Constraint: current SVG is eligible only for the faithful current-state reproduction. The redesign must use a temporary typographic wordmark.

### Footer

- Source: `src/App.jsx`
- Category: layout
- Description: Three-part footer with brand, positioning line, and Instagram link.
- Extractable props: `instagramHref` (string, default `"https://www.instagram.com/lab8.md/"`).
- Hardcoded: slogan, handle, Instagram icon.

## Basic components

### DigitalVisual

- Source: `src/App.jsx`
- Category: basic
- Description: CSS-built dashboard/phone/brand-card visual used in the existing hero.
- Extractable props: none.
- Hardcoded: all copy, visual metrics, CSS classes, existing icon.

### PrimaryButton

- Source: `src/App.jsx` + `src/styles.css`
- Category: basic
- Description: Anchor CTA with uppercase label and optional right arrow.
- Extractable props: `href` (string, default `"#"`).
- Hardcoded: arrow icon, CSS classes, label per placement.

### FAQAccordion

- Source: `src/App.jsx`
- Category: basic
- Description: Single-open accordion list.
- Extractable props: `activeItem` (string, default `"0"`).
- Hardcoded: four question/answer strings and chevron icon.
