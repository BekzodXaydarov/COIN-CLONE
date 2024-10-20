import { useForm } from "react-hook-form";
import "./Login.css";
import { IAdmin } from "../../types";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdmin>();
  const Submit = (data: IAdmin) => {
    console.log(data);
  };

  return (
    <main className="login-container">
      <form onSubmit={handleSubmit(Submit)}>
        <h1>Auth</h1>
        <label>Usernmae:</label>
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
