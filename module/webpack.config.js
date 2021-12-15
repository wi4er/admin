const path = require("path");

module.exports = [{
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.js",
        libraryTarget: 'umd',
        library: 'cerberus_admin',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
}]
