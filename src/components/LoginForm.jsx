import useForm from "../hooks/useForm";
import { useAuth } from "../context/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const { values, handleChange } = useForm({ username: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    login(values.username, values.password);
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Login</h2>
      <input
        className="input"
        placeholder="Username"
        name="username"
        value={values.username}
        onChange={handleChange}
      />
      <input
        className="input"
        placeholder="Password"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button className="btn primary">Login</button>
    </form>
  );
}
