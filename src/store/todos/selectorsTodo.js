import { createSelector } from "reselect"


export const getTodos = (state) => {
   return state.todos.todos;
}
export const getFilterValue = (state) => {
   return state.todos.filterTodo;
}

export const getFilteredTodo = createSelector(getTodos, getFilterValue, (todos, filter) => {
   return todos.filter((todo) => {
      if (filter === 'Завершенные' && todo.completed) { 
         return todo;
      }
      if (filter === 'Незавершенные' && !todo.completed) { 
         return todo;
      }
      if (filter === 'Все') { 
         return todo;
      }
   })
})



