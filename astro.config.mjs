import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ahmadhassan-aiops.github.io',
  base: '/',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
