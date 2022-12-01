import toast from 'react-hot-toast';

import { MdDelete } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { BsCheckLg } from "react-icons/bs";

import style from './Todo.module.css';

const Todo = ({ title, timeDate, idTodo, deleteTodo, completed, isActiveModal, editTodoTextBtn, isComlitedTodo, index }) => {

   const editTodo = (title, idTodo, completed) => {
      editTodoTextBtn(title, idTodo, completed);
      isActiveModal();
   }

   const deleteBtn = () => {
      deleteTodo(idTodo);
      toast.success('Успешно удалено!', {
         style: {
            fontSize: '1.5rem'
         },
      })
   }

   return (
      <li className={style.todo}>
         <div className={style.todoCol}>
            <div className={style.checkboxContainer}>
               <input id={`todoCheckbox${index}`} className={style.todoCheckBox} checked={completed} onChange={() => isComlitedTodo(idTodo)} type="checkbox" />
               <label htmlFor={`todoCheckbox${index}`} className={completed ? `${style.checkboxLabel} ${style.active}`: style.checkboxLabel}>
                  <BsCheckLg/>
               </label>
            </div>
            <div className={style.todoDesc}>
               <p className={completed ? `${style.todoTitle} ${style.todoTitleComplited}` : style.todoTitle}>{title}</p>
               <p className={style.todoDate}>{timeDate}</p>
            </div>
         </div>
         <div className={style.todoActions}>
            <button className={style.deleteBtn} onClick={() => { deleteBtn(idTodo) }}>удалить <MdDelete/></button>
            <button className={style.editBtn} onClick={() => { editTodo(title, idTodo, completed) }}>редактировать <GrEdit/></button>
         </div>
      </li>       
   )
}

export default Todo;