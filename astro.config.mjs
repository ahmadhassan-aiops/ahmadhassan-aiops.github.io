import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ahmadhassan-aiops.github.io',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
});
