/* eslint-disable no-undef */
const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options = {}) => {
	const {MODE} = env;
	return {
		entry: "./src/index.js",
		mode: MODE,
		output: {
			path: path.resolve(__dirname, ".dist"),
			filename: "[name].[hash].js",
			publicPath: "/",
		},
		module: {
			rules: [
				{
					test: /\.(js|ts)$/,
					exclude: /node_modules/,
					loader: "babel-loader",
					options: {},
				},
				{
					test: /\.vue$/,
					loader: "vue-loader",
				},
				{
					test: /\.(css|s[ac]ss)$/i,
					use: [
						{
							loader: MODE === "production" ? MiniCssExtractPlugin.loader : "vue-style-loader",
							options: {},
						},
						{
							loader: "css-loader",
							options: {},
						},
						{
							loader: "sass-loader",
							options: {},
						},
					],
				},
				{
					test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
					type: "asset/resource",
				},
				{
					test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
					type: "asset",
					parser: {
						dataUrlCondition: {
							maxSize: 4 * 1024, // 4kb
						},
					},
				},
			],
		},
		optimization: {
			minimize: true,
		},
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./"),
			},
			descriptionFiles: ["package.json"],
			extensions: [".js", ".vue"],
			fallback: {
				// assert: require.resolve('assert'),
				// buffer: require.resolve('buffer'),
				// console: require.resolve('console-browserify'),
				// constants: require.resolve('constants-browserify'),
				// crypto: require.resolve('crypto-browserify'),
				// domain: require.resolve('domain-browser'),
				// events: require.resolve('events'),
				// http: require.resolve('stream-http'),
				// https: require.resolve('https-browserify'),
				// os: require.resolve('os-browserify/browser'),
				// path: require.resolve('path-browserify'),
				// punycode: require.resolve('punycode'),
				// process: require.resolve('process/browser'),
				// querystring: require.resolve('querystring-es3'),
				// stream: require.resolve('stream-browserify'),
				// string_decoder: require.resolve('string_decoder'),
				// sys: require.resolve('util'),
				// timers: require.resolve('timers-browserify'),
				// tty: require.resolve('tty-browserify'),
				// url: require.resolve('url'),
				// util: require.resolve('util'),
				// vm: require.resolve('vm-browserify'),
				// zlib: require.resolve('browserify-zlib'),
			},
		},

		plugins: [
			new MiniCssExtractPlugin({
				filename: "./css/[name].[hash].css",
				chunkFilename: "css/[name].[hash].css",
			}),
			new HtmlWebPackPlugin({
				title: "VUE-APP",
				template: "./public/index.html", // target
				filename: "index.html", // output
			}),
			new webpack.HotModuleReplacementPlugin(),
			new VueLoaderPlugin(),
		],
		devServer: {
			compress: true,
			historyApiFallback: true,
			hot: true,
			open: false,
			port: 3000,
			static: {
				directory: path.join(__dirname, "public"),
			},
			client: {
				// reconnect: true,
				reconnect: 10,
			},
			allowedHosts: [
				// wildcard
				"host.com",
				"subdomain.host.com",
				"subdomain2.host.com",
				"host2.com",
			],
		},
	};
};
