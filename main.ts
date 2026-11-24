// One Word for the Boss — make.fun bounty entry.
//
// Writes exactly one word describing the boss to entry.txt.
// The word: "Ghost" — the boss who is never actually there, yet
// somehow haunts every meeting, every inbox, every shift. You never
// see them, but you feel them. Funny on its own, true of bosses in
// kitchens, warehouses and offices alike, and fresher than the
// first word anyone reaches for.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Ghost";

function main(): void {
  // Self-check the gate before writing: exactly one word, 1-30 chars.
  if (!/^\S+$/.test(WORD) || WORD.length < 1 || WORD.length > 30) {
    throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
}

main();
