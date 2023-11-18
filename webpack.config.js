const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const defaultConfig = {
  mode: "production",
  entry: {
    main: "./src/index.js",
    button: "./src/button.js",
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
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
      // maxSize: 20000,
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all",
          maxSize: 2000,
        },
        utils: {
          test(module) {
            return module.resource && module.resource.includes("/src/utils");
          },
          name: "common",
          chunks: "all",
          priority: 1,
          enforce: true, // To override minSize limit. https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroupscachegroupenforce
        },
      },
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
