var path = require('path');


module.exports = {
   entry: {
     app:['webpack-dev-server/client?http://0.0.0.0:9090','./src/index.js']
   },

   output: {
     path:"http://127.0.0.1:9090/public",
     filename: 'bundle.js',
     publicPath: ''
   },
   module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-3' }
    ]
  }
}
