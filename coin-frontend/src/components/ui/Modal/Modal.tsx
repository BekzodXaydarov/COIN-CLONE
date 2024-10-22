import { useModal } from "../../../store/useSelector";
import { forms } from "../../utils";
import "./Modal.css";

const Modal = () => {
  const modal = useModal();
  if (!modal.is_active) return null;
  const Form = forms.filter((item)=>item.name == modal.Form)[0]  
  return <div className="modal">{<Form.form />}</div>;
};

export default Modal;
