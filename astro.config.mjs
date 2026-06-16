import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  // Only apply adapter on Cloudflare builds
  adapter: process.env.CF_PAGES ? cloudflare({ mode: 'advanced' }) : undefined,
  integrations: [
    starlight({
      title: 'TodoProgramming',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/robaldwin9' }],
      customCss: ['./src/styles/home.css'],
      sidebar: [
        {
          label: 'Guides',
          items: [{ autogenerate: { directory: 'guides/' } }],
        },
        {
          label: 'About Me',
          items: [{ autogenerate: { directory: 'aboutme/' } }],
        },
      ],
    }),
  ],
});
