// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>My Portfolio SPA</div>

      <div style={styles.links}>
        <NavLink to="/" end style={styles.link}>
          Home
        </NavLink>
        <NavLink to="/profile" style={styles.link}>
          Profile
        </NavLink>
        <NavLink to="/dashboard" style={styles.link}>
          Dashboard
        </NavLink>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 40px",
    background: "#1a237e",
  },
  logo: {
    color: "white",
    fontSize: "20px",
    fontWeight: "600",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Navbar;
