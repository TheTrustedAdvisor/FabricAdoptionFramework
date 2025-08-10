// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fabric Adoption Framework',
  tagline: 'Adoption Framework for Microsoft Fabric',
  favicon: 'img/favicon.ico',
  themes: ['@docusaurus/theme-mermaid'],
  markdown: { mermaid: true },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.fabric-adoption-framework.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Matthias Falland', // Usually your GitHub org/user name.
  projectName: 'FabricAdoptionFramework', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/TheTrustedAdvisor/FabricAdoptionFramework/edit/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-7MQRP6PGT1',
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Fabric Adoption Framework',
        logo: {
          alt: 'My Site Logo',
          src: 'img/fabric-adoption-framework.png',
        },
        items: [
          {
            href: 'https://www.the-trusted-advisor.com',
            label: 'The Trusted Advisor (Matthias Falland)',
            position: 'left',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Fabric Documentation',
            items: [
              {
                label: 'Microsoft Learn',
                to: 'https://learn.microsoft.com/en-us/fabric/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Reddit Fabric Community',
                href: 'https://www.reddit.com/r/MicrosoftFabric/',
              },
              {
                label: 'Fabric Community',
                href: 'https://community.fabric.microsoft.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'License',
                href: '/about/license',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/TheTrustedAdvisor/FabricAdoptionFramework/edit/main/docs/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Matthias Falland, The Trusted Advisor`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
