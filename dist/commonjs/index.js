'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.configure = configure;

var _mixpanel = require('./mixpanel');

function configure(aurelia, configCallback) {
	try {
		var instance = aurelia.container.get(_mixpanel.Mixpanel);
		if (configCallback !== undefined && typeof configCallback === 'function') {
			configCallback(instance);
		}

		aurelia.singleton(instance);
	} catch (err) {
		console.error("configure: %o", err);
	}
}