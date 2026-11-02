import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: process.env.SITE || 'https://diabagent.net9.org',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  // Chinese pages sit at the root and English ones under /en/.
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  devToolbar: { enabled: false },
  integrations: [sitemap(), icon()],
  vite: { plugins: [tailwindcss()] },
});
