export default {
    'en-us': {
        sidemenu: [
            {
                title: 'User Guide',
                children: [
                    {
                        title: 'Introduction to kruise',
                        link: '/en-us/docs/quick-start.html',
                    },
                    {
                        title: 'Prerequisites',
                        link: '/en-us/docs/quick-start.html',
                    },
                    {
                        title: 'Installing the CRDs',
                        link: '/en-us/docs/quick-start.html',
                    },
                    {
                        title: 'Using Advanced StatefulSet Examples',
                        link: '/en-us/docs/quick-start.html',
                    },
                    {
                        title: 'Using BroadcastJob Examples',
                        link: '/en-us/docs/quick-start.html',
                    },
                    {
                        title: 'Using SidecasSet Examples',
                        link: '/en-us/docs/quick-start.html',
                    },
                    {
                        title: 'Deploying the Guestbook Apps',
                        link: '/en-us/docs/quick-start.html',
                    },
                    {
                        title: 'How to Contribute',
                        link: '/en-us/docs/quick-start.html',
                    }
                ],
            },
        ],
        barText: 'Documentation',
    },
    'zh-cn': {
        sidemenu: [
            {
                title: '用户文档',
                children: [
                    {
                        title: '入门',
                        children: [
                            {
                                title: 'Kruise 介绍',
                                link: '/zh-cn/docs/introduction.html',
                            },
                            {
                                title: '快速开始',
                                link: '/zh-cn/docs/quick-start.html',
                            },
                            {
                                title: '基本原理',
                                link: '/zh-cn/docs/basic-implementation.html',
                            },
                        ],
                    },
                    {
                        title: 'FAQ',
                        link: '/zh-cn/docs/FAQ.html',
                    },
                    {
                        title: '使用文档',
                        children: [
                            {
                                title: '基本使用（资源与规则）',
                                link: '/zh-cn/docs/basic-api-resource-rule.html',
                            },
                            {
                                title: '流量控制',
                                link: '/zh-cn/docs/flow-control.html',
                            },
                            {
                                title: '熔断降级',
                                link: '/zh-cn/docs/circuit-breaking.html',
                            },
                            {
                                title: '系统自适应保护',
                                link: '/zh-cn/docs/system-adaptive-protection.html',
                            },
                            {
                                title: '热点参数限流',
                                link: '/zh-cn/docs/parameter-flow-control.html',
                            },
                            {
                                title: '来源访问控制',
                                link: '/zh-cn/docs/origin-authority-control.html',
                            },
                            {
                                title: '注解支持',
                                link: '/zh-cn/docs/annotation-support.html',
                            },
                            {
                                title: '动态规则扩展',
                                link: '/zh-cn/docs/dynamic-rule-configuration.html',
                            },
                            {
                                title: '日志',
                                link: '/zh-cn/docs/logs.html',
                            },
                            {
                                title: '实时监控',
                                link: '/zh-cn/docs/metrics.html',
                            },
                            {
                                title: '启动配置项',
                                link: '/zh-cn/docs/startup-configuration.html',
                            },
                        ],
                    },
                    {
                        title: 'Sentinel 控制台',
                        link: '/zh-cn/docs/dashboard.html',
                    },
                    {
                        title: '开源框架适配',
                        link: '/zh-cn/docs/open-source-framework-integrations.html',
                    },
                ],
            },
            {
                title: '贡献手册',
                children: [
                    {
                        title: '开源贡献指南',
                        link: '/zh-cn/docs/contribution/contribution-guideline.html',
                    },
                ],
            },
        ],
        barText: '文档',
    },
};
