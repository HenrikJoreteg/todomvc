'use strict';

var React = require('react');
var mixin = require('./ampersand-react-mixin');
var ENTER_KEY = 13;
var ESC_KEY = 27;


module.exports = React.createClass({
	mixins: [mixin],
	render: function () {
		var todo = this.props.todo;
		
		if (todo.editing) {
			return (
				<li className="editing">
					<input
						className="edit"
						defaultValue={todo.title}
						onBlur={this.handleEditBlur}
						onKeyPress={this.handleKeyPress} />
				</li>
			)
		} else {
			return (
				<li onDoubleClick={this.handleDoubleClick}>
					<div className="view">
						<input type="checkbox" className="toggle" checked={todo.completed} onChange={this.completeTodo}/>
						<label>{todo.title}</label>
						<button className="destroy" onClick={this.handleDestroyClick}></button>
					</div>
				</li>
			)
		}
	},
    completeTodo: function (e) {
        this.props.todo.completed = e.target.checked;
    },
	handleDestroyClick: function () {
		this.props.todo.destroy();
	},
	handleDoubleClick: function () {
		this.props.todo.editing = true;
	},
	handleEditBlur: function (e) {
		var val = e.target.value.trim();
		var todo = this.props.todo;
		if (!val) {
			todo.destroy();
		} else {
			todo.set({
				title: val,
				editing: false
			});
		}
	},
	handleKeyPress: function (e) {
		if (e.which === ENTER_KEY) {
			e.target.blur();
		}
	},
	componentDidUpdate: function () {
		if (this.props.todo.editing) {
			this.getDOMNode().querySelector('input').focus();
		}
	}
});
