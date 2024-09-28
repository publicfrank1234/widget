const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point for your React app
  output: {
    path: path.resolve(__dirname, "dist"), // Output folder (dist)
    filename: "bundle.js", // Name of the JavaScript bundle
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/, // Process CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Source HTML template
      filename: "widget.html", // Output HTML file in dist folder
    }),
  ],
  mode: "development", // Production build
};
