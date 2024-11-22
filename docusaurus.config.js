// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'duxapp',
  tagline: '基于Taro开发的模块化开发框架',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://duxapp.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
    localeConfigs: {
      'zh-cn': {
        label: '中文',
        direction: 'ltr',
        htmlLang: 'zh-cn',
        calendar: 'gregory',
        path: 'zh',
      }
    }
  },
  scripts: [
    {
      src: 'https://hm.baidu.com/hm.js?dd8451cb032d05dbd8f8fee75e02ecc5',
      async: true
    }
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '全部博客',
          blogSidebarCount: 'ALL',
          blogTitle: '博客',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/customTheme.scss'),
            require.resolve('./src/css/showcase.scss')
          ]
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'duxapp',
        style: 'dark',
        logo: {
          alt: 'duxapp',
          src: 'img/logo.jpg'
        },
        items: [
          {
            type: 'doc',
            docId: 'course/started/intro',
            position: 'right',
            label: '教程',
          },
          {
            type: 'doc',
            docId: 'duxapp/start',
            position: 'right',
            label: '基础模块',
          },
          {
            type: 'doc',
            docId: 'duxui/start',
            position: 'right',
            label: 'UI库',
          },
          {
            type: 'doc',
            docId: 'app/start',
            position: 'right',
            label: '更多模块',
          },
          {
            type: 'doc',
            docId: 'update/start',
            position: 'right',
            label: '更新',
          },
          {
            to: '/blog', label: '博客', position: 'right'
          },
          {
            type: 'doc',
            docId: 'contact/start',
            position: 'right',
            label: '联系我们',
          },
          {
            href: 'https://www.dux.cn/page/apps',
            label: '应用商店',
            position: 'right'
          },
          {
            href: 'https://github.com/duxapp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '教程',
            items: [
              {
                label: '入门',
                to: '/docs/course/started/intro',
              },
              {
                label: '模块',
                to: '/docs/course/app/intro',
              },
              {
                label: 'ReactNative',
                to: '/docs/course/rn/start',
              },
            ],
          },
          {
            title: '模块文档',
            items: [
              {
                label: '基础模块',
                to: '/docs/duxapp/start',
              },
              {
                label: 'UI库',
                to: '/docs/duxui/start',
              },
              {
                label: '更多模块',
                to: '/docs/app/start',
              },
            ],
          },
          {
            title: '博客',
            items: [
              {
                label: '博客',
                to: '/blog',
              }
            ],
          },
          {
            title: '入口',
            items: [
              {
                label: 'DuxCms官网',
                href: 'https://www.dux.cn',
              },
              {
                label: '应用商店',
                href: 'https://www.dux.cn/page/apps',
              }
            ],
          },
          // {
          //   title: '更多',
          //   items: [
          //     {
          //       label: '日志',
          //       to: '/blog',
          //     }
          //   ],
          // },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        // theme: themes.github,
        // darkTheme: themes.dracula,
        // defaultLanguage: 'jsx',
        theme: require('./core/PrismTheme'),
        additionalLanguages: [
          'diff',
          'bash',
          'json',
          'java',
          'kotlin',
          'objectivec',
          'swift',
          'groovy',
          'ruby',
          'flow',
        ],
        // additionalLanguages: ['bash', 'diff', 'json', 'js', 'css', 'scss']
      },
      // algolia: {
      //   contextualSearch: true,
      // }
      algolia: {
        appId: '3EJZY2E0NT',
        apiKey: '330f7c6bc51c0b94f9a20d60f06a86e7',
        indexName: 'duxapp',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
