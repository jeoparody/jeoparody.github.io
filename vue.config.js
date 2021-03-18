module.exports = {
  publicPath: "jeoparody.github.io",
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles.scss";`,
      },
    },
  },
};
