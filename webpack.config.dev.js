const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//import webpack from "webpack";
//import path from "path";
//import HtmlWebpackPlugin from "html-webpack-plugin";

process.env.NODE_ENV = "development";

//export default {
module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map", //Source maps let us see the source code when debugging in the browser.
  entry: "./src/index.js",
  output: {
    //in-memory virtual folder in dev mode
    path: path.resolve(__dirname, "build"),
    publicPath: "/", //public URL of the output directory in the browser
    filename: "bundle.js",
  },
  devServer: {
    //use webpack to serve the APP
    stats: "minimal", //minimal message at console
    overlay: true,
    historyApiFallback: true, //all requests will be sent to index.html and will be handled by react router
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: [
    //declare only one plugin here, simplify the creation of the HTML file
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  //tell webpack what file to handle
  module: {
    //with an array of rules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
