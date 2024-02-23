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
          label: 'Vulnerable systems',
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
              label: 'Vulnerable systems',
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
          title: 'Relaycorp',
          items: [
            {
              label: 'Contact us',
              href: 'https://relaycorp.tech',
            },
            {
              label: 'Awala',
              href: 'https://awala.network',
            },
            {
              label: 'Letro',
              href: 'https://letro.app/en',
            },
            {
              label: 'VeraId',
              href: 'https://veraid.net',
            },
          ],
        },
      ],
      copyright: `Copyright © 2024 by <a href="https://relaycorp.tech">Relaycorp</a>. You may use the contents of this website as specified in the <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 licence</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
