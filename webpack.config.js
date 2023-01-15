const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/main.js"
  },
  output: {
    path: dist,
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js"],
  },
  devServer: {
    static: dist,
    open: false,
  },
  plugins: [
    new CopyPlugin([
      path.resolve(__dirname, "static")
    ]),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "lib"),
      outDir: path.resolve(__dirname, "dist/lib"),
      extraArgs: "--target web"
    })
  ],
};
