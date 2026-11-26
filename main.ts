import { mkdirSync, writeFileSync } from "node:fs";

// One fortune-cookie line for a software engineer, written to the entry file.
const fortune = "A mysterious stranger will enter your life today: you, six months ago, in the git blame.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune + "\n", "utf8");
