const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
    }),
  ],
};
