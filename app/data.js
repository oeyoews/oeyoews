const { badges } = require('skill-badges');
const chalk = require('chalk');

const svgRepo =
  '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 10V1.5l-.5-.5H3.74a1.9 1.9 0 0 0-.67.13 1.77 1.77 0 0 0-.94 1 1.7 1.7 0 0 0-.13.62v9.5a1.7 1.7 0 0 0 .13.67c.177.427.515.768.94.95a1.9 1.9 0 0 0 .67.13H4v-1h-.26a.72.72 0 0 1-.29-.06.74.74 0 0 1-.4-.4.93.93 0 0 1-.05-.29v-.5a.93.93 0 0 1 .05-.29.74.74 0 0 1 .4-.4.72.72 0 0 1 .286-.06H13v2H9v1h4.5l.5-.5V10zM4 10V2h9v8H4zm1-7h1v1H5V3zm0 2h1v1H5V5zm1 2H5v1h1V7zm.5 6.49L5.28 15H5v-3h3v3h-.28L6.5 13.49z"></path></svg>';

// - vim/neovim: 耗时：不低于 500 小时。
// - linux: 耗时不低于 1000 小时。
// - tiddlywiki: 不低于 1000 小时。

const createGitHubURL = (repo, path = '') =>
  `https://github.com/oeyoews/${repo}/tree/main/${path}`;
const createGitHubStarURL = (repo) =>
  `https://img.shields.io/github/stars/oeyoews/${repo}?style=flat-square`;

// TODO: docker image
const packages = [
  {
    logo: '📦',
    repo: 'tiddlywiki-starter-kit',
    name: 'randomstring-plus',
    desc: 'generate random string',
    path: 'packages/randomstring-plus',
    techList: [badges.TypeScript, badges.NodeJS, badges.NPM],
  },
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
    logo: '🎶',
    repo: 'react-music',
    desc: '使用 nextjs14 构建的在线音乐播放器',
    techList: [badges.React, badges.TypeScript, badges.NextJS],
  },
  {
    logo: '📦',
    repo: 'tiddlywiki-codemirror6',
    desc: 'tiddlywiki codemirror6',
    techList: [badges.JavaScript, badges.TiddlyWiki5],
  },
  {
    logo: '📖',
    repo: 'reading-books-with-tiddlywiki',
    desc: '使用 tiddlywiki 构建的在线书籍阅读器',
    techList: [badges.TypeScript, badges.TiddlyWiki5],
  },
  {
    logo: '📝',
    repo: 'nextjs-mdx-blog',
    desc: '支持多种数据源的 Blog, 使用 Nextjs14 构建',
    techList: [badges.React, badges.TypeScript, badges.NextJS],
  },
  {
    logo: '📦',
    repo: 'tiddlywiki-starter-kit',
    desc: '使用 tiddlywiki 搭建的本地优先的笔记软件',
    techList: [badges.TiddlyWiki5, badges.NodeJS, badges.TailwindCSS],
  },
  {
    logo: '📦',
    repo: 'usewiki2',
    desc: 'Browser Extension: Record Thoughts With TiddlyWik',
    techList: [badges.Vue, badges.TiddlyWiki5],
  },
  {
    logo: '📦',
    repo: 'packages-template',
    desc: '一个使用 tsup + typescript 搭建的轻量 npm package 模板',
    techList: [badges.TypeScript, badges.NodeJS, badges.NPM],
  },
];

console.log(chalk.cyan('🔎 找到了 ' + projects.length + ' 个项目。\n'));

module.exports = {
  date: new Date().toLocaleString(),
  projects: projects.map((project) => ({
    ...project,
    github: createGitHubURL(project.repo),
    badges: [createGitHubStarURL(project.repo)],
    svgRepo,
  })),
  packages: packages.map((package) => ({
    ...package,
    github: createGitHubURL(package.repo, package.path),
  })),
};
