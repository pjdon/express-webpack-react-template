module.exports = {
  output: {
    filename: '[name].js'
  },
  mode: 'development',
  devServer: {
    headers: {
      //"Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    historyApiFallback: true
  }
};