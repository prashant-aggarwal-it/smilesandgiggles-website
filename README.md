# Smiles & Giggles Foundation Website

Production website for **Smiles & Giggles Foundation**.

**Release:** 1.0.0  
**Canonical URL:** https://www.smilesandgigglesfoundation.org

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS / PostCSS
- Netlify hosting and Netlify Forms
- Razorpay hosted payment button for donations

## Local development

Requirements: Node.js 22 and npm.

```bash
nvm use
npm ci
cp .env.example .env.local
npm run dev

# If Next.js dev chunks become stale after code changes
npm run dev:clean
```

The site runs locally at `http://localhost:3000`.

## Environment variables

```bash
NEXT_PUBLIC_RAZORPAY_PAYMENT_BUTTON_ID=
GOOGLE_SITE_VERIFICATION=
```

Only the public Razorpay **payment button ID** belongs in the `NEXT_PUBLIC_*` variable. `GOOGLE_SITE_VERIFICATION` is the optional Google Search Console HTML-tag token and is emitted only when configured in the hosting environment. Do not put Razorpay secret keys, webhook secrets, donor information or other private credentials in GitHub.

If the Razorpay variable is not configured, the Donate page displays a safe contact fallback instead of a broken checkout.

## Validation

```bash
npm run verify
npm run build
```

`npm run verify` runs ESLint, TypeScript, static route/image checks, internal-link checks and the production preflight.

GitHub Actions runs the verification and production build on pull requests and pushes to `main`.

## Deployment

The repository is prepared for deployment through Netlify from GitHub.

1. Push the repository to GitHub.
2. Import the repository into Netlify.
3. Use the repository `netlify.toml` settings.
4. Configure production environment variables in Netlify.
5. Set `www.smilesandgigglesfoundation.org` as the primary custom domain.
6. Follow `PRODUCTION_CHECKLIST.md` before DNS cutover.

Netlify deploy previews are configured through the app metadata/robots logic to remain non-indexable, while the production context is indexable.

## Content structure

- `src/app/` — routes, metadata routes and global layout
- `src/components/` — page and UI components
- `src/content/` — typed site copy/data
- `src/lib/` — content/metadata helpers
- `public/images/` — website visuals
- `scripts/` — production checks

Contact details and the canonical site URL are centralized in `src/content/site.ts`.

## Brand assets

The approved Smiles & Giggles Foundation identity is implemented from `public/images/brand/`:

- `logo-header.png` — compact official lock-up for the navigation header
- `logo-full.png` — full official lock-up including the tagline for the footer
- `logo-mark.png` — standalone symbol used for structured data and derived browser/app icons
- `public/opengraph-image.png` — branded 1200×630 social-sharing image

The browser favicon, Apple touch icon and PWA icons are derived from the approved symbol.

## Forms

The Contact and Get Involved forms use Netlify Forms and include honeypot fields. After the first production deployment, verify that both form definitions are detected in the Netlify dashboard and test real submissions.

## SEO and production controls

The project includes:

- canonical metadata per page
- Open Graph and Twitter metadata
- 1200×630 social card using the approved logo
- `robots.txt` and XML sitemap
- Organization/NGO and WebSite JSON-LD, including official social `sameAs` profiles
- BreadcrumbList JSON-LD on interior pages
- Google Search Console verification support through `GOOGLE_SITE_VERIFICATION`
- topic-focused page titles/descriptions covering STEM, robotics, coding, AI literacy, digital skills, CSR and preventive health
- web manifest and app/browser icons
- non-indexing for Netlify preview contexts
- canonical apex → `www` redirect
- production security headers and Content Security Policy
- `/.well-known/security.txt`

## Release history

See `CHANGELOG.md`.

## Launch checklist

See `PRODUCTION_CHECKLIST.md`. It includes deployment, Razorpay, Netlify Forms, SEO, legal/content verification, image consent/usage approval and post-launch checks. See `SEO_STRATEGY.md` for the search-topic map and ongoing organic-search plan.
