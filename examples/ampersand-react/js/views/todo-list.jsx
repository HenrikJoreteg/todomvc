'use strict';
/*global app */

var React = require('react');

var TodoComponent = require('./todo.jsx');
var ampersandMixin = require('./ampersand-react-mixin');


module.exports = React.createClass({
    mixins: [ampersandMixin],

    getFilteredTodos: function () {
        var filter = this.props.filter;

        return this.props.todos.filter((todo) => {
            if (filter === 'all') { return true; }
            if (filter === 'active') return !todo.completed;
            if (filter === 'completed') return todo.completed;
        });
    },

    render: function () {
        var filter = this.props.filter;

        var filteredTodos = this.getFilteredTodos();

        return (
            <section id="main">
                <input id="toggle-all" type="checkbox" onChange={this.toggleAll}/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list">
                    { filteredTodos.map( (todo) => <TodoComponent todo={todo} key={todo.id} />) }
                </ul>
            </section>
        );
    },

    toggleAll: function (e) {
        this.getFilteredTodos().map(todo => todo.completed = e.target.checked);
    }
});
