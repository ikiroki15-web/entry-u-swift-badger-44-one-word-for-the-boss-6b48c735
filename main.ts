import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "Blackhole";

// Guard: exactly one word, 1-30 characters, no whitespace.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error("word must be a single word of 1-30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Read-back verification: what was written must be exactly the word.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== WORD) {
  throw new Error(`read-back mismatch: expected ${JSON.stringify(WORD)}, got ${JSON.stringify(written)}`);
}
