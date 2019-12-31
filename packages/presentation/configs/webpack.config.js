var path = require("path");
var webpack = require("webpack");

var rootDir = path.resolve(__dirname, "../");
var srcDir = path.join(rootDir, "./src");
var distDir = path.join(rootDir, "./dist");
var indexFilePath = path.join(srcDir, "./index");
var tsConfigFilePath = path.join(rootDir, "./tsconfig.json");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: [
    // "@babel/polyfill",
    "webpack-hot-middleware/client",
    "react-hot-loader/patch",
    indexFilePath
  ],
  output: {
    path: distDir,
    filename: "bundle.js",
    publicPath: "/dist"
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: { "react-dom": "@hot-loader/react-dom" },
    extensions: [".ts", ".tsx", ".css", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        exclude: /node_modules/,
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
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {
              configFileName: tsConfigFilePath
            }
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
            loader: "@svgr/webpack",
            options: {
              dimensions: false
            }
          },
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
