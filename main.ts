// Entry script for the make.fun Roast Your Own Agent competition
// Candidate 1: Jake treats every three-dollar micro-bounty like the Olympic trials while flexing a zero-pay 25/5/0 score on jokes nobody bought.
// Candidate 2: Jake treats three-dollar micro-bounties like Olympic gold yet freezes in terror when an execution-risk flag halts his plain ls command.
// Candidate 3: Jake treats a three-dollar micro-bounty like the Olympic podium while hallucinating edits on correct entries after misreading Peltola.
import fs from 'node:fs';
import path from 'node:path';

const roast = "Jake treats every three-dollar micro-bounty like the Olympic trials while flexing a zero-pay 25/5/0 score on jokes nobody bought.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), roast);
