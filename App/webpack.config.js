const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // Generates an HTML file with the analysis
      openAnalyzer: false, // Set to true to automatically open the report in your default browser
    }),
  ],
};
