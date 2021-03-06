const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = (env, {mode}) => {
  const config = {
    entry: './src/client/index',
    target: "web",
    cache: false,

    optimization: {
      minimize: false
    },

    output: {
      path: path.resolve("./dist/client"),
      publicPath: 'http://localhost:3003/',
      chunkFilename: "[name].chunk.js",
    },

    resolve: {
      extensions: ['.jsx', '.js', '.json']
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve('@babel/preset-react')]
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "/",
                hmr: true
              }
            },
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ]
        }
      ]
    },

    plugins: [
      new MiniCssExtractPlugin(),
      new ModuleFederationPlugin({
        name: 'sharedModuleLibrary',
        library: {type: 'var', name: 'sharedModuleLibrary'},
        filename: 'remoteEntry.js',
        remotes: {},
        exposes: {
          './SharedModules': './src/client/components',
        },
        shared: ["react", "react-dom"],
        // remotes will depend on host dependencies,
        // if the host does not have a dependency, the
        // remote will download its own.
      }),
    ]
  };

  if (mode === 'development') {
    config.devtool = 'source-map';
    config.plugins.push(new HtmlWebpackPlugin({
      template: './public/index.html'
    }));
  }

  return config;
};
