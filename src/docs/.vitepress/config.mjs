export default {
  title: "My Pages", //append to all page titles
  themeConfig: {
    logo: "/images/logo.png",
    siteTitle: "My Pages",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/About/" },
      { text: "Contact", link: "/Contact/" },
      { text: "PDFs", link: "/pdfs/" },
      {
        // Dropdown Menu
        text: "Changelog",
        items: [
          { text: "v0.0.1", link: "/item-1" },
          { text: "v0.0.2", link: "/item-2" },
          { text: "v0.0.3", link: "/item-3" },
        ],
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "github.com/farisubuntu" },
      { icon: "twitter", link: "https://twitter.com/Alhodali_Faris" },
    ],

    sidebar: [
      {
        text: "CSS",
        link: "/CSS/",
      },
      {
        text: "Github",
        link: "/Github/",
      },
      {
        text: "javascript",
        link: "/javascript/",
      },
      {
        text: "JSON",
        link: "/JSON/",
      },
      {
        text: "Linux",
        link: "/Linux/",
      },
      {
        text: "Markdown",
        link: "/Markdown/",
      },
      {
        text: "Misc",
        link: "/Misc/",
      },
      {
        text: "Network_Net",
        link: "/Network_Net/",
      },
      {
        text: "PHP",
        link: "/PHP/",
      },
      {
        text: "Blog",
        link: "/Blog/",
      },
      {
        text: "Vite / Vitepress",
        link: "/Vite_and_Vitepress/",
      },
      {
        text: "DD-WRT Help",
        link: "/DD-WRT-Help/",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Adocs",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    
  },
  ignoreDeadLinks: true,
  base: '/mypages/',
  
};

