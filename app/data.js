const { badges } = require('skill-badges');
const chalk = require('chalk');

const createGitHubURL = (repo, path = '') =>
  `https://github.com/oeyoews/${repo}/tree/main/${path}`;
const createGitHubStarURL = (repo) =>
  `https://img.shields.io/github/stars/oeyoews/${repo}?style=flat-square`;

// TODO: docker image
const packages = [
  {
    logo: '📦',
    repo: 'tiddlywiki-starter-kit',
    name: 'create-neotw-app',
    desc: 'create a tiddlywiki project with tiddlywiki-starter-kit',
    path: 'packages/create-neotw-apps',
    techList: [badges.TiddlyWiki5, badges.NodeJS, badges.TailwindCSS],
  },
  {
    logo: '📦',
    repo: 'tiddlywiki-markdown-importer-cli',
    name: 'tiddlywiki-markdown-importer-cli',
    desc: 'tiddlywiki importer/exporter with markdown',
    path: '',
    techList: [badges.NodeJS],
  },
  {
    logo: '📦',
    repo: 'tiddlywiki-projects',
    name: 'skill-badges',
    desc: 'A collection of skill badges and type safe icons.',
    path: 'packages/skill-badges',
    techList: [badges.NodeJS, badges.TypeScript],
  },
];

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
  {
    logo: '📦',
    repo: 'usewiki',
    desc: 'Browser Extension: Record Thoughts With TiddlyWik',
    techList: [badges.TiddlyWiki5],
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
  packages: packages.map((package) => ({
    ...package,
    github: createGitHubURL(package.repo, package.path),
  })),
};
