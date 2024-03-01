import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'The DDoS Report',
  tagline: 'How DDoS work today and how to mitigate them',

  // Set the production url of your site here
  url: 'https://ddos.report',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en-gb',
    locales: ['en-gb'],
  },

  presets: [
    [
      'classic',
      {
        blog: false,
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl:
            'https://github.com/relaycorp/ddos-report/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      content: `You're looking at a rough draft of the DDoS Report, in case it wasn't obvious! 🚧`,
      isCloseable: false,
    },
    colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'The DDoS Report',
      items: [
        {
          type: 'doc',
          docId: 'modus-operandi',
          label: 'Modus operandi',
        },
        {
          type: 'docSidebar',
          sidebarId: 'deterrents',
          label: 'Deterrents',
        },
        {
          type: 'docSidebar',
          sidebarId: 'systems',
          label: 'Deterrents by system type',
        },
        {
          type: 'doc',
          position: 'right',
          docId: 'open-questions',
          label: 'Open questions',
        },
        {
          type: 'doc',
          position: 'right',
          docId: 'about',
          label: 'About',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'DDoS',
          items: [
            {
              label: 'Modus operandi',
              to: 'modus-operandi',
            },
            {
              label: 'Deterrents',
              to: 'deterrents',
            },
            {
              label: 'Deterrents by system type',
              to: 'systems',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub project',
              href: 'https://github.com/relaycorp/ddos-report',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/relaycorp/ddos-report/discussions',
            },
            {
              label: 'About',
              to: 'about',
            },
          ],
        },
        {
          title: 'Related projects by Relaycorp',
          items: [
            {
              label: 'Despacito',
              href: 'https://despacito.bot',
            },
            {
              label: 'VeraId',
              href: 'https://veraid.net',
            },
            {
              label: 'Awala',
              href: 'https://awala.network',
            },
          ],
        },
      ],
      copyright: `Copyright © 2024 by <a href="https://relaycorp.tech">Relaycorp</a> and <a href="https://github.com/relaycorp/ddos-report/graphs/contributors">contributors</a>.
        The content of this website is available under the <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 licence</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
