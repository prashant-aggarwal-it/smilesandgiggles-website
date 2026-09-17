# Codebase Audit

Audit completed after the readability, legal, Get Involved, Impact and CSR revisions.

## Fixes applied

- Removed stale internal links to unbuilt `/stories/*` and `/programs/*` routes.
- Routed homepage program links to the existing STEM Education pathway section and story/gallery links to the existing Impact field-evidence section.
- Added scroll offsets to all sticky work-page section anchors.
- Replaced stale "page in development" 404 copy with a proper Page Not Found experience.
- Replaced inactive social placeholders with the Foundation’s official Facebook, Instagram and LinkedIn profiles.
- Improved footer text size and contrast.
- Changed the missing-Razorpay configuration state to a visitor-friendly message; technical setup stays in `RAZORPAY_SETUP.md`.
- Added `aria-pressed` state to interactive Impact and CSR selectors.
- Improved classroom gallery modal behavior: Escape closes, body scroll is locked, close control receives focus, and focus returns to the opening thumbnail.
- Added canonical metadata support, metadata base, page-specific Open Graph/Twitter metadata, `sitemap.xml` and `robots.txt` generation.
- Removed duplicated Foundation wording from nested page title metadata.
- Added production response security headers in `next.config.ts`, including a Content Security Policy configured for the site and Razorpay flow.
- Added `npm run typecheck` and a dependency-free `npm run audit:site` check.

- Approved Foundation logo assets are now installed across the header, footer, browser/PWA icons, social preview and Organization structured data.
- Official Facebook, Instagram and LinkedIn URLs are configured site-wide.

## Checks completed in this environment

- TS/TSX syntax parse: passed.
- Local `@/` import resolution: passed.
- Static internal route references: passed.
- Hash/anchor target references: passed.
- Referenced `/images/...` assets: passed.

A real `npm install`, `npm run lint`, `npm run typecheck` and `npm run build` should still be run on the development machine because package installation is not completing within the audit environment timeout.

## Items that still require owner input before launch

- Replace placeholder program imagery with approved authentic Foundation photographs.
- Add the live Razorpay Donations Button ID after testing.
- Add approved public governance/report PDFs.
- Verify the configured Netlify Contact and Get Involved forms end to end after the first production deploy.
- Run final legal/CA review of website policies and public governance wording.
- Run mobile/desktop browser QA and Lighthouse after real photography is installed.
