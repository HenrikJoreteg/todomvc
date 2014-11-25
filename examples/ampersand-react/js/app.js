'use strict';

var Me = require('./models/me');
var Router = require('./router.jsx');


window.app = {
	init: function () {
		// Model representing state for
		// user using the app. Calling it
		// 'me' is a bit of convention but
		// it's basically 'app state'.
		this.me = new Me();
		// Our main view

		// Create and fire up the router
		this.router = new Router();
		this.router.history.start();
	}
};

window.app.init();
