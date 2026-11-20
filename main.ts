// gta6-clipper-01 — "She Did Time. He Waited. — GTA 6 Lucia & Jason"
// This program copies VIDEO.json (the published YouTube Shorts URL) from the
// repository directory into the output directory, where the gate reads it.
// Contract: VIDEO.json is copied byte-for-byte and never rewritten, so two
// runs of this program always produce identical output.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
