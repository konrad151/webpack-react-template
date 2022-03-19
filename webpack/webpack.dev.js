const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
