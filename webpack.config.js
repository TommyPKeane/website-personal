/**
 * Webpack Build and Run Config
 *
 * This is use as a replacement for `react-scripts` while using React 18 beta.
 *
 * References:
 * - https://dev.to/nikhilkumaran/don-t-use-create-react-app-how-you-can-set-up-your-own-reactjs-boilerplate-43l0
 * - https://www.developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/
 */
const path = require("path",);
const HtmlWebPackPlugin = require("html-webpack-plugin",);
const MiniCssExtractPlugin = require("mini-css-extract-plugin",);


const isDevelopment = (process.env.NODE_ENV === "development");


module.exports = {
  output: {
    path: path.resolve(__dirname, "build",),
    filename: "bundle.js",
  },
  resolve: {
    modules: [path.join(__dirname, "src",), "node_modules",],
    alias: {
      react: path.join(__dirname, "node_modules", "react",),
    },
    extensions: [".js", ".jsx", ".scss",],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          {
            loader: isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          {
            loader: isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin(
      {
        template: "./public/index.html",
      },
    ),
    new MiniCssExtractPlugin(
      {
        filename: isDevelopment ? "[name].css" : "[name].[hash].css",
        chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
      },
    ),
  ],
};
