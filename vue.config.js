const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    resolve: {
      fallback: {
        fs: false
      }
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false, // 자동으로 open하지 않음
      analyzerMode: 'static' /* 분석파일 html 보고서를 dist 폴더에 저장한다  */,
      reportFilename: 'manbalboy-bundle-report.html', // 리포트이름
    },
  },
})
