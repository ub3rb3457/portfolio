// ./docs/.vitepress/config.js

module.exports = {
    base: '/vite-vue-compo-pkg-starter/',
    title: 'ReplaceMe.vue',
    description: 'A documentation site for the ReplaceMe component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            // { text: "npm", link: "https://www.npmjs.com/package/@obewds/vite-vue-compo-pkg-starter" },
            { text: "GitHub", link: "https://github.com/obewds/vite-vue-compo-pkg-starter" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
