import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://paradisesolution.github.io',
  base: 'codefounder',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
