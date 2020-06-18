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
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },

    plugins: [
      new ModuleFederationPlugin({
        name: 'sharedModuleLibrary',
        library: { type: "commonjs2" },
        filename: "container.js",
        exposes: {
          './Modules': './src/client/components/index'
        },
        shared: ["react", "react-dom"],
      }),
    ]
  };

  return config;
};
