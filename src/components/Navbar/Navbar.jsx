import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="logo">
          <img src={logo} alt="University Logo" />
        </NavLink>

        <button className="menu-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <CgMenuGridR />}
        </button>
      </div>

      <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/">Admissions</NavLink>
        </li>
        <li>
          <NavLink to="/">Faculties</NavLink>
        </li>
        <li>
          <NavLink to="/">Departments</NavLink>
        </li>
        <li>
          <NavLink to="/">News</NavLink>
        </li>
        <li>
          <NavLink to="/">Portal</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact</NavLink>
        </li>
        <li className="mobile-btn">
          <NavLink to="/" className="login-btn">
            Student Portal
          </NavLink>
        </li>
      </ul>

      <div className="navbar-btn">
        <NavLink to="/" className="login-btn">
          Student Portal
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
