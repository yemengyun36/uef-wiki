import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  lang: 'zh',
  head: [['link', { rel: 'icon', href: '/logo/logo.svg' }]],
  title: "UEF WIKI",
  description: "一个「流浪地球」设定资源站",
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    lastUpdated: true,

    outline: {
      level: [2, 3],
      label: '大纲',
    },
    docFooter: {
      prev: '上一章',
      next: '下一章',
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到亮色主题',
    darkModeSwitchTitle: '切换到深色主题',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/zaona/uef-wiki/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

    logo: '/logo/logo.svg',

    nav: [
      {
        text: '首页',
        link: '/' // 表示docs/index.md
      },
      {
        text: '组织',
        items: [
          {
            text: 'UEG',
            link: '/film/组织/UEG'
          }
        ]
      },
      {
        text: '人物',
        items: [
          {
            text: '刘启',
            link: '/film/人物/刘启'
          }
        ]
      },
      {
        text: '同人原创设定',
        items: [
          { text: '流浪地球法', link: '/recreate/流浪地球法' }
        ]
      },
      {
        text: '编写指南',
        link: '/example/编写指南'
      }
    ],

    sidebar: [
      {
        text: '组织',
        items: [
          {
            text: 'UEG',
            link: '/film/组织/UEG'
          }
        ]
      },
      {
        text: '人物',
        items: [
          {
            text: '刘启',
            link: '/film/人物/刘启'
          }
        ]
      },
      {
        text: '同人原创设定',
        items: [
          { text: '流浪地球法', link: '/recreate/流浪地球法' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zaona/uef-wiki/' }
    ]
  }
})
