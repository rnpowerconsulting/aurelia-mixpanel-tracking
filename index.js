'use strict';

import {Mixpanel} from './mixpanel';

export function configure (aurelia, configCallback) {
	try {
		const instance = aurelia.container.get(Mixpanel);
		if (configCallback !== undefined && typeof(configCallback) === 'function') {
			configCallback(instance);
		}

		aurelia.singleton(instance);
	}
	catch(err) {
		console.error("configure: %o", err);
	}
}