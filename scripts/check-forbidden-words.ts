import { glob } from "glob";
import fs from "node:fs/promises";

// Per PRD §2.3 — forbidden words list. Build fails on any match.
const FORBIDDEN: string[] = [
  "disrupt",
  "disruptor",
  "disruptive",
  "cutting-edge",
  "world-class",
  "best-in-class",
  "leading",
  "leverage",
  "revolutionise",
  "revolutionize",
  "transform",
  "change the game",
  "synergy",
  "solutions",
  "unique",
  "unprecedented",
  "never-before-seen",
  "going forward",
  "at the end of the day",
  "in today's environment",
  "eco-friendly",
  "planet-positive",
];

async function main() {
  const files = await glob("{app,components,lib}/**/*.{ts,tsx,mdx}", {
    ignore: ["components/ui/**"], // generated shadcn/ui files — not copy
  });
  let violations = 0;

  for (const file of files) {
    const content = (await fs.readFile(file, "utf8")).toLowerCase();
    for (const word of FORBIDDEN) {
      if (content.includes(word.toLowerCase())) {
        console.error(`✗ Forbidden word "${word}" found in ${file}`);
        violations++;
      }
    }
  }

  if (violations === 0) {
    console.log(`✓ Forbidden-words check passed (${files.length} files scanned).`);
  }

  process.exit(violations > 0 ? 1 : 0);
}

main();
