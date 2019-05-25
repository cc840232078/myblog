module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '一花一世界',
      description: 'Stay foolish , Stay hungry'
    }
  },
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'cc840232078',
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
            {
                text: '指南',
                link: '/zh/guide/'
            },
            {
                text: '读书学习',
                link: 'http://www.ireadweek.com/index.php/Index/index.html'
            },
            {
                text: '在线视频',
                items: [
                    { text: '哔哩哔哩', link: 'https://www.bilibili.com/' },
                    { text: '天使动漫', link: 'http://dm.tsdm.tv/index.html' },
                    { text: '电影天堂', link: 'https://www.dytt8.net/' }
                ]
            },
            {
                text: '在线工具',
                items: [
                    {
                        text:'在线编辑',
                        items: [
                            { text: 'PDF转换器', link: 'https://smallpdf.com/cn/pdf-to-word' },
                            { text: 'JSON 编辑器', link: 'https://www.bejson.com/jsoneditoronline' },
                            { text: 'MD 表格生成', link: 'https://tableconvert.com' },
                            { text: 'CRON 表达式', link: 'http://cron.qqe2.com/' },
                            { text: '代码格式化', link: 'http://tool.oschina.net/codeformat/html' },
                            { text: '公式编辑器', link: 'https://zh.numberempire.com/latexequationeditor.php' },
                            { text: '二维码生成器', link: 'https://cli.im/' },
                            { text: '在线编码转换', link: 'http://tool.chinaz.com/tools/native_ascii.aspx' },
                            { text: 'YAML <==> Properties', link: 'https://www.toyaml.com/index.html' },
                            { text: '在线 Web 练习', link: 'https://jsfiddle.net/' }
                        ]
                    },

                    {
                        text:'在线服务',
                        items: [
                            { text: 'Boot CDN', link: 'https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-e2e-nightwatch/README.md' },
                            { text: '百度 CDN', link: 'https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-e2e-nightwatch/README.md' },
                            { text: '微信 CDN', link: 'https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-e2e-nightwatch/README.md' },
                            { text: '谷歌字体', link: 'https://servers.ustclug.org/2014/06/blog-googlefonts-speedup/' }
                        ]
                    },
                    {
                        text:'开源镜像',
                        items: [
                            { text: 'OPSX', link: 'https://opsx.alibaba.com' },
                            { text: 'AZURE', link: 'https://mirror.azure.cn/' },
                            { text: 'HUB—DOCKER/', link: 'https://hub.docker.com/' }
                        ]
                    },
                    {
                        text:'趋势分析',
                        items: [
                            { text: '谷歌指数', link: 'https://trends.google.com/trends/?geo=US' },
                            { text: '百度指数', link: 'http://index.baidu.com/v2/index.html#/' },
                            { text: '百度浏览统计', link: 'https://tongji.baidu.com/data/browser' }

                        ]
                    }

                ]

            },
            {
                text: '我的网易音乐',
                link: 'https://music.163.com/#/playlist?id=704856179'
            }
        ],
        sidebar:{
            '/zh/guide/': [
                '/zh/guide/',
                {
                    title: '前端开发',
                    collapsable: false,
                    children: [
                        '/zh/guide/vue/vue-prepare-a',
                        '/zh/guide/vue/vue-prepare-b',
                        '/zh/guide/vue/vue-prepare-c',
                        '/zh/guide/vue/vue-prepare-d',
                        '/zh/guide/vue/vue-prepare-e',
                        '/zh/guide/vue/vue-prepare-f',
                        '/zh/guide/vue/vue-prepare-g'
                    ]
                },
                {
                    title: 'Java后台开发',
                    collapsable: false,
                    children: [
                        '/zh/guide/css',
                        '/zh/guide/aa',
                    ]
                },
                {
                    title: '运维',
                    collapsable: false,
                    children: [
                        '/zh/guide/kubernetes/kubernetes-a.md',
                        '/zh/guide/kubernetes/kubernetes-b.md',
                        '/zh/guide/kubernetes/kubernetes-c.md',
                        '/zh/guide/nginx/nginx-1.md',
                        '/zh/guide/nginx/nginx-2.md',
                        '/zh/guide/nginx/nginx-3.md',
                        '/zh/guide/nginx/nginx-4.md',
                        '/zh/guide/nginx/nginx-5.md',
                        '/zh/guide/nginx/nginx-6.md',
                        '/zh/guide/nginx/nginx-7.md',
                    ]
                },
                {
                    title: '微服务',
                    collapsable: false,
                    children: [
                        '/zh/guide/css',
                        '/zh/guide/aa',
                    ]
                },
                {
                    title: '大数据',
                    collapsable: false,
                    children: [
                        '/zh/guide/css',
                        '/zh/guide/aa',
                    ]
                },
                {
                    title: '黑科技',
                    collapsable: false,
                    children: [
                        '/zh/guide/css',
                        '/zh/guide/aa',
                    ]
                }

        ]
        }
      }

    }
  }
}
