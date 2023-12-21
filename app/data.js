const badges = require('skill-badges').default;
const chalk = require('chalk');

const createGitHubURL = (repo) => `https://github.com/oeyoews/${repo}`;
const createGitHubStarURL = (repo) =>
  `https://img.shields.io/github/stars/oeyoews/${repo}?style=flat-square`;

// TODO
const packages = [];

const projects = [
  {
    logo: '📦',
    repo: 'tiddlywiki-starter-kit',
    desc: '使用 tiddlywiki 搭建的本地优先的笔记软件',
    techList: [badges.TiddlyWiki5, badges.NodeJS, badges.TailwindCSS],
  },
  {
    logo: '📝',
    repo: 'nextjs-mdx-blog',
    desc: '支持多种数据源的 Blog, 使用 Nextjs14 构建',
    techList: [badges.TypeScript, badges.NextJS],
  },
  {
    logo: '🎶',
    repo: 'react-music',
    desc: '使用 nextjs14 构建的在线音乐播放器',
    techList: [badges.TypeScript, badges.NextJS],
  },
  {
    logo: '📖',
    repo: 'reading-books-with-tiddlywiki',
    desc: '使用 tiddlywiki 构建的在线书籍阅读器',
    techList: [badges.TypeScript, badges.TiddlyWiki5],
  },
];

console.log(chalk.cyan('🔎 找到了 ' + projects.length + ' 个项目。\n'));

module.exports = {
  date: new Date().toLocaleString(),
  projects: projects.map((project) => ({
    ...project,
    github: createGitHubURL(project.repo),
    badges: [createGitHubStarURL(project.repo)],
  })),
};
