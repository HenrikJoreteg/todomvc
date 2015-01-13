'use strict';
/*global app */

var View = require('ampersand-view');
var TodoView = require('./todo');
var ENTER_KEY = 13;
var template = require('../templates/main.jade');
var vdomMixin = require('ampersand-virtual-dom-mixin');


module.exports = View.extend(vdomMixin, {
    template: template,
	events: {
		'keypress [data-hook~=todo-input]': 'handleMainInput',
		'click [data-hook~=mark-all]': 'handleMarkAllClick',
		'click [data-hook~=clear-completed]': 'handleClearClick'
	},
	// cache
	initialize: function () {
        this.listenTo(app.me.todos, 'all', this.render.bind(this));
        this.listenTo(app.me, 'all', this.render.bind(this));
	},

    render: function () {
        this.renderWithTemplate();
    },

    onFirstRender: function () {
		this.renderCollection(app.me.todos.subset, TodoView, this.queryByHook('todo-container'));
		this.mainInput = this.queryByHook('todo-input');
    },

	// handles DOM event from main input
	handleMainInput: function (e) {
		var val = this.mainInput.value.trim();
		if (e.which === ENTER_KEY && val) {
			app.me.todos.add({title: val});
			this.mainInput.value = '';
		}
	},
	// Here we set all to state provided.
	handleMarkAllClick: function () {
		var targetState = !app.me.allCompleted;
		app.me.todos.each(function (todo) {
			todo.completed = targetState;
		});
	},
	// Handler for clear click
	handleClearClick: function () {
		app.me.todos.clearCompleted();
	}
});
