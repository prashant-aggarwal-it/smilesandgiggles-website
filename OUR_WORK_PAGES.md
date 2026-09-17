# Our Work Pages — Content & UI Architecture

New routes:
- `/our-work`
- `/our-work/stem-education`
- `/our-work/youth-ai-digital-skills`
- `/our-work/preventive-health-awareness`

## Reusable component system
The three pages deliberately share primitives rather than duplicating layout code:
- `WorkPageHero`
- `WorkSectionNav`
- `WorkStatStrip`
- `WorkFeatureGrid`
- `ProgramPathwayCard`
- `WorkCaseStudyCard`
- `WorkJourney`
- `WorkOutcomeGrid`
- `WorkGallery`
- `WorkPartnerCta`

Each page composes these components differently so the site stays coherent without every page feeling identical.

## Source-grounding notes
### STEM Education
Grounded in the Foundation's MCD work, Vidyanjali engagement, Nanhe Engineers / Yuva Innovators curriculum and the documented impact figures already used on the homepage.

### Youth AI & Digital Skills
Grounded in the Foundation's teacher upskilling material (digital tools, AI, robotics, mechanics, programming and 3D modelling) and the user's stated youth training work in Arduino/robotics. The copy avoids claiming delivery numbers not present in the source material.

### Preventive Health & Awareness
Grounded in oral-health and nutrition-awareness program material: preventive awareness, screening, child-wise health cards, parent communication, referral support, follow-up, consent/privacy and monitoring. Poshan Abhiyaan is included as a focus area based on the user's stated work, without inventing reach or delivery figures.

## Photography
The pages currently reuse existing placeholder images from `/public/images/`. Replace these progressively with authentic photographs from the matching program area. Do not use stock/AI-generated photographs to represent delivered NGO work.
