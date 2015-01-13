'use strict';
/*global app */

var React = require('react');
var Router = require('ampersand-router');
var TodoApp = require('./views/todo-app.jsx');

module.exports = Router.extend({
	routes: {
		'*filter': 'setFilter'
	},
	setFilter: function (arg) {
        var filter = arg || 'all';
		app.me.mode = arg || 'all';

		React.renderComponent(
            <TodoApp filter={filter} todos={app.me.todos} />,
            document.getElementById('todoapp-wrapper')
        );
	}
});
