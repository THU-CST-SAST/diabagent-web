import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: process.env.SITE || 'https://thu-cst-sast.github.io',
  base: process.env.BASE_PATH || '/diabagent-web',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [sitemap(), icon()],
  vite: { plugins: [tailwindcss()] },
});
