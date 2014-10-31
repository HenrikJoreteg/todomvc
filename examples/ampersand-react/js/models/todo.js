'use strict';

// We're using 'ampersand-state' here instead of 'ampersand-model'
// because we don't need any of the RESTful
// methods for this app.
var State = require('ampersand-state');
var shortId = require('shortid');


module.exports = State.extend({
	initialize: function () {
		if (!this.id) {
			this.id = shortId.generate();
		}
	},

	// Properties this model will store
	props: {
		id: {
			type: 'string'
		},
		title: {
			type: 'string',
			default: ''
		},
		completed: {
			type: 'boolean',
			default: false
		}
	},

	// session properties work the same way as `props`
	// but will not be included when serializing.
	session: {
		editing: {
			type: 'boolean',
			default: false
		}
	},
	destroy: function () {
		if (this.collection) {
			this.collection.remove(this);
		}
	}
});
