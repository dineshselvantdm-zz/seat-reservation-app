const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './public/javascripts/manifest.js',
  output: {
    filename: './public/javascripts/bundle.min.js'
  },
  plugins: [
        new UglifyJSPlugin({
        	comments: false,
	        minimize: true,
	        compress:{
          		drop_console: true
       		}
        })
       	
    ]
}