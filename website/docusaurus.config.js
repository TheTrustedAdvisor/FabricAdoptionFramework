// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fabric Adoption Framework',
  tagline: 'Adoption Framework for Microsoft Fabric',
  favicon: 'img/favicon.ico?v=2',
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
          showLastUpdateTime: true,
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
      image: 'img/Fabric-Adoption-Framework-Social-Card.png?v=2',
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
            href: 'https://github.com/TheTrustedAdvisor/FabricAdoptionFramework',
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
      algolia: {
        appId: 'HUIIY5VUSV',
        apiKey: '082ac197fde5438c53737b7a66f3c601',
        indexName: 'Fabric Adoption Framework Prod',
        contextualSearch: true,
        searchPagePath: 'search',
      },
      scripts: [
        {
          src: 'https://fonts.googleapis.com',
          rel: 'preconnect',
        },
        {
          src: 'https://fonts.gstatic.com',
          rel: 'preconnect',
          crossOrigin: 'anonymous',
        },
      ],
      stylesheets: [
        {
          href: 'https://fonts.googleapis.com/css2?family=Anton&display=swap',
          type: 'text/css',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap',
          type: 'text/css',
        },
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      customCssVariables: {
        '--ifm-color-primary': '#2a4b8d',
        '--ifm-color-primary-dark': '#223e73',
        '--ifm-color-primary-darker': '#1c3562',
        '--ifm-color-primary-darkest': '#142949',
        '--ifm-color-primary-light': '#345fae',
        '--ifm-color-primary-lighter': '#3c6cc2',
        '--ifm-color-primary-lightest': '#4d80d8',
        '--ifm-menu-color': '#2a4b8d',
        '--ifm-menu-color-active': '#2a4b8d',
        '--ifm-menu-color-background-active': '#e6e9f2',
      },
      metadata: [
        { name: 'description', content: 'Fabric Adoption Framework – Your guide to adopting Microsoft Fabric successfully.' },
        { property: 'og:title', content: 'Fabric Adoption Framework' },
        { property: 'og:description', content: 'Your guide to adopting Microsoft Fabric successfully.' },
        { property: 'og:image', content: 'https://www.fabric-adoption-framework.com/img/Fabric-Adoption-Framework-Social-Card.png?v=2' },
        { property: 'og:url', content: 'https://www.fabric-adoption-framework.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Fabric Adoption Framework' },
        { name: 'twitter:description', content: 'Your guide to adopting Microsoft Fabric successfully.' },
        { name: 'twitter:image', content: 'https://www.fabric-adoption-framework.com/img/Fabric-Adoption-Framework-Social-Card.png?v=2' }
      ],
    }),
};

export default config;
