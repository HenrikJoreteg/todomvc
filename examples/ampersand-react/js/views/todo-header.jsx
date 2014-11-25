'use strict';

var React = require('react');
var ENTER_KEY = 13;

module.exports = React.createClass({
    render: function () {
        return (
            <header id="header">
                <h1>todos</h1>
                <input id="new-todo" placeholder="What needs to be done?" autofocus onKeyPress={this.handleKeyPress}/>
            </header>
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
