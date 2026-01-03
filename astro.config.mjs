import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://aintandem.org',
  integrations: [react(), sitemap()],
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'en', 'zh-CN'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': currentDir,
      }
    }
  }
});
