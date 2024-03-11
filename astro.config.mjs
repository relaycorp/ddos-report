import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import rehypeAstroRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'The DDoS Report',
    description: 'Everything app developers and operators need to know about Distributed Denial of Service (DDoS) attacks.',
    favicon: '/favicon.png',
    logo: {
      dark: './src/assets/icon-dark.png',
      light: './src/assets/icon-light.png',
    },
    social: {
      github: 'https://github.com/relaycorp/ddos-report'
    },
    editLink: {
      baseUrl: 'https://github.com/relaycorp/ddos-report/tree/main'
    },
    sidebar: [{
      label: 'Modus operandi',
      link: '/modus-operandi'
    }, {
      label: 'Mitigations by system',
      autogenerate: {
        directory: 'systems'
      },
      collapsed: true
    }, {
      label: 'All mitigations',
      autogenerate: {
        directory: 'mitigations'
      },
      collapsed: true
    }, {
      label: 'Open questions',
      link: '/open-questions'
    }, {
      label: 'About',
      link: '/about'
    }],
    head: [
    {
      tag: 'script',
      attrs: {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'FEHALQQK',
        defer: true
      }
    }],
    customCss: ['./src/tailwind.css'],
    components: {
      Footer: './src/components/Footer.astro'
    }
  }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  markdown: {
    rehypePlugins: [[rehypeAstroRelativeMarkdownLinks, {contentPath: "src/content/docs"}]],
  }
});
