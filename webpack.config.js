const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPluging = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
        },
        // Exclude permite omitir archivos o carpetas especificas
        exclude: /node_modules/,
      },
      {
        test: /\.s?css|.styl$/i,
        use: [MiniCssExtractPluging.loader, 
          "css-loader",
          "stylus-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // CONFIGURACIÓN DEL PLUGIN
      inject: true, // INYECTA EL BUNDLE AL TEMPLATE HTML
      template: "./public/index.html", // LA RUTA AL TEMPLATE HTML
      filename: "./index.html", // NOMBRE FINAL DEL ARCHIVO
    }),
    new MiniCssExtractPluging(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
