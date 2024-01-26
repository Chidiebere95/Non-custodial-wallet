// webpack.config.js
const path = require('path');

module.exports = {
  // ... other configurations

  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
      // Add other polyfills as needed
    },
  },
};
