const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./config');

const rootPaths = [
  path.join(__dirname, '../src/'),
  path.join(__dirname, '../node_modules/')
];

module.exports = {
  entry: {
    app: './src/app/app.js',
    vendor: [
      'react',
      'react-dom',
      'redux',
      'history',
      'react-redux',
      'react-router-dom',
      'react-router-redux'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, '../app/actions/'),
      assets: path.resolve(__dirname, '../assets/'),
      components: path.resolve(__dirname, '../app/components/'),
      config: path.resolve(__dirname, '../app/config/'),
      epics: path.resolve(__dirname, '../app/epics/'),
      reducers: path.resolve(__dirname, '../app/reducers'),
      screens: path.resolve(__dirname, '../app/screens'),
      selectors: path.resolve(__dirname, '../app/selectors/'),
      utility: path.resolve(__dirname, '../app/utility/')
    },
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.selectors.js',
      '.actions.js',
      '.reducer.js',
      '.epic.js',
      '.conf.js',
      '.const.js',
      '.scss'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-object-rest-spread'
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader', options: { includePaths: rootPaths } }
        ]
      },
      {
        test: /\.(ttf|eot|svg|jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: '/' }
          }
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  cache: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!handlebars-loader!./src/assets/templates/index.hbs',
      filename: 'index.html',
      date: new Date(),
      inject: true,
      ...config
    })
  ]
};
