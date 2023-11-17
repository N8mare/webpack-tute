const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const defaultConfig = {
  mode: "production",
  entry: {
    main: {
      import: "./src/index.js",
      dependOn: "utils",
    },
    button: {
      import: "./src/button.js",
      dependOn: "utils",
    },
    utils: ["./src/utils/index.js", "./src/utils/singleton.js"],
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
    runtimeChunk: "single",
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
