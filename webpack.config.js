const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const defaultConfig = {
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
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 100,
    },
  },
};

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
};

module.exports = (env) => {
  if (env.development) {
    return { ...defaultConfig, ...devConfig };
  }
  return defaultConfig;
};
