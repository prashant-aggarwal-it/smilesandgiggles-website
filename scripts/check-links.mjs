import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const srcRoot = path.join(root, "src");
const publicDir = path.join(root, "public");
const sourceExts = new Set([".ts", ".tsx", ".js", ".jsx", ".css"]);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const sourceFiles = walk(srcRoot).filter((file) => sourceExts.has(path.extname(file)));
const appRoot = path.join(srcRoot, "app");
const pageFiles = walk(appRoot).filter((file) => file.endsWith(`${path.sep}page.tsx`));
const staticRoutes = new Set(["/"]);

for (const file of pageFiles) {
  let rel = path.relative(appRoot, path.dirname(file)).split(path.sep).join("/");
  if (!rel || rel === ".") rel = "";
  if (rel.includes("[")) continue;
  staticRoutes.add(`/${rel}`.replace(/\/$/, "") || "/");
}

function cleanInternalUrl(value) {
  if (!value.startsWith("/") || value.startsWith("//")) return null;
  if (value.includes("${")) return null;
  const [withoutHash] = value.split("#");
  const [pathname] = withoutHash.split("?");
  return pathname || "/";
}

const badRoutes = new Set();
const missingAssets = new Set();
const missingAnchors = new Set();
const allSource = sourceFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");
const knownIds = new Set([...allSource.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map((match) => match[1]));

for (const file of sourceFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const regex of [/\bhref\s*=\s*["']([^"']+)["']/g, /\bhref\s*:\s*["']([^"']+)["']/g]) {
    for (const match of text.matchAll(regex)) {
      const href = match[1];
      const route = cleanInternalUrl(href);
      if (route && !staticRoutes.has(route) && !path.extname(route)) {
        badRoutes.add(`${route} <- ${path.relative(root, file)}`);
      }
      if (href.startsWith("/") && href.includes("#")) {
        const anchor = href.split("#")[1];
        if (anchor && !knownIds.has(anchor)) missingAnchors.add(`${href} <- ${path.relative(root, file)}`);
      }
    }
  }

  for (const match of text.matchAll(/["'`](\/[^"'`?#\s)]+\.[A-Za-z0-9]{2,5})["'`]/g)) {
    const asset = match[1];
    if (asset.includes("${")) continue;
    const localPath = path.join(publicDir, asset.slice(1));
    if (!fs.existsSync(localPath)) missingAssets.add(`${asset} <- ${path.relative(root, file)}`);
  }
}

if (badRoutes.size || missingAssets.size || missingAnchors.size) {
  if (badRoutes.size) {
    console.error("Broken internal routes:");
    for (const item of [...badRoutes].sort()) console.error(`  ${item}`);
  }
  if (missingAssets.size) {
    console.error("Missing local assets:");
    for (const item of [...missingAssets].sort()) console.error(`  ${item}`);
  }
  if (missingAnchors.size) {
    console.error("Missing hash targets:");
    for (const item of [...missingAnchors].sort()) console.error(`  ${item}`);
  }
  process.exit(1);
}

console.log(`Internal link check passed (${staticRoutes.size} static routes, ${sourceFiles.length} source files).`);
