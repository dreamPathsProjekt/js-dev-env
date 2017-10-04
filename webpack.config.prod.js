import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  // inline-source-map: compilation speed vs quality (slower to generate)
  devtool: 'source-map',
  // noInfo: false => webpack displays a list of files bundling
  noInfo: false,
  // define entry-point or array of entry-points, nodejs global __dirname -> full path
  // define multiple entry points to enable bundle splitting
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  // you can also create different target bundles (e.g. node, electron)
  target: 'web',
  // where to create output bundle
  output: {
    // generate physical file to dist dir
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',

    // webpack now generates filenames based on key names we provide in entry
    // filename: '[name].js'

    // Add hash after name to bundle files - filename changes when code changes
    filename: '[name].[chunkhash].js'
  },
  // optionally define plugins
  plugins: [
      // Generate external css file with hash in filename
      new ExtractTextPlugin('[name].[contenthash].css'),

      // Hash the files using MD5 so that their names change when content changes.
      new WebpackMd5Hash(),

      // Use CommonsChunkPlugin to create a separate bundle of vendor libraries,
      // to be cached separately.
      new webpack.optimize.CommonsChunkPlugin({
        // name needs to be in-sync with key in entry object
        name: 'vendor'
      }),

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
      // {test: /\.css$/, loaders: ['style','css']}
      // Update css loaders to use ExtractTextPlugin
      // and css?sourceMap retrieves sourceMap of minified css
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
