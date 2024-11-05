import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navigation = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    // Update the background color based on the current route
    switch (location.pathname) {
      case "/":
        setBgColor("#CCCCFF"); // Background color for Home
        break;
      case "/courses":
        setBgColor("#F0F8FF"); // Background color for Courses
        break;
      case "/about":
        setBgColor("#E6E6FA"); // Background color for About Us
        break;
      case "/login":
        setBgColor("#E6E6FA");
        break;
      case "/signup":
        setBgColor("#E6E6FA");
        break;
      default:
        setBgColor("transparent"); // Default transparent background
    }
  }, [location]);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.3s ease", // Smooth transition
        padding: "20px",
      }}
    >
      <div className="container">
        <Link to="/" className="navbar-brand d-flex fs-4">
          <img
            src="/assets/Logo.png"
            alt="Logo"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "10px",
            }}
          />
          <div className="d-flex flex-column">
            <span style={{ color: "#191970", fontWeight: "600" }}>
              WEB MASTERS
            </span>
            <span
              style={{ fontSize: "15px", fontWeight: "500", color: "#5D3FD3" }}
            >
              Proper education with success
            </span>
          </div>
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler ms-auto d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-lg-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                style={{
                  marginRight: "20px",
                  color: "#71797E",
                  fontWeight: "500",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/courses"
                className="nav-link"
                style={{
                  marginRight: "20px",
                  color: "#71797E",
                  fontWeight: "500",
                }}
              >
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                style={{ color: "#71797E", fontWeight: "500" }}
              >
                About Us
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link
              to="/login"
              className="btn ms-3"
              style={{ backgroundColor: "#5D3FD3", color: "#ffffff" }}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="btn ms-3"
              style={{ backgroundColor: "#5D3FD3", color: "#ffffff" }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
