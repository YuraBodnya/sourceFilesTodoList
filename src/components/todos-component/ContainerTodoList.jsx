import { connect } from "react-redux";
import { isActiveModal, editTodoTextBtn, addTodoTextBtn } from "../../store/todos/modal-todos-reducer";
import { getFilteredTodo, getFilterValue } from "../../store/todos/selectorsTodo";
import { deleteTodo, isComlitedTodo, setFilterMeaning  } from "../../store/todos/todos-reducer";
import TodoList from "./TodoList";

const mapStateToProps = (state) => {
   return {
      todos: getFilteredTodo(state),
      filterTodo: getFilterValue(state)
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      isActiveModal: () => {
         dispatch(isActiveModal())
      },
      deleteTodo: (idTodo) => {
         dispatch(deleteTodo(idTodo))
      },
      editTodoTextBtn: (title, idTodo, completed) => {
         dispatch(editTodoTextBtn(title, idTodo, completed))
      },
      addTodoTextBtn: () => {
         dispatch(addTodoTextBtn())
      },
      isComlitedTodo: (todoId) => {
         dispatch(isComlitedTodo(todoId))
      },
      setFilterMeaning: (valueFilter) => {
         dispatch(setFilterMeaning(valueFilter))
      },

   }
}

const ContainerTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default ContainerTodoList;