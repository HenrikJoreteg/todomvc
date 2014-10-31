'use strict';

var React = require('react');
var MainView = require('./views/main.jsx');
var Me = require('./models/me');
var Router = require('./router');


window.app = {
	init: function () {
		// Model representing state for
		// user using the app. Calling it
		// 'me' is a bit of convention but
		// it's basically 'app state'.
		this.me = new Me();
		// Our main view
		React.renderComponent(MainView(), document.getElementById('todoapp-wrapper'));

		// Create and fire up the router
		this.router = new Router();
		this.router.history.start();
	}
};

window.app.init();
