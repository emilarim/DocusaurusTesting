// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hello Docs',
  tagline: 'My first documentation site',
  favicon: 'img/favicon.ico',
////////////////////////////////////////////new config
  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],
  
/////////////////////////////////////////////

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://emilarim.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/hello-docs-v3/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'emilarim', // Usually your GitHub org/user name.
  projectName: 'hello-docs-v3', // Usually your repo name.
  trailingSlash: true, // Consistency about broken links, and unexpected redirects.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',

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
          routeBasePath: '/', 
          sidebarPath: './sidebars.js',
          //sidebarPath: require.resolve('./sidebars.js'),
          //remarkPlugins: [require('remark-mermaid')],
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/emilarim/hello-docs-v3/edit/main/',
        },
        blog:false,
        //blog: {
          //showReadingTime: true,
          //feedOptions: {
            //type: ['rss', 'atom'],
            //xslt: true,
          //},
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
           // 'https://emilarim.github.io/hello-docs-v3/',
          // Useful options to enforce blogging best practices
         // onInlineTags: 'warn',
         // onInlineAuthors: 'warn',
         // onUntruncatedBlogPosts: 'warn',
       // },
        theme: {
          //customCss: './src/css/custom.css',
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Docusaurus',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/emilarim/hello-docs-v3',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'UX Evaluation',
                //to: '/docs/intro',
                to: '/intro/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          //{
            //title: 'More',
            //items: [
              //{
                //label: 'Blog',
                //to: '/blog',
              //},
              //{
                //label: 'GitHub',
                //href: 'https://github.com/facebook/docusaurus',
              //},
            //],
          //},
        ],
        copyright: `Copyright © ${new Date().getFullYear()} emilarim project.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

//module.exports = config;



