const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3010,
    historyApiFallback: true
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|ts|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'ui',
      library: { type: 'var', name: 'ui' },
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: [
        { react: { singleton: true }, requiredVersion: deps['react'] },
        { "react-dom": { singleton: true, requiredVersion: deps['react-dom'] } },
        { "react-router-dom": { singleton: true, requiredVersion: deps['react-router-dom'] } },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
