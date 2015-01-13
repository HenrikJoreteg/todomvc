'use strict';
/*global app */

var React = require('react');

var TodoHeader = require('./todo-header.jsx');
var TodoFooter = require('./todo-footer.jsx');
var TodoList = require('./todo-list.jsx');


module.exports = React.createClass({
	render: function () {
		return (
			<section id="todoapp">
                <TodoHeader todos={this.props.todos} />
                <TodoList todos={this.props.todos} filter={this.props.filter} />
                <TodoFooter todos={this.props.todos} filter={this.props.filter} />
	        </section>
		);
	}
});
