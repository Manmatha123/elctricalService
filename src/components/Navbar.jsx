import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          ⚡ 
          {/* Electrical Service */}
          <div className="esp-logo">
      <span className="esp e">E</span>
      <span className="esp s">S</span>
      <span className="esp p">P</span>
    </div>
        </Link>

      </div>
      <div className="nav-right">
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;