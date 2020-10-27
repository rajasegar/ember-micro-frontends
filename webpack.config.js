/*
const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "ember-mf";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
  });

  const merge = webpackMerge({
    customizeArray: webpackMerge.unique(
      "plugins",
      ["HtmlWebpackPlugin"],
      (plugin) => plugin.constructor && plugin.constructor.name
    ),
  });

  return merge(
    {
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: "src/index.ejs",
          templateParameters: {
            isLocal: webpackConfigEnv && webpackConfigEnv.isLocal === "true",
            orgName,
          },
        }),
      ],
    },
    defaultConfig,
    {
      // modify the webpack config however you'd like to by adding to this object
    }
  );
};
*/

const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
  entry: {
    "root-application": "src/ember-mf-root-config.js",
  },
  output: {
    publicPath: "/dist/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  node: {
    fs: "empty",
  },
  resolve: {
    modules: [__dirname, "node_modules"],
  },
  optimization: {
    splitChunks: {
      name: "common-dependencies.js",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "index.html"),
          to: path.join(__dirname, "dist"),
        },
        {
          from: path.join(__dirname, "src/planets/dist/assets/planets.js"),
          to: path.join(__dirname, "dist/planets"),
        },
        {
          from: path.join(__dirname, "src/planets/dist/assets/vendor.js"),
          to: path.join(__dirname, "dist/planets"),
        },
        {
          from: path.join(__dirname, "src/people/dist/assets/people.js"),
          to: path.join(__dirname, "dist/people"),
        },
        {
          from: path.join(__dirname, "src/people/dist/assets/vendor.js"),
          to: path.join(__dirname, "dist/people"),
        },
      ],
    }),
  ],
  devtool: "source-map",
  externals: [],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    writeToDisk: true,
    hot: true, //Hot module replacement
  },
};
