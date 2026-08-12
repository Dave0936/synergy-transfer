# Synergy Group Fitness — Landing Page

## Original Problem Statement
Create a high-end, award-worthy (Awwwards SOTD level) landing page for a premium fitness/performance gym. Cinematic, editorial, bold, athletic, sophisticated. Oversized typography, asymmetric compositions, full-bleed photography, grain/texture, large stats, generous spacing, parallax, kinetic masked hero reveal, slow editorial marquee, numbered manifesto chapters, framer-motion + lenis.

## User Choices
- Brand name: **Synergy Group Fitness**
- Sections: full experience (hero, programs, coaches, facilities, pricing, testimonials, contact/join CTA)
- Integrations: none — pure frontend landing page
- Palette: charcoal (#121212/#1A1A1A), bone (#F4F4F0), electric blue (#4C63F5)

## Architecture
- Pure frontend (React 19 + CRA/craco). No backend endpoints used; backend server.py untouched.
- Fonts: Oswald (display), Manrope (body), JetBrains Mono (accent) via Google Fonts @import in index.css
- Motion: framer-motion (already installed) + lenis 1.3.26 (installed via yarn) for smooth momentum scrolling with anchor-scroll interception in App.js
- Design source: /app/design_guidelines.json
- Components in /app/frontend/src/components/landing/: Nav, Hero, Marquee, Manifesto, Programs, Coaches, Facilities, Pricing, Testimonials, CTA, Footer

## User Personas
- Ambitious gym-goer evaluating premium group fitness memberships
- Returning visitor looking for class programs, coaches, and pricing

## Implemented (2026-08-12)
- Kinetic hero: masked line-by-line Oswald reveal ("Stronger / Together. / Every Rep."), parallax background image, glassmorphic sticky nav, scroll indicator
- Slow editorial marquee (55s, outline + solid alternating type, CSS keyframes)
- Manifesto: 3 numbered chapters (01 Show Up / 02 Do The Work / 03 Become More), asymmetric grid, outline-blue numerals
- Programs: 4 discipline rows (Forge/Pulse/Ride/Flow) with 1px bone grid borders and hover states
- Coaches: 3 editorial portraits in tall 3:4 frames, grayscale-to-color hover, staggered offset middle card
- Facilities: dual-image parallax gallery + stat band (12,000 sq ft / 24-7 / 120+ classes / 03 recovery suites)
- Membership pricing: 3 tiers with visible grid lines, featured Performance tier in electric blue ($89/$149/$229)
- Testimonials: 3 large typographic quotes, alternating alignment
- Join CTA: full-bleed electric blue section, oversized watermark type, email capture form with inline success state (frontend-only, MOCKED — no email actually sent)
- Footer: locations, social links, giant outline wordmark
- Global grain overlay (SVG noise, mix-blend-overlay), blue selection color, reduced-motion support
- data-testid attributes on all interactive elements
- index.html title/meta updated to Synergy branding

## Verification
- Screenshots confirmed: hero, manifesto, coaches, facilities, pricing, CTA all render correctly at 1920x800
- Join form tested end-to-end via Playwright: success message appears
- No console errors (only a benign emergent-main.js warning)

## Backlog / Next Tasks
- P0: Wire join form to backend (save leads to MongoDB) or Resend email notification
- P1: Class schedule/timetable section with real weekly grid
- P1: Mobile navigation menu (hamburger) — currently links hidden on small screens
- P2: Per-program detail overlays/pages with coach + schedule info
- P2: Custom cursor and magnetic button micro-interactions
- P2: Preloader intro animation counting to 100

## Credentials
None — no auth in this app. /app/memory/test_credentials.md intentionally empty.
