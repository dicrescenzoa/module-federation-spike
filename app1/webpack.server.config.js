const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

const path = require("path");

module.exports = (env, {mode}) => {
  const config = {
    entry: ["@babel/polyfill", './src/indexServer.jsx'],

    cache: false,

    target: 'async-node',

    optimization: {
      minimize: false
    },

    output: {
      path: path.resolve("./dist/server"),
      libraryTarget: "commonjs2",
      publicPath: 'http://localhost:3001/',
      chunkFilename: "[name].chunk.js",
    },

    externals: ["enhanced-resolve"],

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
        name: 'app1',
        library: { type: "commonjs2" },
        filename: "container.js",
        exposes: {
          "./SharedModule": './src/SharedModule'
        },
        shared: ["react", "react-dom"],
      }),
    ]
  };

  return config;
};
