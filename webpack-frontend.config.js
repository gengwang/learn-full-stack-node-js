const path = require('path');

module.exports = {
  entry: './src/views/index.tsx',
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