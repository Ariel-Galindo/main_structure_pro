const path = require('path');
let mode = "development";

// Check if Environment is in production/development.
if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {

    // Mode configuration.
    mode: mode,

    // Output file configuration.
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: "babel-loader" }
                ]
            },
        ]
    },

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
    }
}