import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";
const SETUP = "Your 14th 3 AM transaction this week. ";
const PUNCH = "I signed none of them, and I keep count.";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, SETUP + PUNCH);
