import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const src = path.join(root, "src");
const extensions = new Set([".ts", ".tsx", ".js", ".jsx", ".css"]);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const files = walk(src).filter((file) => extensions.has(path.extname(file)));
const source = files.map((file) => fs.readFileSync(file, "utf8")).join("\n");
const failures = [];
const warnings = [];

for (const forbidden of ["localhost:", "127.0.0.1", "debugger;", "console.log(", "console.debug("]) {
  if (source.includes(forbidden)) failures.push(`Production source contains forbidden marker: ${forbidden}`);
}

for (const required of [
  "src/app/sitemap.ts",
  "src/app/robots.ts",
  "src/app/manifest.ts",
  "public/opengraph-image.png",
  "src/app/not-found.tsx",
  "src/app/error.tsx",
  "public/favicon.ico",
  "public/images/brand/logo-header.png",
  "public/images/brand/logo-full.png",
  "public/images/brand/logo-mark.png",
  "public/icon-192.png",
  "public/icon-512.png",
  "public/apple-touch-icon.png",
  "public/.well-known/security.txt",
  "netlify.toml",
  "CHANGELOG.md",
  "PRODUCTION_CHECKLIST.md",
  "SECURITY.md",
  "SEO_STRATEGY.md",
  ".github/workflows/ci.yml",
  ".github/dependabot.yml",
]) {
  if (!fs.existsSync(path.join(root, required))) failures.push(`Missing required production file: ${required}`);
}

const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
if (!/^\d+\.\d+\.\d+$/.test(packageJson.version)) failures.push(`Package version must use semantic versioning, found ${packageJson.version}.`);
const packageLock = JSON.parse(fs.readFileSync(path.join(root, "package-lock.json"), "utf8"));
if (packageLock.version !== packageJson.version || packageLock.packages?.[""]?.version !== packageJson.version) {
  failures.push("package.json and package-lock.json versions are not aligned.");
}
for (const [name, value] of Object.entries({ ...packageJson.dependencies, ...packageJson.devDependencies })) {
  if (value === "latest" || value === "*") failures.push(`Dependency ${name} is not pinned to a reproducible version.`);
}

const changelogs = fs.readdirSync(root).filter((name) => /^CHANGELOG/i.test(name));
if (changelogs.length !== 1 || changelogs[0] !== "CHANGELOG.md") {
  failures.push(`Expected exactly one CHANGELOG.md; found: ${changelogs.join(", ") || "none"}.`);
}

const siteSource = fs.readFileSync(path.join(root, "src", "content", "site.ts"), "utf8");
if (!siteSource.includes('url: "https://www.smilesandgigglesfoundation.org"')) {
  failures.push("Canonical production URL is not set to https://www.smilesandgigglesfoundation.org.");
}

const nextConfig = fs.readFileSync(path.join(root, "next.config.ts"), "utf8");
for (const header of ["Content-Security-Policy", "Strict-Transport-Security", "X-Content-Type-Options", "Referrer-Policy", "Permissions-Policy"]) {
  if (!nextConfig.includes(header)) failures.push(`Missing production security header configuration: ${header}`);
}

const rootLayout = fs.readFileSync(path.join(root, "src", "app", "layout.tsx"), "utf8");
for (const marker of ["metadataBase", "openGraph", "twitter", "application/ld+json", "isIndexableProduction", "GOOGLE_SITE_VERIFICATION", "sameAs", "knowsAbout"]) {
  if (!rootLayout.includes(marker)) failures.push(`Root metadata/SEO configuration missing marker: ${marker}`);
}


if (/\bkeywords\s*:/.test(rootLayout)) {
  failures.push("Root metadata should not ship a meta-keywords field; search engines do not use it for ranking.");
}

for (const socialUrl of [
  "https://www.facebook.com/smilesandgigglesfoundation",
  "https://www.instagram.com/smilesandgigglesfoundation",
  "https://www.linkedin.com/company/smiles-giggles-foundation",
]) {
  if (!siteSource.includes(socialUrl)) failures.push(`Missing official social profile in site configuration: ${socialUrl}`);
}

const coreBreadcrumbPages = [
  "src/app/about/page.tsx",
  "src/app/our-work/page.tsx",
  "src/app/our-work/stem-education/page.tsx",
  "src/app/our-work/youth-ai-digital-skills/page.tsx",
  "src/app/our-work/preventive-health-awareness/page.tsx",
  "src/app/impact/page.tsx",
  "src/app/csr-partnerships/page.tsx",
  "src/app/get-involved/page.tsx",
  "src/app/governance/page.tsx",
  "src/app/donate/page.tsx",
  "src/app/contact/page.tsx",
];
for (const rel of coreBreadcrumbPages) {
  const text = fs.readFileSync(path.join(root, rel), "utf8");
  if (!text.includes("BreadcrumbJsonLd")) failures.push(`Missing breadcrumb structured data on core page: ${rel}`);
}

for (const match of source.matchAll(/target=["']_blank["'][^>]*>/g)) {
  if (!/rel=["'][^"']*(?:noreferrer|noopener)[^"']*["']/.test(match[0])) {
    failures.push(`External new-tab link missing rel protection: ${match[0].slice(0, 120)}`);
  }
}

const trackedEnvFiles = fs.readdirSync(root).filter((name) => /^\.env(?:\.|$)/.test(name) && name !== ".env.example");
if (trackedEnvFiles.length) failures.push(`Environment files must not ship in the release ZIP: ${trackedEnvFiles.join(", ")}`);

for (const secretPattern of [
  /RAZORPAY_KEY_SECRET\s*=\s*\S+/i,
  /RAZORPAY_KEY_ID\s*=\s*r[zp]_[A-Za-z0-9]+/i,
  /BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY/,
]) {
  if (secretPattern.test(source)) failures.push("Potential secret material detected in source files.");
}

if (source.includes('/images/placeholders/')) {
  warnings.push("Some published pages still reference assets under public/images/placeholders/. Confirm these visuals and all image/child-consent rights are approved before DNS cutover.");
}

if (failures.length) {
  console.error("Production preflight failed:");
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(`Production preflight passed (${files.length} source files).`);
for (const warning of warnings) console.warn(`Production note: ${warning}`);
