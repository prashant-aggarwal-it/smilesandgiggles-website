# Codex Working Instructions — Smiles & Giggles Foundation

Work inside this Next.js codebase as a production website, not a disposable prototype.

## Technology decisions — preserve these

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Next/Image
- reusable components
- reusable typed content
- local content source now; Sanity later
- GitHub + Vercel target deployment

Do not convert the project back to a single HTML/CSS/JS page.

## Core architecture rule

Separate:

1. **content/data** — `src/content/`
2. **generic UI components** — `src/components/ui/`
3. **reusable cards** — `src/components/cards/`
4. **page sections** — `src/components/home/`
5. **routes/layouts** — `src/app/`
6. **content access/CMS boundary** — `src/lib/content.ts`

If content is repeated in multiple locations, create one source of truth rather than duplicating the string/value.

If a visual pattern appears more than once, prefer a reusable component with props rather than copied markup.

## Homepage design direction

The website should feel like a credible, modern Indian foundation suitable for CSR, institutional and foundation visitors.

Prioritize:

- authentic children-at-work photography
- editorial visual storytelling
- clean white space balanced with softly tinted brand-colour section surfaces
- approved palette only for brand accents: Navy #0D1B3D, Purple #6D3CC9, Pink #E83D8C, Teal #14B8A6, Orange #FF8A00; use derived light tints for surfaces
- clear evidence and implementation model
- strong partnership CTA hierarchy
- legible, accessible typography
- modern but restrained motion
- reusable low-opacity STEM background motifs through `SectionAtmosphere` (circuits, orbit geometry, networks, subtle dot fields)

Avoid:

- coaching-centre visual language
- cartoon robots everywhere
- loud gradients
- sliders
- autoplay video
- excessive glassmorphism
- decorative objects everywhere; use graphics selectively and at low opacity
- repeating counters
- invented claims
- fake program photographs

## Content integrity

Treat `src/content/home.ts` as the current source of truth.

Do not change factual claims unless the user supplies revised information.

In particular:

- Youth AI & Digital Skills is an emerging initiative; do not visually imply a large delivered program.
- Government/MCD logos must not be added unless explicitly supplied and usage is approved.
- Preserve governance indicators as supplied: NGO DARPAN, 12A, 80G, CSR-1.

## Image workflow

Replace placeholder files in `public/images/` with authentic NGO photographs. Prefer keeping filenames stable so content/component code does not need edits.

Use `next/image` and appropriate `sizes` values.

## Future Sanity migration

When asked to add Sanity:

1. create Sanity schemas matching the current TypeScript content model
2. keep UI components CMS-agnostic
3. move fetching into the content-access layer
4. preserve fallback/local content during migration if practical
5. add preview/visual editing only after normal production fetching works

## Before committing major changes

Check:

- component reuse
- content duplication
- responsiveness
- keyboard navigation
- focus styles
- prefers-reduced-motion
- image alt text
- broken links
- build/lint status


## Brand palette guardrail

Use the approved Smiles & Giggles Foundation palette consistently:
- Navy `#0D1B3D`
- Purple `#6D3CC9`
- Pink `#E83D8C`
- Teal `#14B8A6`
- Orange `#FF8A00`

Do not introduce a competing blue/green/purple brand palette. Neutral white/grey values are allowed for typography, borders and surfaces. Use the semantic Tailwind tokens from `globals.css` rather than scattering hardcoded colour values through components.

## UI refinement guardrail — important

The homepage must not feel predominantly white with only barely visible coloured glows. Pink `#E83D8C`, Teal `#14B8A6` and Orange `#FF8A00` are active brand colours and should be visibly present in the UI through solid accent rails, icon tiles, chips, section signatures, image-frame details and selected decorative geometry.

Use existing reusable patterns before inventing new ones:

- `BrandAccentBar`
- `MakerLoop`
- `SectionAtmosphere`
- existing reusable cards

When adding a new UI idea, ask whether it is a one-off storytelling composition or a reusable pattern. If it can appear on multiple pages, put it in `src/components/ui/` or `src/components/cards/` and make it content-driven.

External inspiration is for patterns only. Do not clone layouts, artwork, copy, proprietary illustrations or brand identity from reference websites. Reinterpret useful ideas through Smiles & Giggles Foundation's own palette, content and photography.

## About + governance architecture

The site now has real `/about` and `/governance` routes. Preserve these principles:

- About is a storytelling and credibility page, not a certificate dump.
- Governance & Transparency is the home for registrations, certificates, public reports and policies.
- Reuse `PageHero`, `ValueCard`, `JourneyTimeline`, `ComplianceCard` and `DocumentCard` where appropriate.
- Read organisation-wide contact and registration data from `src/content/site.ts`; never duplicate those values in page components.
- Do not invent registration/certificate numbers, leadership biographies, government endorsements or document links.
- Public documents must be reviewed/redacted before linking them from `src/content/governance.ts`.
- Keep Pink `#E83D8C`, Teal `#14B8A6` and Orange `#FF8A00` visibly present alongside the Navy/Purple institutional base.

## Razorpay donation integration
The current donation architecture intentionally uses Razorpay's hosted Donations / Payment Button embed through `RazorpayDonationButton.tsx`. Do not reintroduce custom Razorpay Orders API routes, Key Secret handling, or HMAC verification unless the user explicitly asks for advanced payment automation. Keep the button ID configurable through `NEXT_PUBLIC_RAZORPAY_PAYMENT_BUTTON_ID`.
## Our Work architecture

The project now includes a reusable Our Work system. Preserve these routes and content boundaries:
- `/our-work`
- `/our-work/stem-education`
- `/our-work/youth-ai-digital-skills`
- `/our-work/preventive-health-awareness`

Use `src/content/work.ts` as the local source of truth and `src/lib/content.ts` as the CMS boundary. Reuse components in `src/components/work/` before creating page-specific markup. Do not invent delivery figures or claim government endorsement. STEM factual claims should remain consistent with documented MCD/Vidyanjali work. AI/digital pages must not invent reach numbers. Poshan Abhiyaan details must remain conservative unless the user supplies documentation with dates, locations and results.


## Impact & CSR page rules
- Keep `/impact` evidence-led. Do not turn it into another program catalogue.
- Keep `/csr-partnerships` decision-led. Prioritize funding pathways, implementation, evidence and trust.
- Reuse `ImpactLens` and `PartnershipBuilder` before inventing near-duplicate interactive patterns.
- Do not invent impact percentages, beneficiary counts, partner names or CSR commitments.
- Preserve the visible Pink / Teal / Orange palette while Navy grounds institutional sections.
