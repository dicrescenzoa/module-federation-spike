module.exports = {
  entry: {
    server: './src/server.jsx',
  },
  target: 'node',
  output: {
    libraryTarget: "commonjs2",
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
              emit: false,
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  }
};
