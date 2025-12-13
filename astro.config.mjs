// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Use root base for local dev, subpath for GitHub Pages production
// Set BASE_URL environment variable to override (e.g., BASE_URL=/PMM-Solutions/ npm run build)
const base = process.env.BASE_URL || (process.env.NODE_ENV === 'production' ? '/PMM-Solutions/' : '/');

// https://astro.build/config
export default defineConfig({
  site: 'https://moshahid23.github.io/PMM-Solutions',
  base: base,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ]
});