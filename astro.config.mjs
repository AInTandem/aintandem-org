import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
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
