import { useModal } from "../../../store/useSelector";
import "./Modal.css";

const Modal = () => {
  const modal = useModal();
  if (!modal.is_active) return null;
  console.log(modal);
  return <div className="modal">{modal.Form}</div>;
};

export default Modal;
