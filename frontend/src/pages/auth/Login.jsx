// src/pages/auth/Login.jsx
import { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP (later API call)
    console.log("Login data:", form);

    // Dummy redirect
    navigate("/");
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Login to TreeMart</h1>
        <p className="auth-subtext">
          Welcome back! Please login to continue.
        </p>

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="auth-btn">
          Login
        </button>

        <p className="auth-footer">
          Don’t have an account?{" "}
          <Link to="/register">Create one</Link>
        </p>
      </form>
    </div>
  );
}
