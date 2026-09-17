# Our Impact & CSR Partnerships — Page Architecture

## Our Impact (`/impact`)
Designed as an evidence-led experience rather than another program page.

Flow:
1. Dark editorial impact hero
2. Four proof metrics
3. Impact chain: Access → Participate → Build → Improve → Explain → Continue
4. Interactive Impact Lens: Students / Teachers / Schools / Partners
5. Field evidence stories: MCD / Vidyanjali / Student showcases
6. Practical measurement board: Baseline → Track → Observe → Demonstrate → Report
7. Scale-the-impact CTA

Reusable components:
- `ImpactLens.tsx`
- `ImpactPage.tsx`

## CSR Partnerships (`/csr-partnerships`)
Designed as a decision and partnership-planning experience.

Flow:
1. Institutional CSR hero
2. Interactive Partnership Builder
3. Three partnership scales
4. Five-phase implementation roadmap
5. Partner Evidence Pack
6. Partner assurance & governance
7. Partnership value
8. Design-a-program CTA

Reusable components:
- `PartnershipBuilder.tsx`
- `CsrPage.tsx`

## Content architecture
- `src/content/impact.ts`
- `src/content/csr.ts`
- exposed through `src/lib/content.ts`

This keeps both pages ready for a later Sanity migration without changing their page components.
