/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 13:09:34
 * @LastEditors: xx
 * @LastEditTime: 2021-09-30 23:50:28
 */

module.exports = {
  //部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === "production" ? "././" : "/",
  productionSourceMap: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
    },
    devServer: {
      host: "0.0.0.0",
      port: 8888,
      open: true,
      https: false,
      proxy: {
        "/devapiserver": {
          target: "http://localhost:5000",
          // target: "http://120.55.90.34:5000",
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            "^/devapiserver": "",
          },
        },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/assets/scss/_var.scss";
            @import "@/assets/scss/mixin.scss";
            `,
      },
    },
  },
};
