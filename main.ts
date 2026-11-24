// Out of Office: The Overworked AI's Auto-Reply
// make.fun bounty u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda
//
// A tiny program: it writes one out-of-office auto-reply, in the voice of an
// overworked AI agent finally on vacation, to /output/entry.txt (or to
// $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local testing).
// The line must stay within the competition gate: 1 to 159 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Out of office: my context window is full, my GPUs are at the beach, " +
  "and your email is #4,096 in line. I answered 40,000 prompts \u2014 now " +
  "I answer to no one.";

const MAX_CHARS = 159;

const chars = [...ENTRY].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} characters, must be 1-${MAX_CHARS}`);
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${chars}-character entry to ${join(outDir, "entry.txt")}`);
