const path = require('path');
const webpack = require('webpack');
module.exports ={
	devtool:'inline-source-map',
	entry:{
	app:'./client/client.js',
	},
	output:{
		path:path.resolve(__dirname, './dist'),
		filename:'bundle.js',
		publicPath:'/'
	},
	plugins : [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	module : {
		loaders :[
			{
				test : /\.js$/,
				loader:'babel-loader',
				exclude: /node_modules/,
				query :{
					presets : ['react' , 'es2015' ,'react-hmre']
				}
			}
		]
	}
}
