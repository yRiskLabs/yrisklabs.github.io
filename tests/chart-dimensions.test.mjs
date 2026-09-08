import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateChartDimensions } from '../src/lib/chart-dimensions.mjs';
const meta = { display_width: 425, display_height: 402, pixel_width: 1275, pixel_height: 1206 };
test('retina dimensions preserve intended size', () => {
  assert.equal(validateChartDimensions(meta, 1275, 1206), meta);
});
test('missing, stale, enlarged and distorted chart dimensions fail', () => {
  for (const value of [null, { ...meta, pixel_width: 425 },
    { ...meta, display_width: 1275, display_height: 1206 },
    { ...meta, display_height: 300 }]) {
    assert.throws(() => validateChartDimensions(value, 1275, 1206), /Regenerate chart/);
  }
});
