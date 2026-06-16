import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Cloudflare adapter only during Cloudflare builds
const adapter = process.env.CF_PAGES
  ? (await import('@astrojs/cloudflare')).default({ mode: 'advanced' })
  : undefined;

export default defineConfig({
  output: 'static',
  adapter,
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
