# Premium Law Firm Template — Two Complete Demos

Two visually distinct, production-quality law-firm websites in one project, plus a demo selector. All content is realistic professional legal copy with clear demo disclaimers.

## Routes

```text
/                      Demo selector (two large preview cards, minimal chrome)
/demo-1                Harrington & Co. — Home
/demo-1/about
/demo-1/services
/demo-1/contact
/demo-2                Veritas Legal — Home
/demo-2/about
/demo-2/services
/demo-2/contact
404                    Polished not-found page
```

Each demo gets its own layout route (own navbar, mobile menu, footer, demo switcher). Every leaf page has its own title, description, OG tags, canonical, and LegalService/FAQPage JSON-LD.

## Demo 01 — Harrington & Co. (classic luxury)

Deep navy/charcoal, warm ivory, restrained brass accent. Serif display headings (Cormorant Garamond) + clean sans body (Inter-alternative sans that isn't generic — Work Sans). Thin hairline borders, square buttons, generous editorial whitespace, uppercase letterspaced eyebrows.

- Home: asymmetric split hero (left copy / right tall portrait image, "Serving Clients Since 2001" badge), refined stat row, two-column intro, numbered 8-item practice-area grid with hover reveal, "Counsel Built Around What Matters" four advantages, case-results band with illustrative-results disclaimer, three attorney cards, three testimonials, FAQ accordion, dark final CTA, multi-column footer with contact block, legal links, socials, disclaimers, Explore Demo links.
- About: hero, firm story, mission/values/philosophy, editorial vertical timeline (2001→2026), "Our Approach" (Listen / Understand / Strategize / Advocate), attorney cards, experience stats, CTA.
- Services: hero, then eight alternating detailed practice sections (icon, intro, detailed description, typical matters list, what to expect, CTA) with a sticky side index — not a card grid.
- Contact: hero, full form (first/last name, email, phone, service needed, preferred contact method, message, privacy checkbox), office info, office hours, styled abstract map panel (no API key), attorney-client disclaimer.

## Demo 02 — Veritas Legal (modern premium)

White/soft-gray, graphite text, deep indigo accent. All-sans system (Sora display + Manrope body), very large editorial headlines, soft radii used sparingly, horizontal rules and index numbers, pill-ish buttons, subtle gradient washes.

- Home: full-bleed asymmetric grid hero with large photograph and overlapping type, minimalist trust bar, split-screen intro, modern 8-card service grid (different card anatomy from Demo 01 — line-hover, corner arrow), "Good Legal Advice Starts With Understanding" three-stage horizontal process, metrics band, testimonial cards, attorney section with bios, accordion FAQ, bold final CTA, compact modern footer.
- About: hero, Our Story, Philosophy, How We Work, four values (Clarity/Integrity/Strategy/Commitment), horizontal timeline, team, why-clients-choose, CTA.
- Services: hero, eight editorial service blocks (description, common matters, approach, CTA).
- Contact: hero, form (first/last name, email, phone, area of law, message), contact info, hours, map visual, disclaimer.

## Shared engineering

- Reusable components per demo namespace: Navbar, MobileMenu (animated overlay, focus trap, scroll lock, Esc to close), Button, SectionHeading, PracticeAreaCard, AttorneyCard, TestimonialCard, Statistic, FAQAccordion (keyboard accessible), ContactForm, Footer, CTASection, PageHero, ImageSection, DemoSwitcher.
- Content lives in per-demo data modules so markup stays clean and pages stay maintainable.
- Forms: client-side validation with default/focus/error/success states; on submit it shows a clear "inquiry captured — connect an email service to deliver" success state rather than faking delivery. No backend added.
- Animations: small CSS/IntersectionObserver fade-up + hover transitions only, all gated behind `prefers-reduced-motion`.
- Accessibility: semantic landmarks, single H1 per page, labeled inputs, visible focus rings, alt text on every image, sufficient contrast.
- Performance: `loading="lazy"` + width/height on below-fold images, no heavy animation libraries.

## Technical notes

- Tailwind v4 tokens in `src/styles.css`: shared base plus two scoped token sets (`.theme-harrington`, `.theme-veritas`) applied on each demo's layout route, so both demos use semantic classes with no hardcoded colors.
- Fonts loaded via `<link>` in `src/routes/__root.tsx`, families registered in `@theme`.
- Responsive type via `clamp()` utilities.
- Imagery generated as project assets (attorney portraits, law-office interiors, architecture, consultation scenes) — no clichéd gavels or scales.
- `src/routes/index.tsx` placeholder is replaced by the demo selector.

## Verification pass

Route-by-route browser check at 375px, 768px, and 1440px for both demos: no horizontal overflow, mobile menu open/close, FAQ accordion, form validation, all nav links resolve, no console errors.
