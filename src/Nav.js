import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <span style={{ fontSize: "30px" }} role="img" aria-label="logo">🌏</span>
      </Link>
      <ul className="nav-links">
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/symptom"
        >
          <li>Symptom</li>
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/graph"
        >
          <li>Graph</li>
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", marginTop: "10px" }}
          to="/about"
        >
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
