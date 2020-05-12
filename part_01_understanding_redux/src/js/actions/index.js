import {  ADD_TODOITEM } from "../constants/action-types";

export function addTodoitem(payload) {
    return { type: ADD_TODOITEM, payload };
}