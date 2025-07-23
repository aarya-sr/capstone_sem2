import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { name } = useUser();

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/">Quizlet</Link>
      </div>

      <div className="navbar__links">
        <Link to="/quizzes" className="navbar__link">Quizzes</Link>
        <Link to="/about" className="navbar__link">About</Link>
        <Link to="/signup" className="navbar__link">Sign Up</Link>
        <Link to="/login" className="navbar__cta">Login</Link>
        {name && <span className="navbar__welcome">Welcome, {name}</span>}
      </div>
    </nav>
  );
};

export default Navbar;
