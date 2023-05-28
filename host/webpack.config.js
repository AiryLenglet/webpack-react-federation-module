const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "build"),
        },
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
};