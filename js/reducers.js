import { CHANGE_TODO_DATA, ADD_TODO, DELETE_TODO, STRIKE_OFF } from './actions';
import _ from 'lodash';

const DEFAULT_STATE = {
    addData: '',
    totalTodos: 0,
    todos: [],
};

const changeTodoData = (state, action) => {
    const newState = {};
    _.assign(newState, state, { addData: action.todoData });
    return newState;
};

const addTodo = (state, action) => {
    const newState = _.defaults({}, state);
    newState.todos = _.concat(state.todos, {
        name: action.todoName,
        completed: false,
    });
    newState.totalTodos++;
    return newState;
};

const deleteTodo = (state, action) => {
    const newState = _.defaults({}, state);
    newState.todos = _.clone(state.todos);
    newState.todos.splice(action.index, 1);
    newState.totalTodos--;
    return newState;
};

const strikeTodo = (state, action) => {
    const newState = _.defaults({}, state);
    newState.todos = _.clone(state.todos);
    newState.todos[action.index] = _.defaults({}, state.todos[action.index]);
    newState.todos[action.index].completed = true;
    return newState;
};

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case CHANGE_TODO_DATA:
            return changeTodoData(state, action);

        case ADD_TODO:
            return addTodo(state, action);

        case DELETE_TODO:
            return deleteTodo(state, action);

        case STRIKE_OFF:
            return strikeTodo(state, action);

        default:
            return state;
    }
};

export default rootReducer;
