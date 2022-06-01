const { defineConfig } = require('@vue/cli-service');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin"); //samson

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/'
      : '/test'
})
