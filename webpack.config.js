"use strict";
const path = require("path");
const webpack = require("webpack");


module.exports = (env = {}) => ({
	entry: "./index.js",
	output: {
		publicPath: "auto",
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	mode: "production",
	plugins: [
		new webpack.container.ModuleFederationPlugin({
			name: "test",
			shared: {
				"react-dom": { singleton: true },
			},
		}),
	],
});
