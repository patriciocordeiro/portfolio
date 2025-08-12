import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Patrício Portfolio', // Changed title
  tagline: 'Your Skills and what you offer', // Update this! (e.g., "Front-end Developer")
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://patriciocordeiro.github.io', // Replace with your GitHub Pages URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/portfolio/',
  trailingSlash: true, // Set to true if you want to keep trailing slashes

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'patriciocordeiro', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.

  onBrokenLinks: 'throw',
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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/patriciocordeiro/portfolio', // Point to your repo (Optional, for edits)
        },
        blog: {
          showReadingTime: true,
          // Remove the blog section as it is not needed for a portfolio
          // feedOptions: {
          //   type: ['rss', 'atom'],
          //   xslt: true,
          // },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/patriciocordeiro/portfolio', // Point to your repo (Optional, for edits)
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '[Your Name]', // Changed title
      logo: {
        alt: '[Your Name] Logo', // Changed logo alt text
        src: 'img/logo.svg', // You'll probably want to replace this (optional)
      },
      items: [
        {
          type: 'docSidebar', // Assuming a general docs sidebar for portfolio content.  If you don't want a tutorial, change to "left" or remove.
          sidebarId: 'tutorialSidebar', // Adjust sidebar ID if needed.
          position: 'left',
          label: 'About', // Changed label, might also say "Projects"
        },
        // Remove Blog
        {
          href: 'https://github.com/patriciocordeiro/portfolio', // Point to your repo.
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About', // Changed to About, you can change it to Projects
          items: [
            {
              label: 'About Me',
              to: '/docs/intro', // changed
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            // Add Contact items - Email, LinkedIn, etc.
            {
              label: 'Email',
              href: 'mailto:paponci6@gmail.com',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/patriciocordeiro/',
            },
          ],
        },
        {
          title: 'Projects', // if you want to re-purpose the menu - good for a small portfolio
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/patriciocordeiro/portfolio', // Point to your repo
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Patricio Cordeiro. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
