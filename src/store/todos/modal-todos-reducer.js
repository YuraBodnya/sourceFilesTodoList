

const IS_ACTIVE_MODAL = 'IS-ACTIVE-MODAL';
const SET_TITLE = 'SET-TITLE';
const EDIT_TODO_TEXT = 'EDIT-TODO-TEXT';
const ADD_TODO_TEXT = 'ADD-TODO-TEXT';
const SET_COMPLITED_TODO = 'SET-COMPLITED-TODO';

const initialState = {
   title: '',
   activeModal: false,
   aditedTodo: false,
   isComplited: false,
   editTodoId: ''
}

const modalTodosReducer = (state = initialState, action) => {
   switch (action.type) {
      case IS_ACTIVE_MODAL:
         return {
            ...state,
            activeModal: !state.activeModal
         }
      case SET_TITLE: {
         return {
            ...state,
            title: action.title
         }
      }
      case EDIT_TODO_TEXT: {
         return {
            ...state,
            aditedTodo: true,
            title: action.title,
            editTodoId: action.idTodo,
            isComplited: action.completed
         }
      }
      case ADD_TODO_TEXT: {
         return {
            ...state,
            aditedTodo: false
         }
      }
      case SET_COMPLITED_TODO: {
         return {
            ...state,
            isComplited: action.isComplited
         }
      }
      default:
         return state
   }
}

export const isActiveModal = () => {
   return {
      type: IS_ACTIVE_MODAL
   }
}
export const setTitle = (title) => {
   return {
      type: SET_TITLE,
      title
   }
}

export const editTodoTextBtn = (title, idTodo, completed) => {
   return {
      type: EDIT_TODO_TEXT,
      title,
      idTodo,
      completed
   }
}
export const addTodoTextBtn = () => {
   return {
      type: ADD_TODO_TEXT
   }
}
export const isComlitedTodo = (complitedTodo) => {
   return {
      type: SET_COMPLITED_TODO,
      isComplited: complitedTodo
   }
}



export default modalTodosReducer;