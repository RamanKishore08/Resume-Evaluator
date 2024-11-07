module.exports = function override(config) {
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader'],
      exclude: /node_modules\/html2pdf\.js/,
    });
    return config;
  };
  