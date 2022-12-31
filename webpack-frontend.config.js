const path = require('path');

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "ts-loader"
            }
        }
    ]
  }
};