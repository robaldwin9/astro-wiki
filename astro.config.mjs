// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TodoProgramming',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/robaldwin9' }],
			customCss: ['./src/styles/home.css'],
			sidebar: [

				{
					label: 'Guides',
					items: [
						{
							label: 'Linux',
							collapsed: false,
							items: [
								{
									label: 'Fedora',
									collapsed: false,

									items: [{ autogenerate: { directory: 'guides/linux/fedora' } }

									],
								},
								{
									label: 'Arch',
									collapsed: false,
									items: [{ autogenerate: { directory: 'guides/linux/arch' } }
									],
								},
							],
						},

					],
				},
				{
					label: 'About Me',
					items: [{ autogenerate: { directory: 'aboutme' } }

					],
				},
			],
		}),
	],
});