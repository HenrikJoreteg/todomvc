'use strict';
/*global app */

var React = require('react');
var TodoComponent = require('./todo.jsx');
var ampersandMixin = require('./ampersand-react-mixin');
var ENTER_KEY = 13;


module.exports = React.createClass({
	mixins: [ampersandMixin],
	getInitialState: function () {
		this.props = {
			me: app.me,
			todos: app.me.todos
		};
		return {};
	},
	render: function () {
		var me = this.props.me;
		var plural = me.activeCount !== 0;

		return (
			<section id="todoapp">
				<header id="header">
		            <h1>todos</h1>
		            <input id="new-todo" placeholder="What needs to be done?" autofocus onKeyPress={this.handleKeyPress}/>
		        </header>
		        <section id="main">
		            <input id="toggle-all" type="checkbox" />
		            <label htmlFor="toggle-all">Mark all as complete</label>
		            <ul id="todo-list">{
	            	me.todos.map(function (todo) {
	            		return (
	            			<TodoComponent todo={todo} key={todo.id}/>
	            		);
	            	})
				}</ul>
		        </section>
		        <footer id="footer">
		            <span id="todo-count">{me.activeCount} item{plural ? 's' : ''} left</span>
		            <ul id="filters">
		                <li>
		                    <a className="selected" href="#/">All</a>
		                </li>
		                <li>
		                    <a href="#/active">Active</a>
		                </li>
		                <li>
		                    <a href="#/completed">Completed</a>
		                </li>
		            </ul>
		            <button id="clear-completed">Clear completed (<span>1</span>)</button>
		        </footer>
	        </section>
		);
	},
	handleKeyPress: function (e) {
		var val = e.target.value.trim();
		if (val && e.which === ENTER_KEY) {
			this.props.todos.add({title: val});
			e.target.value = '';
		}
	}
});
