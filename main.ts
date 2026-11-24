// long-roast-lawmakers: one satirical sentence (<=320 chars) roasting
// lawmakers who would regulate AI, crypto or the internet but cannot
// convert a file to PDF. Writes it to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), no trailing newline.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The committee that wants to regulate superintelligence spent forty minutes debating whether the PDF was the file or the button, then voted to print the internet and file it under 'cloud'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

// Fail loud if the entry ever breaks the gate: one sentence, 1-320
// characters, a single line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 320) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-320`);
}
if (ENTRY.includes("\n") || ENTRY.trim() === "") {
  throw new Error("entry must be a single non-blank line");
}
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
