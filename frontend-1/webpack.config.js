const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

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
            new ModuleFederationPlugin({
                name: 'fe_app_1',
                filename: 'remoteEntry.js',
                exposes: {
                    './FeApp1': './src/FeApp1.jsx',
                },
            }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "public", "index.html"),
            }),
        ],
    };
};