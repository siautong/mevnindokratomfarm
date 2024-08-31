const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js', // Main entry file for your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // JavaScript and JSX files
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Adjust presets as needed
          }
        }
      },
      // CSS and SCSS files
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // Image files
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src/assets', // Adjust as needed
            }
          }
        ]
      },
      // Exclude PHP files from being processed
      {
        test: /\.php$/,
        use: 'null-loader'
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.scss']
  }
};
