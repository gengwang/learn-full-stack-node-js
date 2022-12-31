const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  target: "node",
  entry: {
    app: ["./src/server/server.ts"]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "server.js"
  },
  externals: [nodeExternals()],
};