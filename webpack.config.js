const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
let mode = "development";
let target = "web";

// Check if Environment is in production/development.
if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

module.exports = {

    // Mode configuration.
    mode: mode,
    target: target,

    // Output file configuration.
    entry: ["./src/js/index.js", "./src/styles/index.scss"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: "babel-loader" }
                ]
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/bundle.css",
        })
    ],

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
};