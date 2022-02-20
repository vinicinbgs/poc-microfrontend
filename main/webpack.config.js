const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const deps = require('./package.json').dependencies;

const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3201,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|ts|js)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        ui: "ui@[uiUrl]/remoteEntry.js",
      },
      shared: [
        { react: { singleton: true }, requiredVersion: deps['react'] },
        { "react-dom": { singleton: true, requiredVersion: deps['react-dom'] } },
        { "react-router-dom": { singleton: true, requiredVersion: deps['react-router-dom'] } },
      ],
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

