import FilterMenu from './FilterMenu';
import Todo from './Todo';
import style from './TodoList.module.css'

const TodoList = ({ todos, addTodo, deleteTodo, isActiveModal, editTodoTextBtn, addTodoTextBtn, isComlitedTodo, filterTodo, setFilterMeaning }) => {
   const activeBtn = () => {
      isActiveModal();
      addTodoTextBtn()
   }

   return (
      <div className={style.wrapperTodos}>
         <h1 className={style.todoListTitle}>Список дел</h1>

         <div className={style.actionTodos}>
            <button className={style.addTodoBtn} onClick={() => activeBtn()}>Добавить</button>
            <div className={style.filterTodoBtn}><FilterMenu filterTodo={filterTodo} setFilterMeaning={setFilterMeaning} /></div>
         </div>

         <div className={style.todoList}>
            <ul className={style.todos}>
               {todos.map((todo,index) => <Todo
                  key={todo.idTodo}
                  {...todo}
                  index={index}
                  addTodo={addTodo}
                  deleteTodo={deleteTodo}
                  isActiveModal={isActiveModal}
                  editTodoTextBtn={editTodoTextBtn}
                  isComlitedTodo={isComlitedTodo}
                  />)}
            </ul>
         </div>
      </div>
   )
}

export default TodoList;