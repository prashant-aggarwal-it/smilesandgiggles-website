# Changelog

All notable production changes are recorded here from the public launch baseline onward.

## 1.0.0 — Final production baseline
### About page refinement

- Simplified the About page into a shorter, easier-to-scan narrative with lighter surfaces and less navy-heavy typography.
- Reworked Vision and Mission into balanced light cards and merged overlapping learning/nation-building sections.
- Updated team roles for consistent public presentation: Dr. Ankit Singhal is now “STEM & Technical Advisor”; Sweety Gupta is “Creative Arts & Cultural Engagement Advisor”; Arvind Singhania is “Program Operations Coordinator”; Uma Verma is “Communications & Social Media Coordinator”.
- Fixed portrait-card alignment so credentialed and non-credentialed team members align cleanly on desktop without awkward mobile spacing.

### Final production QA hardening

- Completed the final source-level QA pass while keeping the release at `1.0.0`.
- Removed the internal legal-page draft-review note from public policy pages.
- Added visible post-submission confirmation states for Contact and Get Involved Netlify forms.
- Added an explicit button type to the global error-page retry action.
- Added `QA_REPORT.md` documenting passed checks and the deployment-only smoke tests still required.

### Final content and conversion refinements

- Rewrote the About page around why the Foundation exists, its vision and mission, hands-on problem-solving, future-ready youth skills, nation-building and responsible impact.
- Added a concise homepage Vision teaser linking to the full About-page vision.
- Added a structured Our Team section with approved portraits for Dr. Ankit Singhal and Sweety Gupta, plus Arvind Singhania and Uma Verma in programme/communications support.
- Updated the Donate-page hero to **Build Skills. Build Futures. Build the Nation.** and reinforced problem-solving, employability/self-employment readiness and capability-building language without guaranteeing jobs or income.
- Corrected the Paper Circuit Kit value proposition so it is described as consumable, hands-on and project-based rather than reusable.
- Removed Privacy Policy, Terms of Use and Donation & Refund Policy from the prominent Governance document-card grid; these remain available through footer legal links, with Donation & Refund Policy also linked directly beside the donation flow.
- Rebalanced the Governance document grid around NGO DARPAN, 12A, 80G and CSR-1 documentation.
- Kept the release version at `1.0.0`.

### Responsive QA and device support

- Added explicit device-width viewport metadata without disabling pinch-to-zoom.
- Hardened the site against accidental horizontal overflow on narrow screens.
- Improved header/logo spacing for 320–430 px phones and switched the mobile-menu height calculation to dynamic viewport units.
- Delayed dense 5/6-column layouts until wider breakpoints so tablet and small-laptop layouts remain readable.
- Made Impact and programme galleries single-column on very narrow phones before transitioning to the bento/grid layouts.
- Moved the footer's five-column and four-column information layouts to the `xl` breakpoint to prevent crowding around 1024 px.
- Replaced tiny footer social text marks with larger vector LinkedIn, Instagram and Facebook icons.
- Improved long-email wrapping and keyboard focus visibility.
- Kept the release version at `1.0.0`.


- Reset the repository release to version `1.0.0` for the public production launch.
- Installed the approved Smiles & Giggles Foundation logo system across the navigation header, footer, browser/PWA icons, Organization structured data and social-sharing image.
- Preserved the approved tagline: **Spreading Smiles. Fuelling Ambitions.**
- Added official Facebook, Instagram and LinkedIn profiles to site-wide contact/social surfaces and Organization `sameAs` structured data.
- Finalized broad organic-search positioning around STEM, robotics, coding, AI literacy, digital literacy, future skills, teacher enablement, government-school education, CSR partnerships and preventive health.
- Added page-specific titles/descriptions, canonical URLs, Open Graph/Twitter metadata, sitemap, robots handling, web manifest, Organization/NGO + WebSite JSON-LD and BreadcrumbList structured data.
- Added optional Google Search Console verification support through `GOOGLE_SITE_VERIFICATION`.
- Added production security headers, Content Security Policy, HSTS, permissions policy and canonical-host redirect configuration.
- Added non-indexing controls for non-production Netlify contexts.
- Added GitHub CI, Dependabot, Node runtime pinning, security disclosure files and production preflight checks.
- Strengthened contact and Get Involved form validation/privacy notices and retained safe Razorpay configuration handling.
- Consolidated historical development notes into this single production changelog.
- Hardened homepage client effects so animated statistics cancel pending animation frames/observer callbacks during unmounts and development remounts.
- Added a narrow hydration-warning suppression on the root `<body>` for browser-extension attributes such as ColorZilla's `cz-shortcut-listen`, without suppressing hydration warnings throughout the application tree.
- Updated the desktop/mobile header to use the complete approved logo lockup including the tagline **Spreading Smiles. Fuelling Ambitions.**; compact logo assets remain available only for genuinely constrained contexts.
- Increased footer Facebook, Instagram and LinkedIn icon size and button balance for clearer legibility.
- Added `npm run dev:clean` to clear stale `.next` chunks before restarting local development when needed.
- Rebuilt the Donate page around concrete, easy-to-understand sponsorship options: Paper Circuit Kit (₹1,200), Robotics Car Kit (₹3,500), Arduino Innovator Kit (₹4,000), AI Literacy Workshop for youth (₹5,000), and reusable Mechanics Learning Kit (₹7,500).
- Added explicit reusable/multi-student value messaging, school and youth capability pathways, a 7-day STEM Educator sponsorship enquiry, flexible smaller contributions, and tighter transparency language without promising employment or income outcomes.

Future production releases should be added above this entry using semantic versioning.

