import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Agile Bible",
  vite: {
    plugins: [
      SearchPlugin(),
    ]
  },
  srcDir: 'src',
  dir: 'src',
  cleanUrls: true,
  lastUpdated: true,
  description: "The Agile Bible is a collection of best practices, design patterns, and libraries for building Vue.js applications.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Team', link: '/team' },
    ],
    editLink: {
      pattern: 'https://github.com/appwise-labs/frontend-bible/blob/main/src/:path'
    },
    logo: '/bible_logo.png',
    sidebar: [
      { text: 'The Agile Manifesto', link: '/the-agile-manifesto'},
      { text: 'Tools', link: '/tools'},
      { text: 'Roles', link: '/roles'},
      { text: 'Scrum Cycles', link: '/scrum-cycles'},
      { text: 'Key Concepts', link: '/key-concepts', items: [
          { text: 'Team', link: '/key-concepts/team' },
          { text: 'Personas', link: '/key-concepts/personas' },
          { text: 'User Stories', link: '/key-concepts/user-stories' },
          { text: 'Daily Meeting', link: '/key-concepts/daily-meeting' },
          { text: 'Iterative Development', link: '/key-concepts/iterative-development' },
          { text: 'Incremental Development', link: '/key-concepts/incremental-development' },
          { text: 'Milestone Retrospective', link: '/key-concepts/milestone-retrospective' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/appwise-labs/frontend-bible' }
    ]
  }
})
