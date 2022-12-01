import BtnToTop from "./BtnToTop";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
   return {
      scrollTop: state.todos.scrollValue
   }
}


const ContainerBtnToTop = connect(mapStateToProps)(BtnToTop);

export default ContainerBtnToTop;
