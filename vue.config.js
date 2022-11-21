const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/style/_variables.scss')
      ]
    }
  },
  configureWebpack:{
    resolve:{
      alias:{
        image: path.resolve(__dirname, 'src/assets/img'),
        comp: path.resolve(__dirname, 'src/components'),
        view: path.resolve(__dirname, 'src/views'),
        elms: path.resolve(__dirname, 'src/components/elements'),
        icons: path.resolve(__dirname, 'src/components/icons')
      }
    }
  }
}
