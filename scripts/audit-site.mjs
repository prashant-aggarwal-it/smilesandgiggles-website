import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceRoot = path.join(root, "src");
const publicRoot = path.join(root, "public");

function walk(dir, predicate = () => true) {
  const output = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) output.push(...walk(full, predicate));
    else if (predicate(full)) output.push(full);
  }
  return output;
}

const routes = new Set(["/"]);
for (const file of walk(path.join(sourceRoot, "app"), (file) => file.endsWith("page.tsx"))) {
  const relative = path.relative(path.join(sourceRoot, "app"), path.dirname(file)).replaceAll(path.sep, "/");
  routes.add(relative === "" ? "/" : `/${relative}`);
}

const codeFiles = walk(sourceRoot, (file) => /\.(ts|tsx)$/.test(file));
const missingRoutes = new Set();
const missingImages = new Set();

for (const file of codeFiles) {
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(/href\s*[:=]\s*["']([^"']+)["']/g)) {
    const href = match[1];
    if (!href.startsWith("/")) continue;
    const route = href.split("#")[0].split("?")[0] || "/";
    if (!routes.has(route)) missingRoutes.add(`${path.relative(root, file)} -> ${href}`);
  }
  for (const match of source.matchAll(/["'](\/images\/[^"']+)["']/g)) {
    const image = match[1];
    if (!fs.existsSync(path.join(publicRoot, image.slice(1)))) missingImages.add(`${path.relative(root, file)} -> ${image}`);
  }
}

if (missingRoutes.size || missingImages.size) {
  if (missingRoutes.size) {
    console.error("Missing internal routes:");
    for (const item of missingRoutes) console.error(`  ${item}`);
  }
  if (missingImages.size) {
    console.error("Missing image assets:");
    for (const item of missingImages) console.error(`  ${item}`);
  }
  process.exit(1);
}

console.log(`Site audit passed: ${routes.size} routes, ${codeFiles.length} TS/TSX files, no missing static internal routes or image assets.`);
