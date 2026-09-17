# Planned Sanity CMS Migration

Sanity is intentionally **not installed yet**. The local typed-content phase allows the information architecture and visual system to stabilise first.

## Phase A — current

`src/content/home.ts`, `about.ts`, `governance.ts`, `work.ts`
↓
`src/lib/content.ts`
↓
React components

## Phase B — Sanity

Sanity Studio / Content Lake
↓
typed GROQ queries
↓
`src/lib/content.ts`
↓
same React components

## Recommended schemas

### siteSettings
- organisation name
- tagline
- contact details
- social links
- footer text

### program
- title
- slug
- grade range
- description
- topics
- hero image
- gallery
- CTA

### impactStat
- value
- label
- ordering

### focusArea
- name
- status/badge
- description
- image
- landing page


### workArea
- title and slug
- hero / positioning copy
- quick navigation
- focus/capability cards
- pathways or audience tracks
- case studies / field evidence
- process / learning journey
- outcomes
- gallery
- partnership CTA

### programPathway
- work area
- label / age or grade range
- title
- description
- topics
- outcome
- image

### fieldStory
- title
- slug
- excerpt
- body
- images
- school/context
- date
- related program

### caseStudy
- partner/context
- challenge
- implementation
- outcomes
- evidence
- media

### csrOpportunity
- title
- description
- support model
- CTA

### report
- title
- year
- document
- cover image

### teamMember
- name
- role
- bio
- photo

## Migration rule

Do not let Sanity-specific query shapes leak into presentation components. Map CMS results into the same content contracts used by the current components.

## Impact & CSR content models to add later

When the CMS phase begins, also model:

- `impactPage`
  - impact statistics
  - impact-chain stages
  - audience impact lenses
  - field evidence stories
  - measurement steps
- `csrPartnershipPage`
  - support modules
  - partnership scales
  - implementation phases
  - evidence-pack items
  - partner assurance and compliance indicators

The current components already consume structured content objects, so the local content access layer can later be replaced by Sanity queries.


## Get Involved content model to add later

- `getInvolvedPage`
  - hero / pathway copy
  - involvement pathways
  - volunteer roles
  - skill-match items
  - support areas
  - employee-volunteering copy
  - safeguarding note

Keep form field definitions, validation and submission behaviour in code unless a dedicated form platform is intentionally introduced.
