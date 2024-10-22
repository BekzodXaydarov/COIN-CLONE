import { useForm } from "react-hook-form";
import "./Login.css";
import { IAdmin } from "../../types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { api } from "../../components/utils";
import { setAdmin } from "../../store/Slices/admin/admin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdmin>();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Submit = async (data: IAdmin) => {
    try {
      const responses = await axios.post(api + "/adminLogin", data)
      dispatch(setAdmin(responses.data.token))
      navigate("/")
      toast.success("Login is successfully")
    }
    catch (e: any) {
      toast.error(e.message || "Error")
    }
  };

  return (
    <main className="login-container">
      <form onSubmit={handleSubmit(Submit)}>
        <h1>Auth</h1>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter your username"
          {...register("username", {
            required: true,
          })}
          className={errors.username ? "error_input" : "success-input"}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: true,
          })}
          className={errors.password ? "error_input" : "success-input"}
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;
