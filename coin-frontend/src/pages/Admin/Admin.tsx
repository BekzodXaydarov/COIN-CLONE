import { useDispatch } from "react-redux";
import { Open } from "../../store/Slices/modal/model";
import Table from "../../components/ui/Table/Table";
import { useEffect } from "react";
import { IAdmin } from "../../types";
import { toast } from "react-toastify";
import axios from "axios";
import { api } from "../../components/utils";
import { useAdmin } from "../../store/useSelector";
import { setAdmins, updateAdmin } from "../../store/Slices/admin/admin";

const Admin = () => {
  const admin = useAdmin();

  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(
      Open({
        Form: "createAdmin",
      })
    );
  };
  const handleUpdate = (item: IAdmin) => {
    dispatch(
      Open({
        Form: "updateAdmin",
      })
    );
    dispatch(updateAdmin(item));
  };
  const fetchData = async () => {
    try {
      const responses = await axios.get(api + "/admin", {
        headers: {
          Authorization: `Bearer ${admin.admin?.token}`,
        },
      });

      dispatch(setAdmins(responses.data.admins));
    } catch (e: any) {
      toast.error(e.message || "Error");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await axios.get(api + "/admin", {
          headers: {
            Authorization: `Bearer ${admin.admin?.token}`,
          },
        });

        dispatch(setAdmins(responses.data.admins));
        toast.success("List of Admin");
      } catch (e: any) {
        toast.error(e.message || "Error");
      }
    };
    fetchData();
  }, []);
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(api + "/admin/" + id, {
        headers: {
          Authorization: `Bearer ${admin.admin?.token}`,
        },
      });
      fetchData();
      toast.success("Admin deleted");
    } catch (e: any) {
      toast.error(e.message || "Error");
    }
  };
  const AdminTable = () => {
    return admin?.admins?.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.username}</td>
          <td>{item.email}</td>
          <td className="actions">
            <button
              className="btn-delete"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
            <button className="btn-update" onClick={() => handleUpdate(item)}>
              Update
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="route-container">
      <button className="create-btn" onClick={handleModal}>
        create Admin
      </button>
      <Table
        head={["id", "username", "email", "actions"]}
        body={<AdminTable />}
        foot={<td>Admin: {admin.admins.length}</td>}
      />
    </div>
  );
};
export default Admin;
