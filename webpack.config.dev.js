import path from 'path';

export default {
  debug: true,
  // inline-source-map: compilation speed vs quality (slower to generate)
  devtool: 'inline-source-map',
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
    // with dev config webpack won't generate physical files. Serve from memory.
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  // optionally define plugins
  plugins: [],
  // loaders: filetypes we want webpack to handle or exclude
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
