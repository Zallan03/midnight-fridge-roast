// Midnight Fridge Roast — make.fun program/v1 entry.
//
// This program writes one line to /output/entry.txt: a smart fridge
// roasting its owner for raiding it at 2 a.m. Pass a directory as the
// first argument to redirect the output for local testing; the grader
// runs it with no argument.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line, in the fridge's own voice. It has locked the door,
// switched the light on, and settled in to judge — and the judgement
// lands through a detail, not a lecture: the kale, bought with good
// intentions and left to wilt, is now the witness for the
// prosecution. The fridge does not shout; it stands there in silence
// and lets the uneaten vegetables do the roasting.
const ENTRY =
  "It is 2 a.m. I locked the door, turned on the light, and I am just going to stand here judging you in silence like the kale you never ate.";

// The sealed gate accepts UTF-8 text of 1 to 200 characters.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

const n = [...ENTRY].length;
if (n < MIN_CHARS || n > MAX_CHARS) {
  throw new Error(
    `entry is ${n} characters, gate needs ${MIN_CHARS}-${MAX_CHARS}`,
  );
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

const outputDir = process.argv[2] ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${n} characters to ${join(outputDir, "entry.txt")}`);
