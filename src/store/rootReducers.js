import { combineReducers } from "redux";
import modalTodosReducer from "./todos/modal-todos-reducer";
import todoReducer from './todos/todos-reducer'



const reducers = combineReducers({
   todos: todoReducer,
   modalTodos: modalTodosReducer
});
export default reducers;