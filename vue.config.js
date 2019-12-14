const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const isLib = process.env.VUE_APP_BUILD_MODE === 'lib'
const resolve = dir => path.join(__dirname, dir)

const setChainWebpack = config => {
  // 修改默认目录简写
  config.resolve.alias
    .set('@', path.resolve('app'))
  // 添加对 app 目录的支持
  config.module
    .rule('js')
    .include
    .add('/app')
    .end()
    .use('babel')
    .loader('babel-loader')

  if (isProd) {
    // drop console
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  }
}

const setConfigureWebpack = config => {
  if (isLib) {
    config.output = {
      ...config.output,
      library: 'VuexStateshot',
      libraryExport: 'default'
    }
  }
}

module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: resolve('app/main.js') // 修改默认打包文件入口
    }
  },
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => setChainWebpack(config),
  configureWebpack: config => setConfigureWebpack(config),
  devServer: {
    port: 8383,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
