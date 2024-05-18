import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/logo/logo.svg' }]],
  title: "UEF WIKI",
  description: "一个「流浪地球」设定资源站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    
    logo:'/logo/logo.svg',
    
    nav: [
      {
        text: '首页',
        link: '/' // 表示docs/index.md
      },
      {
        text: '剧情设定',
        items: [
          {
            text: '组织',
            link: '/film/组织/UEG'
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

    sidebar: [
      {
        text: '剧情设定',
        items: [
          {
            text: '组织',
            link: '/film/组织/UEG'
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
      { icon: 'github', link: 'https://github.com/zaona/united-earth-files/discussions' }
    ]
  }
})
