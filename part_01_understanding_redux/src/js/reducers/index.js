import { ADD_TODOITEM } from "../constants/action-types";

const initialState = {
    todolist: []
}

function rootReducer(state = initialState, action) {
    if(action.type === ADD_TODOITEM) {
        return Object.assign({}, state, {
            todolist: state.todolist.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;