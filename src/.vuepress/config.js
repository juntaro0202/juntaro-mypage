module.exports = {
  markdown: {
    extendMarkdown: (md) => {
      md.set({ breaks: true });
    },
  },
  title: "official site",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Contact", link: "/contact/" },
      {
        text: "Youtube",
        link:
          "https://www.youtube.com/channel/UCa6oNOr1S251sHs8rile4Rw?view_as=subscriber",
      },
      { text: "twitter", link: "https://twitter.com/junchann0202" },
      { text: "blog", link: "http://hitsusya.com/" },
      { text: "読書会", link: "https://www.read4action.com/" },
      { text: "著書", link: "https://amzn.to/33Fv7cJ" },
    ],
  },
};
