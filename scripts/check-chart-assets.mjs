import { readdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { validateChartDimensions } from '../src/lib/chart-dimensions.mjs';

function check(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) { check(path); continue; }
    if (!entry.name.endsWith('.png') || entry.name === 'token-logo.png') continue;
    const bytes = readFileSync(path);
    const meta = JSON.parse(readFileSync(`${path}.json`, 'utf8'));
    if (!bytes.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex')) ||
        bytes[25] !== 6 || createHash('sha256').update(bytes).digest('hex') !== meta.sha256) {
      throw new Error(`Stale chart sidecar or missing RGBA transparency: ${path}`);
    }
    validateChartDimensions(meta, bytes.readUInt32BE(16), bytes.readUInt32BE(20));
  }
}
check('src/assets/reports');
console.log('Report chart source dimensions, hashes and RGBA checked.');
