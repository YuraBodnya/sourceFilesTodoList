import { useState } from 'react';
import toast from 'react-hot-toast';
import { GrClose } from 'react-icons/gr';
import { IoIosArrowDown } from "react-icons/io";
import style from "./ModalTodo.module.css";

const ModalTodo = ({ isActiveModal, modal, addTodo, setTitle, isComlitedTodo, editTodo }) => {
   const [selectActive, setSelectActive] = useState(false);

   const optionAction = (e) => {
      if (e.target.innerText === 'Завершенные') {
         isComlitedTodo(true);
      } else {
         isComlitedTodo(false);
      }
      setSelectActive(!selectActive);
   }

   const changeTitle = (e) => {
      setTitle(e.target.value);
   }
   
   const acceptTodo = () => {
      if (modal.title.trim().length <= 0 || modal.title === '') {
         toast.error("Введите название", {
            style: {
               fontSize: '1.5rem'
            },
         })
         setTitle('');
         return;
      }
      if (!modal.aditedTodo) {
         addTodo(modal.title, modal.isComplited);
      } else {
         editTodo(modal.title, modal.editTodoId, modal.isComplited);
      }
      setTitle('');
      isActiveModal();
      isComlitedTodo(false);
      toast.success('Успешно добавлено!', {
         style: {
            fontSize: '1.5rem'
         },
      })
   }

   const searchEl = (e) => {
      if (selectActive && !e.target.closest(`.${style.modalTodoSelectValue}`)) setSelectActive(!selectActive);
   }
   const cencelBtn = () => {
      isActiveModal();
      setTitle('');
      isComlitedTodo(false);
   }
   return (
      (modal.activeModal && <div className={style.wrapperModalTodo} onClick={(e)=>{searchEl(e)}}>
         <div className={style.modalTodoBody}>
            <div className={style.modalTodoHeader}>
               <div className={style.modalTodoCloseIconBox} onClick={() => cencelBtn()}>
                  <GrClose className={style.modalTodoCloseIcon} />
               </div>
            </div>
            <div className={style.modalTodoContent}>
               <input className={style.modalTodoTitle} value={modal.title} autoFocus onChange={(e) => changeTitle(e)} type="text" placeholder="Введите текст" />
                  
               <div className={style.modalTodoSelect}>

                  <div className={selectActive ? `${style.modalTodoSelectValue} ${style.active}` : style.modalTodoSelectValue} onClick={() => setSelectActive(!selectActive)}>{modal.isComplited ? 'Завершенные' : 'Незавершенные'} <IoIosArrowDown className={ style.modalSelectArrow} /></div>
                  <ul className={selectActive ? `${style.selectList} ${style.active}` : style.selectList}>
                     <li className={style.selectItem} onClick={(e) => optionAction(e)}>Завершенные</li>
                     <li className={style.selectItem} onClick={(e) => optionAction(e)}>Незавершенные</li>
                  </ul>
                  
               </div>
               
               <div className={style.modalTodoFooter}>
                  <button className={style.modalTodoAcceptBtn} onClick={() => acceptTodo()}>{(modal.aditedTodo ? 'редактировать':'добавить')}</button>
                  <button className={style.modalTodoCancelBtn} onClick={() => cencelBtn()}>отмена</button>
               </div>
               
            </div>
         </div>
      </div>
      )
   )
}

export default ModalTodo;
