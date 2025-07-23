import React, { useState } from "react";
import "../styles/Auth.css";
import { useUser } from "../context/UserContext"; 
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { setName } = useUser(); 
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }
    setName(form.name); 
    navigate("/");   
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            name="confirm"
            type="password"
            value={form.confirm}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="auth-button">Create Account</button>

        <p className="auth-toggle">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
