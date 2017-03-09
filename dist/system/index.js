'use strict';

System.register(['./mixpanel'], function (_export, _context) {
	"use strict";

	var Mixpanel;
	function configure(aurelia, configCallback) {
		try {
			var instance = aurelia.container.get(Mixpanel);
			if (configCallback !== undefined && typeof configCallback === 'function') {
				configCallback(instance);
			}

			aurelia.singleton(instance);
		} catch (err) {
			console.error("configure: %o", err);
		}
	}

	_export('configure', configure);

	return {
		setters: [function (_mixpanel) {
			Mixpanel = _mixpanel.Mixpanel;
		}],
		execute: function () {}
	};
});