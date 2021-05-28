// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: './src/index.js',

//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/dist/',
//     filename: 'main.js',
//   },

//   module: {
//     rules: [
//       {
//         test: [/\.vert$/, /\.frag$/],
//         use: 'raw-loader',
//       },
//     ],
//   },

//   plugins: [
//     new webpack.DefinePlugin({
//       CANVAS_RENDERER: JSON.stringify(true),
//       WEBGL_RENDERER: JSON.stringify(true),
//     }),
//   ],

// };

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
};
