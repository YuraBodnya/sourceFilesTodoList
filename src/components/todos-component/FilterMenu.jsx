import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import style from './FilterMenu.module.css';

const FilterMenu = ({ filterTodo, setFilterMeaning }) => {
   const [activeMenu, setActiveMenu] = useState(false);

   const setFilterValue = (e) => {
      setFilterMeaning(e.target.innerText);
      setActiveMenu(!activeMenu);
   }

   return (
      <div tabIndex={5}
         onBlur={() => setActiveMenu(false)}
         onClick={() => setActiveMenu(!activeMenu)}
         className={activeMenu ? `${style.wrapperFilterMenu} ${style.active}` : style.wrapperFilterMenu}>
         
         <div className={style.filterMenuValue} onClick={() => setActiveMenu(!activeMenu)}>{filterTodo}<IoIosArrowDown className={ style.filterTodoArrow} /></div>
         <ul  className={style.filterMenuList}>
            <li className={style.filterMenuItem} onClick={(e) => setFilterValue(e)}>Все</li>
            <li className={style.filterMenuItem} onClick={(e) => setFilterValue(e)}>Завершенные</li>
            <li className={style.filterMenuItem} onClick={(e) => setFilterValue(e)}>Незавершенные</li>
         </ul>

      </div>
   )
}

export default FilterMenu;