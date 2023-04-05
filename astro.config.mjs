import { defineConfig } from 'astro/config';
import unocss from '@unocss/astro';
import { presetWind } from '@unocss/preset-wind';

export default defineConfig({
  integrations: [
    unocss({
      presets: [
        presetWind(),
      ],
      safelist: [
        
      ],
    }),
  ]
});