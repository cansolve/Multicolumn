var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var argv = require('yargs').argv;
var enteyUrl = './';
var outputUrl = './';

var timetampe = (new Date()).getTime();
var Pro = false;
var Devtool = '#source-map';
var ONEMTHost = '';

if (argv.outputUrl) {
	outputUrl = require(argv.outputUrl);
}

var outputFile = argv.outputUrl ? [outputUrl + 'index.html', outputUrl + 'static'] : outputUrl + 'dist';
var path = argv.outputUrl ? outputUrl : outputUrl + 'dist';

if (argv.host) {
	ONEMTHost = argv.host;
}

if (argv.pro) {
	Pro = true;
	Devtool = '';
}

var plugins = [
	new CleanWebpackPlugin(outputFile),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.optimize.CommonsChunkPlugin('./static/js/common.js'),
	new HtmlWebpackPlugin({
		filename: './index.html',
		template: enteyUrl + 'template.html',
		title: argv.projectname && typeof argv.projectname === 'string' ? argv.projectname : '应用中心',
		host: ONEMTHost,
		time: timetampe,
		debug: Pro ? false : true,
		inject: true,
		excludeChunks: ['bundleCommon']
	})
];

if (argv.pro) {
	plugins.splice(2, 0, new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
	plugins.push(new ExtractTextPlugin('./static/css/style.[hash].css', {
		disable: false,
		allChunks: true,
	}))
}
else {
	plugins.push(new ExtractTextPlugin('./static/css/style.css', {
		disable: false,
		allChunks: true,
	}))
}

module.exports = {
	entry: {
		bundleIndex: enteyUrl + 'static/js/index.js',
		bundleCommon: [
			'react',
			'react-dom',
			'react-router',
			'react-mixin',
			'lodash',
			'md5',
			'moment',
			'react-dropzone',
			'superagent'
		]
	},
	output: {
		path: path,
		publicPath: '',
		filename: Pro ? './static/js/[name].[hash].min.js' : './static/js/[name].js',
		chunkFilename: Pro ? './static/js/[name].[hash].min.js' : './static/js/[name].js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015', 'stage-3']
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass!font'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader?-url&sourceMap", 'font-loader'),
			},
			{
				test: /\.(woff2?|eot|ttf|otf|svg)$/,
				loader: 'url?limit=10240&name=./static/font/[name].[ext]'
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				loader: 'url?limit=10240&name=./static/image/[name].[ext]'
			}
		]
	},
	devtool: Devtool,
	resolve: {
		extensions: ['', '.js', '.jsx', '.json', '.ts'],
		alias : {
			'@module' : __dirname + '/static/js/module/',
			'@tools' : __dirname + '/static/js/tools/',
			'@component' : __dirname + '/static/js/controller/component/',
			'@dispatch' : __dirname + '/static/js/controller/dispatch/',
			'@action' : __dirname + '/static/js/controller/action/',
			'@reducers' : __dirname + '/static/js/controller/reducers/',
			'@fetch' : __dirname + '/static/js/controller/tools/fetch'
		}
	},
	eslint: {
		configFile: './.eslintrc'
	},
	plugins: plugins
}