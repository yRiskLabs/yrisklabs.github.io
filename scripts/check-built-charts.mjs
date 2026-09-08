import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { validateChartDimensions } from '../src/lib/chart-dimensions.mjs';

let count = 0;
function check(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) { check(path); continue; }
    if (!entry.name.endsWith('.html')) continue;
    for (const [tag] of readFileSync(path, 'utf8').matchAll(/<img\b[^>]*>/g)) {
      const attrs = Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]));
      if (!/\.(png|webp|avif|jpe?g)$/.test(attrs.src ?? '') || attrs.src.includes('token-logo.')) continue;
      if (!attrs.src.endsWith('.png')) throw new Error(`Chart must use lossless PNG: ${path}`);
      if (attrs['data-chart'] !== 'true') throw new Error(`Chart bypassed sizing service: ${path}`);
      const png = readFileSync(join('dist', attrs.src));
      const width = png.readUInt32BE(16), height = png.readUInt32BE(20);
      validateChartDimensions({ display_width: Number(attrs.width), display_height: Number(attrs.height),
        pixel_width: width, pixel_height: height }, width, height);
      if (png[25] !== 6) throw new Error(`Chart lost RGBA transparency: ${path}`);
      count++;
    }
  }
}
check('dist/reports');
console.log(`${count} built report charts retain >=3x resolution and explicit display dimensions.`);
