var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var browserConfig = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [new webpack.DefinePlugin({__isBrowser__: "true"})]
}

module.exports = browserConfig
