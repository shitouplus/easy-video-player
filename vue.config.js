module.exports = {
  configureWebpack: {
    devServer: {
      contentBase: './example',
    },
    output: {
      libraryExport: 'default'
    }
  },
  css: {
    extract: false
  }
}
