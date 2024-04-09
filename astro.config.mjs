import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import rehypeAstroRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'The DDoS Report',
      description:
        'The complete guide to Distributed Denial of Service (DDoS) attacks for developers and operators.',
      favicon: '/favicon.png',
      logo: {
        dark: './src/assets/icon-dark.png',
        light: './src/assets/icon-light.png',
      },
      social: {
        github: 'https://github.com/relaycorp/ddos-report',
        twitter: 'https://twitter.com/ddos_report',
      },
      editLink: {
        baseUrl: 'https://github.com/relaycorp/ddos-report/tree/main',
      },
      sidebar: [
        {
          label: 'How DDoS Attacks Work',
          link: '/overview',
        },
        {
          label: 'Mitigate DDoS Attacks',
          link: '/mitigation',
        },
        {
          label: 'Mitigation tactics',
          autogenerate: {
            directory: 'tactics',
          },
          collapsed: true,
        },
        {
          label: 'About',
          link: '/about',
        },
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://cdn.usefathom.com/script.js',
            'data-site': 'FEHALQQK',
            defer: true,
          },
        },
      ],
      customCss: ['./src/tailwind.css', './src/custom.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  markdown: {
    rehypePlugins: [[rehypeAstroRelativeMarkdownLinks, { contentPath: 'src/content/docs' }]],
  },
});
