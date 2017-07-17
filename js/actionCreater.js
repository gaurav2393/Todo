import { CHANGE_TODO_DATA, ADD_TODO, DELETE_TODO, STRIKE_OFF } from './actions';

export function setTodoData(todoData) {
    return {
        type: CHANGE_TODO_DATA,
        todoData,
    };
}

export function setAddTodo(todoName) {
    return {
        type: ADD_TODO,
        todoName,
    };
}

export function setDeleteTodo(todoName, index) {
    return {
        type: DELETE_TODO,
        todoName,
        index,
    };
}

export function setStrikeOff(todoName, index) {
    return {
        type: STRIKE_OFF,
        todoName,
        index,
    };
}
