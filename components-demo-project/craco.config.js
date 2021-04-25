const path = require("path");
module.exports = {
  webpack: {
    alias: {
       'react': path.resolve('./node_modules/react'),
       'react-router-dom': path.resolve('./node_modules/react-router-dom'),
       'react-redux': path.resolve('./node_modules/react-redux')
    },
    plugins: {
      remove: ['HotModuleReplacementPlugin',] // not works
    }
  }
}
