const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

const path = require("path");

module.exports = (env, {mode}) => {
  const config = {
    entry: './src/server/index',

    cache: false,

    target: 'async-node',

    optimization: {
      minimize: false
    },

    output: {
      path: path.resolve("./dist/server"),
      libraryTarget: "commonjs2",
      publicPath: 'http://localhost:3002/',
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
        }
      ]
    },

    plugins: [
      new ModuleFederationPlugin({
        name: 'app2',
        library: { type: "commonjs2" },
        filename: "container.js",
        remotes: {
          app1: path.resolve(
            __dirname,
            "../app1/dist/server/container.js"
          ),
          sharedModuleLibrary: path.resolve(
            __dirname,
            "../shared-module-library/dist/server/container.js"
          ),
        },
        shared: ["react", "react-dom"],
      }),
    ]
  };

  return config;
};
