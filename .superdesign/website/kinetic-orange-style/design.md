---
version: "ui2web-website-clone"
name: "Kinetic Orange Style | Superdesign Prompts"
description: "A brutalist, high-contrast three-color system (vibrant orange, black, white) with oversized sans-serif display typography, sharp geometric layouts, and rhythmic motion through marquees and rotating elements. Built for maximum visual impact and technical confidence."
colors:
  primary: "#707070"
  secondary: "#000000"
  background: "#FCFCFC"
  surface: "#FFFFFF"
  text-primary: "#000000"
  text-secondary: "#707070"
  border: "#000000"
typography:
  display-lg:
    fontFamily: "Inter Variable"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "1.25"
    letterSpacing: "-0.5px"
  body-md:
    fontFamily: "Inter Variable"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.43"
spacing:
  base: "8px"
  gap: "12px"
  card-padding: "16px"
  section-padding: "24px"
rounded:
  control: "8px"
  card: "8px"
  pill: "9999px"
components:
  card: { background: "#FFFFFF", radius: "8px" }
  button: { background: "#000000", radius: "9999px" }
---
# Kinetic Orange Style | Superdesign Prompts

**Source:** https://superdesign.dev/library/kinetic-orange-style

## Overview

A digital-first brutalist aesthetic that pairs vibrant orange (#FF4D00) with black and white to generate urgency and technical confidence. Heavy, oversized typography anchors the design; sharp-edged geometry and high contrast replace ornament. The system rejects subtlety—every color and weight choice is deliberate and visible from any distance. Motion (marquees, rotating elements, directional cues) reinforces kinetic energy.

## Composition

The hero spans full-width with dominant orange fill, containing a small dark navigation ring (pill-shaped) and an oversized display headline in black. Below, a circular animated scroll indicator breaks the horizontal rhythm. The overall layout favors asymmetric, off-edge composition over centered, balanced layouts—content and containers push against or beyond natural bounds to signal confidence and forward motion. Section divisions use hard black or orange lines rather than soft spacing alone.

## Colors

**Primary (#FF4D00, 45%+ of viewport):** Dominates the hero and major background blocks, creating immediate visual arrest. Its saturation and warmth anchor brand presence without secondary gradients.

**Secondary (#000000, 13–22% of viewport):** Applied to all typography (display and body), navigation controls, and functional dividers. The black-on-orange and black-on-white pairs achieve maximum legibility and visual separation—no softening through gray.

**Background (#FCFCFC, 22%+ when visible):** Off-white backdrop for secondary sections and UI sidebars, preventing pure white harshness while maintaining contrast against black text.

**Surface (#FFFFFF, 13%):** Card and modal surfaces; high contrast against both text-primary and border.

**Text roles (primary #000000, secondary #707070):** Primary dominates display and body copy. Secondary used only for metadata, captions, or disabled states—restrained, not blended.

**Border (#000000):** All dividers and control outlines are solid black, never gray, reinforcing the high-contrast palette. No subtle borders exist in this system.

The accent (orange) is rationed to primary CTAs, full-bleed sections, and key visual anchors—never scattered across UI chrome. This restraint ensures every orange instance commands attention.

## Typography

**Display:** Inter Variable at 20px/600 weight with -0.5px letter-spacing. Oversized, bold, and slightly compressed—the system's signature voice for headlines and hero text. The compact spacing amplifies presence.

**Body:** Inter Variable at 14px/400 weight with 1.43 line-height. Legible and neutral, positioning typography as functional rather than decorative. No serif or script faces; consistency reinforces technical personality.

## Layout

Full-width hero bleeds edge-to-edge; no padding constrains it. Navigation and supplementary UI sit in tightly-spaced rows (8–12px gaps). Cards and content bands stack vertically with 24px section-padding; horizontal rhythm is tighter (12px gap between adjacent elements). Max-width is unconstrained on desktop—the design owns the full canvas. Responsive stacking preserves the black/orange/white division; no multi-column grids soften the geometry.

## Components

**Cards:** White or light-gray surface (background or surface role), 8px corner radius, black border or no border. Padding set to 16px; interior text in black.

**Buttons & Controls:** Dark pill-shaped forms (9999px radius) with white text or icons inside, or orange backgrounds with black text for primary actions. Transitions on all: 0.2s cubic-bezier(0.4, 0, 0.2, 1) for color and background-color shifts.

**Navigation:** Horizontal dark pills on light or orange backdrops; internal spacing 8px; no dropdown shadows—direct, geometric styling.

## Motion

Marquees and rotating text elements spin or slide to reinforce kinetic energy. Scroll indicators animate (circular rotation or pulse) to signal navigation depth. Transitions use the standard easing (cubic-bezier(0.4, 0, 0.2, 1)) across 0.2–0.3s, never exceeding 0.3s to maintain snappy responsiveness. No ease-out delays; motion is immediate and brisk.

## Effects

Canvas overlays or gradient layers are absent; the design relies on solid fills and typography weight. Any atmospheric effect is a thin black dividing line or geometric shape, never diffuse or blurred. Shadows are optional and minimal—the high contrast does the visual work.

## Guardrails

- **Never soften the black or orange:** No transparency blends, no mid-tone grays overlaid onto the primary colors. Maintain sharp contrast edges.
- **Avoid rounded corners beyond 8px (except pills):** The system is geometric and angular; over-rounding dilutes the brutalist character.
- **Keep orange rationed to hero, CTAs, and accent roles:** Do not scatter it across navigation, borders, or secondary UI; restraint preserves impact.
- **No serif or decorative type:** All typography is Inter Variable; maintain the technical, no-nonsense voice.
- **Motion must remain under 0.3s:** Slow transitions weaken kinetic energy; brisk easing reinforces urgency and confidence.