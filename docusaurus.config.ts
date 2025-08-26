import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Boros Documentation',
  tagline:
    'Pendle Boros is an on-chain platform for trading interest rate swaps. The protocol enables users to take long or short positions on variable interest rates with leverage through a hybrid system combining a central limit order book and AMM.',
  favicon: 'img/favicon.ico',
  url: 'https://pendle.finance/',
  baseUrl: '/boros/',
  organizationName: 'pendle-finance',
  projectName: 'boros-documentation',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  future: {
    v4: true
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  markdown: {
    mermaid: true
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous'
    }
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    navbar: {
      title: 'Boros Documentation',
      logo: {
        alt: 'Boros Logo',
        src: 'img/logo.svg'
      }
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pages',
          items: [
            {
              label: 'Website',
              href: 'https://pendle.finance'
            },
            {
              label: 'App',
              href: 'https://boros.pendle.finance'
            }
          ]
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/qshFxh6965/'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pendle_fi/'
            },
            {
              label: 'Telegram',
              href: 'https://t.me/pendlefinance/'
            }
          ]
        },
        {
          title: 'About Us',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/pendle/'
            },
            {
              label: 'Careers',
              href: 'https://angel.co/company/pendle_finance/'
            },
            {
              label: 'Media Kit',
              href: 'https://www.pendle.finance/brandguide'
            },
            {
              label: 'Audits',
              href: 'https://github.com/pendle-finance/boros-core-public/tree/main/audits/'
            },
          ]
        }
      ]
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity']
    }
  } satisfies Preset.ThemeConfig
};

export default config;
