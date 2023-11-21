const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NotifyPlugin = require("./plugins/notify-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
    button: "./src/button.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new NotifyPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack Tutorial",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
