import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tallerindustrialbrenes.com',
  integrations: [
    tailwind({
      config: { applyBaseStyles: false }
    }),
    sitemap()
  ],
  vite: {
    ssr: {
      external: ['@supabase/supabase-js']
    }
  }
});