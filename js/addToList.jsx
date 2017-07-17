import React from 'react';
import { connect } from 'react-redux';
import { setTodoData, setAddTodo } from './actionCreater';
import { number, func, string, arrayOf, shape, bool } from 'prop-types';

class AddToList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleTodoData = this.handleTodoData.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }
    handleTodoData(event) {
        this.props.dispatch(setTodoData(event.target.value));
    }
    handleAddTodo() {
        this.props.dispatch(setAddTodo(this.props.addData));
    }
    render() {
        return (
            <div className="add-to-list">
                <label htmlFor="to_do_input">
                    Add To Do List
                </label>
                <input id="to_do_input" value={this.props.addData} onChange={this.handleTodoData}/>
                <input id="add_list_item" type="button" onClick={this.handleAddTodo} value="Add"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;
AddToList.propTypes = {
    dispatch: func.isRequired,
    addData: string.isRequired,
    totalTodos: number.isRequired,
    todos: arrayOf(shape({
        name: string,
        completed: bool,
    })),
};
export default connect(mapStateToProps)(AddToList);
