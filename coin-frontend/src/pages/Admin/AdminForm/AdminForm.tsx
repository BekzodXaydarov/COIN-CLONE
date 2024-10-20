import { AiOutlineX } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Close } from "../../../store/Slices/modal/model";

const AdminForm = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(Close({}));
  };
  return (
    <>
      <div className="modal-head">
        <h1 className="modal-title">Create user</h1>
        <button className="close-btn" onClick={handleClose}>
          <AiOutlineX />
        </button>
      </div>
      <form>
        <input type="text" placeholder="Username:" className="modal-input" />
        <input type="email" placeholder="Email:" className="modal-input" />
        <input type="text" placeholder="Password:" className="modal-input" />
        <input type="text" placeholder="Active:" className="modal-input" />
        <button className="modal-create" type="submit">
          Create
        </button>
      </form>
    </>
  );
};

export default AdminForm;
