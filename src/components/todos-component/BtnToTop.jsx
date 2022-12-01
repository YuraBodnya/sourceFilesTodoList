import { FaArrowUp } from "react-icons/fa";

import style from './BtnToTop.module.css'

const BtnToTop = ({ scrollTop }) => {
   const handleUpButton = () => {
      window.scrollTo(0, 0);
   };
   return (
      scrollTop > 200 && <div onClick={() => handleUpButton()} className={style.btnToTop}><FaArrowUp /></div>
   )
}

export default BtnToTop;