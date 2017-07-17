import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todoList.jsx';
import { number, func, string, arrayOf, shape, bool } from 'prop-types';
import _ from 'lodash';

class ListItems extends React.PureComponent {
    render() {
        return (
            <div className="list-items">
                <span className="total-todos">
                    Total Tasks: {this.props.totalTodos}
                </span>
                <ul id="to_do_list" className="to-do-list">
                    {_.map(this.props.todos, (todoItem, index) => <TodoList todoItem={todoItem} key={index} index={index}/>)}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => state;

ListItems.propTypes = {
    dispatch: func.isRequired,
    addData: string.isRequired,
    totalTodos: number.isRequired,
    todos: arrayOf(shape({
        name: string,
        completed: bool,
    })),
};

export default connect(mapStateToProps)(ListItems);
