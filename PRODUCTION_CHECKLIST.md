# Production Launch Checklist

This repository is configured as the **1.0.0 production release** for `https://www.smilesandgigglesfoundation.org`.

## Required before the public DNS cutover

- [ ] Confirm the final domain is controlled by the Foundation and that both apex and `www` DNS records point to Netlify as instructed by Netlify DNS/domain settings.
- [ ] Make `www.smilesandgigglesfoundation.org` the primary domain in Netlify. The repository redirects the apex hostname to `www`.
- [ ] Confirm Netlify provisions a valid HTTPS certificate before enabling the public redirect/cutover.
- [ ] Enable GitHub branch protection for `main` (require pull request + passing CI) and enable GitHub secret scanning/security alerts where available.
- [ ] Set `NEXT_PUBLIC_RAZORPAY_PAYMENT_BUTTON_ID` in Netlify **Production** environment variables if online donations should be live at launch.
- [ ] Keep Razorpay secret keys, webhook secrets, donor exports and private credentials out of GitHub and out of `NEXT_PUBLIC_*` variables.
- [ ] Verify both Netlify Forms (`contact` and `get-involved`) appear in the Netlify Forms dashboard after the first production deploy and submit one test entry through each form.
- [ ] Confirm form notification recipients/spam controls inside Netlify.
- [ ] Complete one small live Razorpay donation and verify checkout, payment confirmation, reconciliation and the applicable receipt/80G process end to end.
- [ ] Review every published reach figure, registration statement, school/program reference and legal page against current Foundation records.
- [ ] Obtain explicit approval for every public photograph/visual involving identifiable people, especially children, and confirm usage rights/consent. Replace any illustrative or temporary visual that should not appear as documentary field evidence.
- [ ] Confirm the approved Foundation logo renders crisply in the header, footer, browser/PWA icons and social preview on desktop and mobile.
- [ ] Open the Facebook, Instagram and LinkedIn links in the footer/contact page and confirm each official profile resolves correctly.
- [ ] Review the Privacy Policy, Terms of Use and Donation & Refund Policy with the Foundation's legal/compliance owner.

## Search and SEO after production is live

- [ ] Open `https://www.smilesandgigglesfoundation.org/robots.txt` and confirm crawling is allowed on the production deployment.
- [ ] Open `https://www.smilesandgigglesfoundation.org/sitemap.xml` and confirm all public routes use the canonical `www` hostname.
- [ ] Add the domain property to Google Search Console and submit `/sitemap.xml`. Prefer DNS verification; alternatively set the HTML-tag token as `GOOGLE_SITE_VERIFICATION` in the Netlify Production environment.
- [ ] Add Bing Webmaster Tools if desired.
- [ ] Test the homepage and key programme pages in Google's Rich Results Test / schema validator, including Organization and BreadcrumbList markup.
- [ ] Share a page in WhatsApp/LinkedIn and confirm the 1200×630 social preview renders correctly.
- [ ] Inspect/request indexing for Home, Our Work, STEM/Robotics/Coding, AI & Digital Skills, Preventive Health, Impact and CSR Partnerships.
- [ ] If the Foundation is eligible for a public-facing Google Business Profile, claim/verify it and keep name, address and phone consistent with the website.
- [ ] Record the first Search Console baseline (indexed pages, impressions, queries and Core Web Vitals) so SEO changes can be measured rather than guessed.
- [ ] If Search Console supplies a verification token, add it through Next.js metadata or DNS; do not commit account secrets.

## Quality and security gates

Run before every production merge:

```bash
npm ci
npm run verify
npm run build
```

CI repeats these checks for pull requests and pushes to `main`.

After deployment, verify:

- [ ] No browser console errors on Home, Our Work, Impact, CSR, Donate, Contact and Get Involved.
- [ ] Navigation, mobile menu, footer links, WhatsApp, email, maps and donation actions work.
- [ ] Contact and volunteer forms submit successfully and show the expected success state.
- [ ] Security headers are present on production responses, including CSP, HSTS, `nosniff` and referrer policy.
- [ ] Lighthouse/PageSpeed checks show no critical accessibility, SEO or performance failures on representative mobile and desktop pages.
- [ ] 404 and runtime error pages are usable.

## Ongoing operations

- Review Search Console monthly for indexing, query impressions/clicks, mobile usability and Core Web Vitals.
- Publish evidence-led field stories/case studies when real programme documentation and approved imagery are available.
- Build legitimate authority through links/citations from schools, CSR partners, institutions, sector organisations and credible media; do not buy backlinks.
- Review Dependabot pull requests and dependency advisories regularly.
- Keep Node.js and Next.js on supported security-patched releases.
- Re-run content/legal/registration checks whenever claims, programmes, policies or donation processes change.
- Keep authentic image consent records outside the public repository.
- Never commit `.env`, private data exports or deployment credentials.

## Responsive / device QA

Before DNS cutover, spot-check the production deployment at representative widths: 320, 360, 390, 430, 768, 820, 1024, 1280, 1366, 1440 and 1920 px. Also check 125% and 150% browser zoom. Verify the mobile menu, hero headings, galleries, donation cards/checkout, contact form, footer, floating actions and landscape orientation. The full desktop navigation intentionally appears only from 1360 px; narrower layouts use the compact menu rather than squeezing long labels.
