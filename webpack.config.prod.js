import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  // inline-source-map: compilation speed vs quality (slower to generate)
  devtool: 'source-map',
  // noInfo: false => webpack displays a list of files bundling
  noInfo: false,
  // define entry-point or array of entry-points, nodejs global __dirname -> full path
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  // you can also create different target bundles (e.g. node, electron)
  target: 'web',
  // where to create output bundle
  output: {
    // generate physical file to dist dir
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  // optionally define plugins
  plugins: [
      // Eliminate duplicate packages when generating bundle
      new webpack.optimize.DedupePlugin(),
      // Minify JS
      new webpack.optimize.UglifyJsPlugin(),
      // Create HTML file that includes reference to bundled JS
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: true,
        // settings for minifying html
        minify: {
          //enable all/most settings
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      })
  ],
  // loaders: filetypes we want webpack to handle or exclude
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
