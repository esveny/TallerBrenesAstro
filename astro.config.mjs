import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://www.tallerindustrialbrenes.com',
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