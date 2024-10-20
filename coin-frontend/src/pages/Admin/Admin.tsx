import { useDispatch } from "react-redux";
import { Open } from "../../store/Slices/modal/model";
import AdminForm from "./AdminForm/AdminForm";

const Admin = () => {
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(
      Open({
        Form: <AdminForm />,
      })
    );
  };
  return (
    <div className="route-container">
      <button className="create-btn" onClick={handleModal}>
        create Admin
      </button>
    </div>
  );
};

export default Admin;
