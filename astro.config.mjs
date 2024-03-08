import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'The DDoS Report',
			description: 'Everything app developers and operators need to know about Distributed Denial of Service (DDoS) attacks.',
			favicon: '/favicon.png',
			logo: {
				src: './src/assets/logo.png',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/relaycorp/ddos-report',
			},
			head: [
				// Example: add Fathom analytics script tag.
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.usefathom.com/script.js',
						'data-site': 'FEHALQQK',
						defer: true,
					},
				},
			],
			sidebar: [
				{ label: 'Modus operandi', link: '/modus-operandi' },
				{
					label: 'Mitigations',
					autogenerate: { directory: 'mitigations' },
					collapsed: true,
				},
				{
					label: 'Mitigations by system',
					autogenerate: { directory: 'systems' },
					collapsed: true,
				},
				{ label: 'Open questions', link: '/open-questions' },
				{ label: 'About', link: '/about' },
			],
		}),
	],
});
