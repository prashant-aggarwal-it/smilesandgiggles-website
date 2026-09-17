# Cross-Site Refinement — Robotronix™ → Smiles & Giggles Foundation

Baseline compared:

- Robotronix™: `robotronix-website-v1.0.0-production-ready.zip`
- Foundation: latest audited Smiles & Giggles Foundation codebase

## UX/design patterns adopted

1. **Proof-led hero** — three concise delivery-strength chips under the primary CTAs.
2. **Impact-area discovery rail** — a compact homepage rail inspired by Robotronix's ecosystem navigation, rewritten for nonprofit pathways: STEM, Youth AI & Digital Skills, Preventive Health, CSR Partnerships and Get Involved.
3. **Evidence-first media treatment** — subtle `Field story` and `On-ground work` tags on relevant media cards.
4. **More predictable navigation** — route changes now close mobile navigation and scroll/reset reliably, including hash destinations.
5. **Explicit social/share metadata** — default Open Graph and Twitter imagery added.

## Production engineering adopted

- Webpack-based Next.js dev/build scripts, matching the proven Robotronix Windows/Netlify workflow.
- Next.js 16.3.3 alignment.
- Netlify production configuration with Node 22.
- GitHub quality workflow.
- Separate route/asset/hash-target check.
- Production preflight check.
- Error boundary page.
- Web app manifest.
- Stronger response security headers.
- `verify` and `netlify:build` scripts.

## Intentionally excluded

- pricing and admissions mechanics
- program finder / grade recommendation
- parent sales testimonials
- commercial urgency or lead-generation language
- Robotronix branding and business imagery
- WhatsApp-first commercial enquiry flow
- demo-booking conversion patterns

The Foundation remains a community-impact/NGO website with its own visual identity, governance, donation, volunteer and CSR pathways.
