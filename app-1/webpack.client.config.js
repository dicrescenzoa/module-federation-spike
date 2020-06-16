const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, { mode }) => {
  const config = {
    entry: {
      main: './src/main.jsx',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(svg|png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: 'assets',
                name: '[name].[ext]',
              }
            }
          ]
        },
      ]
    },
    plugins: [],
    resolve: {
      extensions: ["*", ".js", ".jsx"],
    }
  };

  if(mode === 'development') {
    config.plugins.push(new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }));
  }

  return config;
};
