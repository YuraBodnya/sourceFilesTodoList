import { connect } from "react-redux";

import { addTodo, deleteTodo, editTodo } from "../../store/todos/todos-reducer";
import { isActiveModal, setTitle, isComlitedTodo } from "../../store/todos/modal-todos-reducer";
import ModalTodo from "./ModalTodo";

const mapStateToProps = (state) => {
   return {
      modal: state.modalTodos
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addTodo: (title, isComplited) => {
         dispatch(addTodo(title, isComplited));
      },
      deleteTodo: (idTodo) => {
         dispatch(deleteTodo(idTodo))
      },
      isActiveModal: () => {
         dispatch(isActiveModal())
      },
      setTitle: (title) => {
         dispatch(setTitle(title))
      },
      isComlitedTodo: (comlitedTodo) => {
         dispatch(isComlitedTodo(comlitedTodo))
      },
      editTodo: (title, todoId, isComplited ) => {
         dispatch(editTodo(title, todoId, isComplited))
      },
   }
}

const ContainerModalTodo = connect(mapStateToProps, mapDispatchToProps)(ModalTodo);
export default ContainerModalTodo;