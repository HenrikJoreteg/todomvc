'use strict';

var React = require('react');
var ampersandMixin = require('./ampersand-react-mixin');

module.exports = React.createClass({
    mixins: [ampersandMixin],

    render: function () {
        var todos = this.props.todos;
        var filter = this.props.filter;

        var activeCount = todos.filter(todo => !todo.completed).length;
        var completedCount = todos.filter(todo => todo.completed).length;
        var plural = activeCount !== 1;

        var isSelected = function (testValue) {
            return testValue === filter ? 'selected' : null;
        };

        return (
            <footer id="footer">
                <span id="todo-count">{activeCount} item{plural ? 's' : ''} left</span>
                <ul id="filters">
                    <li>
                        <a className={isSelected('all')} href="#/">All</a>
                    </li>
                    <li>
                        <a className={isSelected('active')} href="#/active">Active</a>
                    </li>
                    <li>
                        <a className={isSelected('completed')} href="#/completed">Completed</a>
                    </li>
                </ul>
                <button id="clear-completed" onClick={todos.clearCompleted.bind(todos)}>
                    Clear completed (<span>{completedCount}</span>)
                </button>
            </footer>
        );
    }
});
