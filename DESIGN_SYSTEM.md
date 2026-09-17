# Design System — Smiles & Giggles Foundation

The design system is intentionally warm, modern, credible and reusable. It uses the approved five-colour brand palette while keeping white and neutral greys for readability and institutional polish.

## Brand role

Primary audience on the website: CSR, institutional and foundation visitors, while still keeping children and their learning work at the visual centre.

## Approved core palette

- Navy — `#0D1B3D`
- Purple — `#6D3CC9`
- Pink — `#E83D8C`
- Teal — `#14B8A6`
- Orange — `#FF8A00`

These are the primary brand colours supplied for the website and are defined as CSS variables in `src/app/globals.css`.

## Colour roles

- **Navy** — primary text, footer, dark CSR sections, photo overlays and institutional grounding.
- **Purple** — primary CTA, links, key headings, statistics and the main interactive brand colour.
- **Pink** — editorial/story accents, emerging initiatives and selected decorative highlights.
- **Teal** — learning/action indicators, program badges, positive/supporting accents and soft surfaces.
- **Orange** — emphasis, hero underline, donation cues and small high-energy accents.

## Derived soft surfaces

The site also uses very light tints of the approved colours for backgrounds. These are not additional brand colours; they are accessibility-friendly tints of the core palette.

- Purple soft — `#F3EEFB`
- Pink soft — `#FDEBF4`
- Teal soft — `#E9FAF7`
- Orange soft — `#FFF2E3`
- Neutral soft — `#F7F8FB`

## Accessibility rule

Do not place small white text directly on pink, teal or orange. Purple and navy are the preferred solid backgrounds for white text. Pink, teal and orange should generally be used as accents, icons, borders, large decorative elements, or on very light surfaces.

## Visual hierarchy

- Hero: one dominant authentic image
- Section headings: strong but restrained
- Cards: rounded corners, thin neutral border, soft elevation on hover
- CTA hierarchy: Partner With Us = strongest; Donate = secondary
- Photos: authentic field activity over illustrations
- Effects: subtle reveal, restrained counters, limited hover zoom

## Reusable primitives

- `Container`
- `ButtonLink`
- `TextLink`
- `SectionHeading`
- `AnimatedStat`
- `MotionBootstrap`
- `SectionAtmosphere` — reusable low-opacity STEM/circuit/network/orbit background graphics

## Reusable cards

- `ProgramCard`
- `FocusAreaCard`
- `StoryCard`
- `SupportCard`
- `PartnerReasonCard`

## Shared layout

- `BrandLogo`
- `Header`
- `Footer`

## Section atmosphere

The homepage should not default to plain white section after plain white section. Use a restrained alternating surface system built from very light tints of the approved palette:

- Purple-led surface for flagship STEM
- Teal + pink surface for focus areas
- Purple/blue-neutral gallery surface
- Fine grid + circuit motif for the implementation model
- Warm orange + teal surface for impact outcomes
- Purple + teal institutional surface for government engagement
- Pink/purple editorial surface for stories

`SectionAtmosphere` is the reusable decorative layer. Its variants are:

- `circuits` — circuit traces and nodes for STEM/program/implementation sections
- `orbit` — atom/orbit geometry for learning and innovation
- `network` — connected nodes for impact, partnerships and community reach
- `spark` — minimal floating shapes for lighter sections

Decorative graphics should remain low-opacity and never compete with authentic photographs or copy.

## Motion

Motion is enhancement only. Background graphics may float/drift slowly, while section content keeps the existing one-time reveal behavior. `prefers-reduced-motion` is respected globally and disables decorative animation.

## Image philosophy

The website should not look like a stock-photo corporate site, but it should also not look like a children's coaching portal. Authentic classroom, project and exhibition photography creates the emotional layer; typography, spacing and layout create institutional credibility.

## 2026 visual refinement — visible colour, not hidden tint

Pink `#E83D8C`, Teal `#14B8A6` and Orange `#FF8A00` must be visibly recognizable on the homepage. Do not limit them to 5–8% opacity background glows.

Use them in controlled, high-visibility UI roles:

- solid accent rails on cards and image frames
- solid icon tiles with white icons
- section-heading signature bars
- impact-stat card accents
- program/topic chips
- implementation-step nodes
- gallery/story card rails
- donation and final-CTA accent bands
- small geometric shapes in the hero

Keep Navy as the credibility anchor and Purple as the primary interaction colour. Saturated Pink/Teal/Orange should usually occupy small-to-medium visual areas rather than whole text-heavy sections.

## New reusable UI patterns

- `BrandAccentBar` — three-colour Pink/Teal/Orange signature used under major headings and in hero accents.
- `MakerLoop` — reusable circular learning-journey visualization inspired by the idea of showing methodology visually rather than as plain cards. It uses the Foundation's existing Build / Test / Improve / Code / Create language.
- `SectionAtmosphere` — continues to provide circuit, orbit, network and spark graphics, but section surfaces are now stronger so the brand palette is visible without becoming loud.

## Interaction language

Use a small number of memorable interactions consistently:

- gentle image zoom on hover
- card lift + shadow
- animated process line
- floating maker-loop nodes
- subtle hero brand-shape drift
- one-time section reveal

Do not add a different animation style to every section. Freshness should come from composition, colour and hierarchy first; motion is secondary.

## Interior page system

The About and Governance routes establish the reusable interior-page language:

- `PageHero` for high-impact internal page introductions
- visible Pink / Teal / Orange signature accents
- editorial two-image storytelling layouts
- soft branded section atmospheres instead of repeated white backgrounds
- compact colour-coded trust/compliance cards
- reusable horizontal-to-stacked journey timeline
- dark Navy closing CTA for institutional credibility
- document cards for certificates, reports and policies

Future interior pages should assemble these patterns before inventing new one-off UI.
