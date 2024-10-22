import { AiOutlineX } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Close } from "../../../store/Slices/modal/model";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { IAdmin } from "../../../types";
import axios from "axios";
import { api } from "../../../components/utils";
import { useAdmin } from "../../../store/useSelector";
import { setAdmins } from "../../../store/Slices/admin/admin";

const createForm = () => {
  const { register, handleSubmit } = useForm<IAdmin>();
  const dispatch = useDispatch();
  const admin = useAdmin();
  const handleClose = () => {
    dispatch(Close({}));
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
  const Submit = async (data: IAdmin) => {
    try {
      data.is_active = data.is_active == "true";
      await axios.post(api + "/admin", data);
      handleClose();
      fetchData();
      toast.success("Admin created");
    } catch (e: any) {
      toast.error(e.message || "Error");
    }
  };
  return (
    <>
      <div className="modal-head">
        <h1 className="modal-title">Create user</h1>
        <button className="close-btn" onClick={handleClose}>
          <AiOutlineX />
        </button>
      </div>
      <form onSubmit={handleSubmit(Submit)}>
        <input
          type="text"
          placeholder="Username:"
          className="modal-input"
          {...register("username", { required: true })}
        />
        <input
          type="email"
          placeholder="Email:"
          className="modal-input"
          {...register("email", { required: true })}
        />
        <input
          type="text"
          placeholder="Password:"
          className="modal-input"
          {...register("password", { required: true })}
        />
        <input
          type="text"
          placeholder="Active:"
          className="modal-input"
          {...register("is_active", { required: true })}
        />
        <button className="modal-create" type="submit">
          Create
        </button>
      </form>
    </>
  );
};

const updateForm = () => {
  const admin = useAdmin();
  const { register, handleSubmit } = useForm<IAdmin>({
    defaultValues: {
      username: admin.updateAdmin.username,
      email: admin.updateAdmin.email,
      password: "",
      is_active: admin.updateAdmin.is_active,
    }
  });
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(Close({}));
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
  const Submit = async (data: IAdmin) => {
    try {
      data.is_active = data.is_active == "true";
      await axios.put(api + "/admin/" + admin.updateAdmin.id, data);
      handleClose();
      fetchData();
      toast.success("Admin updated");
    } catch (e: any) {
      toast.error(e.message || "Error");
    }
  };
  return <>
     <div className="modal-head">
        <h1 className="modal-title">Update user</h1>
        <button className="close-btn" onClick={handleClose}>
          <AiOutlineX />
        </button>
      </div>
      <form onSubmit={handleSubmit(Submit)}>
        <input
          type="text"
          placeholder="Username:"
          className="modal-input"
          {...register("username", { required: true })}
        />
        <input
          type="email"
          placeholder="Email:"
          className="modal-input"
          {...register("email", { required: true })}
        />
        <input
          type="text"
          placeholder="Password:"
          className="modal-input"
          {...register("password", { required: true })}
        />
        <input
          type="text"
          placeholder="Active:"
          className="modal-input"
          {...register("is_active", { required: true })}
        />
        <button className="modal-create" type="submit">
          Update
        </button>
      </form>
  </>;
};


export { createForm,updateForm};
