import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"; // Import Navbar styles
import logo from "../assets/logos.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="CSR Hub Logo" className="logo-img" />
          <h3>CSR Vest</h3>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/">HOME</Link>
          <Link to="/details">DETAILS</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/contact">CONTACT US</Link>

          {/* Profile Icon */}
          <Link to="/profile" className="profile-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="profile-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
              <path d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
