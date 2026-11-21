import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The program: the repository holds the day's news image (image.png); write it to the output the judge reads.
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
copyFileSync(new URL('./image.png', import.meta.url), join(out, 'entry.png'));
