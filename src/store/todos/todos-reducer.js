import { v4 as uuidv4 } from 'uuid';

const ADD_TODO = 'ADD-TODO';
const DELETE_TODO = 'DELETE-TODO';
const EDIT_TODO = 'EDIT-TODO';
const IS_COMPLITED_TODO = 'IS-COMPLITED-TODO';
const SET_FILTER = 'SET-FILTER';
const SET_SCROLL_VALUE = 'SET-SCROLL-VALUE';

const initialState = {
   filterTodo: 'Все',
   scrollValue: 0,
   todos: [
      { title: 'Купить хлеб', idTodo: uuidv4(), completed: false, timeDate: new Date().toLocaleString() },
      { title: 'Купить молоко', idTodo: uuidv4(), completed: false, timeDate: new Date().toLocaleString() },
      { title: 'Сделать ремонт', idTodo: uuidv4(), completed: false, timeDate: new Date().toLocaleString() },
      { title: 'Починить велосипед', idTodo: uuidv4(), completed: false, timeDate: new Date().toLocaleString() }
   ]
}

const todoReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TODO:
         return {
            ...state,
            todos: [{
               title: action.title,
               idTodo: uuidv4(),
               completed: action.completed,
               timeDate: action.timeDate
            }, ...state.todos]
         }
         
      case DELETE_TODO:
         return {
            ...state,
            todos: state.todos.filter((todo) => todo.idTodo !== action.idTodo)
         }
      
      case IS_COMPLITED_TODO:
         return {
            ...state,
            todos: state.todos.map((todo) => {
               if (todo.idTodo === action.todoID) {
                  return {
                     ...todo,
                     completed: !todo.completed
                  }
               }
               return todo
            })
         }
      
      case EDIT_TODO:
         return {
            ...state,
            todos: state.todos.map((todo) => {
               if (todo.idTodo === action.todoId) {
                  return {
                     ...todo,
                     completed: action.completed,
                     title: action.title,
                  }
               }
               return todo
            })
         }
      
      case SET_FILTER:
         return {
            ...state,
            filterTodo: action.filter
         }
      case SET_SCROLL_VALUE:
         return {
            ...state,
            scrollValue: action.scrollValue
         }
         
      default:
         return state;
   }
}


export const addTodo = (title, isComplited) => {
   return { type: ADD_TODO, title, timeDate: new Date().toLocaleString(), completed: isComplited }
};
export const editTodo = (title, todoId, isComplited ) => {
   return { type: EDIT_TODO, title, completed: isComplited, todoId}
};
export const deleteTodo = (idTodo) => {
   return { type: DELETE_TODO, idTodo }
};
export const isComlitedTodo = (todoID) => {
   return { type: IS_COMPLITED_TODO, todoID }
};
export const setFilterMeaning = (valueFilter) => {
   return { type: SET_FILTER, filter: valueFilter }
};
export const setScrollValue = (scrollValue) => {
   return { type: SET_SCROLL_VALUE, scrollValue }
};


export default todoReducer;