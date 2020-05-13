import {  ADD_TODOITEM } from "../constants/action-types";

export function addTodoItem(payload) {
    return { type: ADD_TODOITEM, payload };
}