module.exports = {
    title: 'IfS',
    description: 'Information Technology for Senior High',
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/': {
            lang: 'zh-cn',
            title: '高中信息技术'
            description: '高中信息技术学习资料(适用于江苏省常熟市中学)'
        },
    },
    themeConfig: {
        sidebarDepth: 2,
        repo: 'gggxbbb/IfS',
        editLinks: true,
        smoothScroll: true,
        locales: {
            '/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                repoLabel: '查看源码',
                nav: [
                    { text: '必修一', link: '/1/' },
                ],
                sidebar: {
                    '/1/': [
                        ['/1/', '概述'],
                        {
                            title: 'Python 基础',
                            children: [
                                ['/1/python3/basis/', '概述'],
                                ['/1/python3/basis/1', '认识 Python'],
                                ['/1/python3/basis/2', '变量与运算符'],
                                ['/1/python3/basis/3', '输入与输出'],
                                ['/1/python3/basis/5', '比较运算符、逻辑运算符与单分支结构'],
                                ['/1/python3/basis/6', '二分支结构与多分支结构'],
                                ['/1/python3/basis/7', '循环与遍历'],
                            ]
                        }
                    ]
                }
            },
        },

    }
}
