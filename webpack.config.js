const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '.env.development' });
}

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
              },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/',
    },
  };
};
