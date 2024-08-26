import { Route, DataItem } from '@/types';
export const route: Route = {
    path: '/hebuet/new/:category',
    url: 'news.hebuet.edu.cn',
    categories: ['university'],
    example: '/hebuet/new/1005',
    parameters: { category: '新闻类别 - 见下表 默认为校级新闻' },
    description: `
    | 河工新闻 |
    | ------------ |
    | 1005         |`,
    features: {
        requireConfig: false,
        requirePuppeteer: false,
        antiCrawler: false,
        supportBT: false,
        supportPodcast: false,
        supportScihub: false,
    },
    radar: [
        {
            source: ['news.hebuet.edu.cn/info/:category'],
            target: '/hebuet/new/:category',
        },
        {
            source: ['hebuet.edu.cn'],
        },
    ],
    name: '校内新闻',
    maintainers: ['3130585774'],
    handler() {
        return {
            title: '',
            link: '',
            description: '',
            item: [] as DataItem[],
        };
    },
};
