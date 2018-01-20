const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const extractSass = new ExtractTextPlugin('app.css')
const WebpackShellPlugin = require('webpack-shell-plugin')

const plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: false,
    }
  }),
  extractSass
]

/**
 * Start adonis server when env variable
 * is set. Check `package.json` scripts
 * block.
 */
plugins.push(new WebpackShellPlugin({
  onBuildStart: [ 'adonis serve --dev --watch=app,start,server']
}))

module.exports = {
  entry: ['./resources/scripts/app.js', './resources/sass/app.scss'],
  output: {
    filename: 'atail.js',
    path: path.resolve(__dirname, 'public')
  },
  node: {
  fs: 'empty'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract(['css-loader?minimize', 'sass-loader'])
      },
      {
       test: /\.vue$/,
       loader: 'vue-loader',
       options: {}
         // vue-loader options
       },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|adonis)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: plugins
}
