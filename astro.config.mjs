import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightAutoSidebar from 'starlight-auto-sidebar';

export default defineConfig({
  integrations: [
    starlight({
      title: 'TodoProgramming',
      plugins: [starlightAutoSidebar()],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/robaldwin9' }],
      customCss: [
        './src/styles/TerminalTheme.css',
        './src/styles/padding.css',
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [{ autogenerate: { directory: 'guides' } }],
        },
        {
          label: 'About Me',
          items: [{ autogenerate: { directory: 'aboutme' } }],
        },
      ],
    }),
  ],
});