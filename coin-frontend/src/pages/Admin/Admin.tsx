import { useDispatch } from "react-redux";
import { Open } from "../../store/Slices/modal/model";
import AdminForm from "./AdminForm/AdminForm";
import Table from "../../components/ui/Table/Table";
const admin = [
  {
    id: 1,
    username: "Bekzod",
    email: "bekzod@gmail.com",
    is_active: false
  },
  {
    id: 1,
    username: "Bekzod",
    email: "bekzod@gmail.com",
    is_active: true
  },
]
const Admin = () => {
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(
      Open({
        Form: <AdminForm />,
      })
    );
  };
  const AdminTable = () => {
    return admin.map((item, index) => {
      return <tr key={index}>
        <td>{item.id}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td> <button className={item.is_active ? "active" : "unactive"}>{item.is_active ? "active" : "unactive"}</button> </td>
      </tr>
    })
  }
  return (
    <div className="route-container">
      <button className="create-btn" onClick={handleModal}>
        create Admin
      </button>
      <Table head={['id', 'username', 'email', 'is_active']} body={<AdminTable />} />
    </div>
  );
};

export default Admin;
