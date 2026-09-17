import fs from "node:fs";

const checks = [
  ["src/app/layout.tsx", 'width: "device-width"'],
  ["src/app/globals.css", "Version 1 responsive QA pass"],
  ["src/components/layout/Header.tsx", "100dvh"],
  ["src/components/layout/Header.tsx", "min-[1360px]:hidden"],
  ["src/components/layout/Footer.tsx", "xl:grid-cols-[1.55fr_repeat(4,1fr)]"],
  ["src/components/work/WorkGallery.tsx", "min-[480px]:grid-cols-2"],
  ["src/components/impact/ImpactPage.tsx", "min-[480px]:grid-cols-2"],
];

const failures = [];
for (const [file, needle] of checks) {
  const text = fs.readFileSync(file, "utf8");
  if (!text.includes(needle)) failures.push(`${file}: missing ${needle}`);
}

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
if (pkg.version !== "1.0.0") failures.push(`package.json: expected version 1.0.0, found ${pkg.version}`);

if (failures.length) {
  console.error("Responsive QA guard failed:\n" + failures.map((x) => `- ${x}`).join("\n"));
  process.exit(1);
}
console.log("Responsive QA guard passed.");
