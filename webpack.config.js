const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets" }, // copies to dist/assets
      ],
    }),
  ],
  devServer: {
    static: "./dist",
    open: true,
    hot: true,
  },
  mode: "development",
};
