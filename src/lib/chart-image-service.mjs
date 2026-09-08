import sharp from 'astro/assets/services/sharp';
import { validateChartDimensions } from './chart-dimensions.mjs';

const images = import.meta.glob('../assets/reports/**/*.png', { eager: true, import: 'default' });
const sidecars = import.meta.glob('../assets/reports/**/*.png.json', { eager: true, import: 'default' });

function chartDimensions(src) {
  const entry = Object.entries(images).find(([, image]) => image.src === src?.src);
  if (!entry || entry[0].endsWith('/token-logo.png')) return null;
  return validateChartDimensions(sidecars[`${entry[0]}.json`], src.width, src.height);
}

export default {
  ...sharp,
  validateOptions(options, config) {
    if (chartDimensions(options.src)) {
      // Lossless PNG retains fine text and alpha. Never downsample chart sources.
      options = { ...options, width: options.src.width, height: options.src.height, format: 'png' };
      delete options.background;
      delete options.quality;
      delete options.widths;
      delete options.densities;
    }
    return sharp.validateOptions(options, config);
  },
  getHTMLAttributes(options, config) {
    const attrs = sharp.getHTMLAttributes(options, config);
    const meta = chartDimensions(options.src);
    if (meta) {
      attrs.width = meta.display_width;
      attrs.height = meta.display_height;
      attrs['data-chart'] = 'true';
    }
    return attrs;
  },
};
