// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://moshahid23.github.io/PMM-Solutions',
  base: '/PMM-Solutions/',
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