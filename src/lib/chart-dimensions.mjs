export function validateChartDimensions(meta, width, height) {
  const dw = meta?.display_width, dh = meta?.display_height;
  if (meta?.pixel_width !== width || meta?.pixel_height !== height ||
      !(dw > 0 && dh > 0 && width / dw >= 3 && height / dh >= 3) ||
      Math.abs(width / dw - height / dh) >= .01) {
    throw new Error('Regenerate chart with matching aspect ratio and >=3x resolution');
  }
  return meta;
}
