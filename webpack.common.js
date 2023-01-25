const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/main/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main-bundle-[hash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "scss"],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [new CleanWebpackPlugin()],
};
