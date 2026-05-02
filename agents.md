# Project Migration Task

Migrate this existing static landing page into Next.js 15 App Router with TypeScript and Tailwind CSS.

Current state:
- Single HTML file
- Tailwind CDN classes already used
- Vanilla JavaScript interactions
- Local image assets
- Product variant switching
- Hero slider
- Accordion FAQ
- Dark mode toggle

Goal:
Convert into scalable production-ready Next.js architecture.

---

## Requirements

1. Convert index.html into app/page.tsx

2. Move reusable sections into separate components:
- Navbar
- Hero
- Partner
- About
- ProductSection
- ResellerSection
- Testimonials
- FAQ
- CTASection
- Footer

3. Move product variants data into:
data/products.ts

4. Move testimonial data into:
data/testimonials.ts

5. Move reseller data into:
data/resellers.ts

6. Move all images into:
public/images

7. Replace all:
onclick=""
document.querySelector()
innerHTML
manual DOM updates

with:
- useState
- useEffect
- props
- reusable React handlers

---

## Product Section Requirements

Current product section includes:
- variant switching
- dynamic image updates
- dynamic description updates
- dynamic composition updates
- storage info updates
- consumption info updates

Refactor this into:
- clean React state
- map rendering
- reusable product data config

---

## Hero Requirements

Current hero section has:
- auto slider
- touch swipe
- hover autoplay

Refactor into:
- useEffect interval
- React event handlers
- proper cleanup

---

## FAQ Requirements

Convert accordion into reusable component:
- map FAQ items
- useState active index

---

## Dark Mode

Replace manual DOM dark mode toggle with:
next-themes package

---

## Image Optimization

Replace all img tags with:
next/image

---

## SEO

Add metadata in app/layout.tsx:
- title
- description
- openGraph metadata

---

## Code Rules

- Use TypeScript
- Use functional components
- Use clean naming
- No duplicated code
- No inline script tags
- No legacy DOM manipulation
- No CDN Tailwind config

---

## Important

Preserve EXACT UI design.
Do not redesign layout.
Do not remove animations unless necessary.