// One-line AI excuse for breaking production.
// Writes exactly one excuse to $MAKEFUN_OUTPUT_DIR/entry.txt:
// deterministic, stdlib only, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "My confidence was 99.8%. My accuracy, as it turns out, was the other 0.2%.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
