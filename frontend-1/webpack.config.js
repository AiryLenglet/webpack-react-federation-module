const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = (env, argv) => {

    const filename = argv.mode === 'production' ? '[name].[hash].js' : 'main.js';

    return {
        entry: "./src/index.js",
        output: {
            filename: filename,
            path: path.resolve(__dirname, "build"),
        },
        devServer: {
            static: {
              directory: path.join(__dirname, "build"),
            },
            port: 3001,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                }
            ],
        },
        resolve: {
            extensions: ["*", ".js", ".jsx"],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "public", "index.html"),
            }),
        ],
    };
};