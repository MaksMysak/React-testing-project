/* eslint-disable */
const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
	config = rewireAliases.aliasesOptions({
		'@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
		'@mainBlocks': path.resolve(__dirname, `${paths.appSrc}/components/main/mainsection-blocks/`),
		'@image': path.resolve(__dirname, `${paths.appSrc}/images/`),
		'@uniHeader': path.resolve(__dirname, `${paths.appSrc}/components/main/mainsection-blocks/`)

	})(config, env);
  return config;
}