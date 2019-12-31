/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

var rootDir = path.resolve(__dirname, "../");
var srcDir = path.join(rootDir, "./src");
var dstDir = path.join(rootDir, "./dist");
var indexFile = path.join(srcDir, "./index.js");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: [
    "@babel/polyfill",
    "webpack-hot-middleware/client",
    "react-hot-loader/patch",
    indexFile
  ],
  output: {
    path: dstDir,
    filename: "bundle.js",
    publicPath: "/dist"
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: { "react-dom": "@hot-loader/react-dom" }
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",

            options: {
              gfm: false
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        include: srcDir
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "raw-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",

            options: {
              limit: 10000,
              mimetype: "image/svg+xml"
            }
          }
        ],
        include: srcDir
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",

            options: {
              mimetype: "image/png"
            }
          }
        ],
        include: srcDir
      },
      {
        test: /\.gif$/,
        use: [
          {
            loader: "url-loader",

            options: {
              mimetype: "image/gif"
            }
          }
        ],
        include: srcDir
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "url-loader",

            options: {
              mimetype: "image/jpg"
            }
          }
        ],
        include: srcDir
      }
    ]
  }
};
