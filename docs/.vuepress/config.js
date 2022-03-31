module.exports = {
  title: "Hsieh", 
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: '/Resume/',
  dest: "/dist",


  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
    ],
    // sidebar: {
    //   '/guide/': genSidebarConfig('Guide')
    // },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  },

  plugins:[
    [
      '@vuepress/register-component',
      {
        component:[
          {
            name:'V-card',
            path:'../../docs/.vuepress/components/Work.vue'
          }
        ]
      }
    ]
  ]
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

