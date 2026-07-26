# Kinetic Orange Style

## Business Context
- **Type/Industry:** AI-powered design platform / design system library
- **What they do:** Provide pre-built design systems and prompts for interface creation
- **Target audience:** Designers, creative agencies, startups building products
- **Page goal:** Display a design system prompt with copyable assets and live preview

# Page Layout & Structure

### Header / Navigation
Back button (left) + device preview toggles (Mobile / Tablet / Desktop, right-aligned). No sticky behavior. Navigation is sparse, accent-free.

### Hero
Left column (white background, ~40% width): H1 "Kinetic Orange Style" with tight letter-spacing, positioned top-left. Below: gray paragraph describing the brutalist aesthetic (3–4 sentences). Author attribution: circular avatar + "Shirley Lou" + "Prompt" label. Visual hierarchy tight, text-heavy, no decorative elements. Right column (orange background, ~60% width): large black sans-serif "SUPER DESIGN" headline (2 lines, oversized, negative letter-spacing), occupying center-right. Black navigation bar (rounded pill) top-right with "WORK / SERVICES / ABOUT / CONTACT". Scroll indicator (circular black badge with down arrow) center-bottom of orange section. Minor text fragments ("ED IN DIGITAL VOID", "AI PRODUCT DE" / "SIING") bleed off edges. Orange (#FF4D00) and black only; white type on orange. Asymmetric: text-dense left, image-dense right. Primary interaction: "Use prompt" button (near-black background, white text, rounded pill) sits in left column below author.

### Primary CTA / Input
Two buttons in left column below author attribution: "Use prompt" (near-black fill, white text, pill shape, left-aligned) + "Copy full prompt" (text + icon, gray text). Secondary button "Summary" below expands a gray text block describing the three-color system.

### Style Expandable Section
- **Purpose:** Show design tokens and aesthetic rules
- **Layout:** Expandable h3 "Style" + right-aligned "Copy style" button (text + icon, gray). Collapsed state shows chevron-down icon.

### Layout Expandable Section
- **Purpose:** Display 5 layout sections available in the system
- **Layout:** Expandable h3 "Layout (5 sections)" + right-aligned "Copy layout" button. Collapsed state shows chevron-down.

### Components Expandable Section
- **Purpose:** List 2 pre-built components
- **Layout:** Expandable h3 "Components (2)" with count badge. Collapsed state shows chevron-down.

### Special Notes Expandable Section
- **Purpose:** Provide edge-case guidance or warnings
- **Layout:** Expandable h3 "Special Notes". Collapsed state shows chevron-down.

### Footer Tags
Three gray tags: "landing page", "style", "page". Positioned bottom-left of left column. No background.

### Preview Iframe
Right column, full-height: embedded preview of the design system on the selected device. Dark gray border separates sections. Background remains orange where content doesn't fill.

**Notable patterns:** Two-column asymmetric layout (text left, preview right). Expandable sections use chevron-down icons (gray) and sit on white background. All copy buttons are text + icon, gray text. Author avatar is 1.00:1 square. Orange (#FF4D00) reserved for preview background and accent; near-black for buttons and type; gray for secondary text and interactive labels. Rounded corners on buttons (pill shape). No motion; honors prefers-reduced-motion.