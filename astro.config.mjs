import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ahmadhassanrx.com',
  base: '/',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
