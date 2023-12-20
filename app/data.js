// 导入徽章信息
const badges = require('./badges');

const createGitHubURL = (repo) => `https://github.com/oeyoews/${repo}`;
const createGitHubStarURL = (repo) =>
  `https://img.shields.io/github/stars/oeyoews/${repo}?style=flat-square`;

// 创建包含项目信息的 JavaScript 对象
const data = {
  projects: [
    {
      logo: '📦',
      repo: 'tiddlywiki-starter-kit',
      desc: '使用 tiddlywiki 搭建的本地优先的笔记软件',
      github: createGitHubURL('tiddlywiki-starter-kit'),
      techList: [badges.TiddlyWiki5, badges.NodeJS, badges.TailWindCss],
      badges: [createGitHubStarURL('tiddlywiki-starter-kit')],
    },
    {
      logo: '📝',
      repo: 'nextjs-mdx-blog',
      desc: '支持多种数据源的 Blog, 使用 Nextjs14 构建',
      github: createGitHubURL('nextjs-mdx-blog'),
      techList: [badges.TypeScript, badges.NextJs],
      badges: [createGitHubStarURL('nextjs-mdx-blog')],
    },
    {
      logo: '🎶',
      repo: 'react-music',
      desc: '使用 nextjs14 构建的在线音乐播放器',
      github: createGitHubURL('react-music'),
      techList: [badges.TypeScript, badges.NextJs],
      badges: [createGitHubStarURL('react-music')],
    },
    {
      logo: '📖',
      repo: 'reading-books-with-tiddlywiki',
      desc: '使用 tiddlywiki 构建的在线书籍阅读器',
      github: createGitHubURL('reading-books-with-tiddlywiki'),
      techList: [badges.TypeScript, badges.TiddlyWiki5],
      badges: [createGitHubStarURL('reading-books-with-tiddlywiki')],
    },
  ],
};

// 导出 JavaScript 对象
module.exports = data;
