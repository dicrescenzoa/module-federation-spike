const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (env, { mode }) => {
  const config = {
    entry: {
      main: './src/main.jsx',
    },
    output: {
      publicPath: 'http://localhost:3001/'
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
    plugins: [
      new ModuleFederationPlugin({
        name: "app1",
        library: { type: 'var', name: 'app1' },
        filename: 'remoteEntry.js',
        exposes: {
          'Characters':'./src/Characters'
        },
      })
    ],
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
