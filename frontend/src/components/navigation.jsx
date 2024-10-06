import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navigation = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#CCCCFF" }}
    >
      <div className="container">
        <a className="navbar-brand d-flex fs-4" href="#">
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
        </a>

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
          className=" col justify-content-lg-end collapse navbar-collapse "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  marginRight: "20px",
                  color: "#71797E",
                  fontWeight: "500",
                }}
              >
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  marginRight: "20px",
                  color: "#71797E",
                  fontWeight: "500",
                }}
              >
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{ color: "#71797E", fontWeight: "500" }}
              >
                Contacts
              </a>
            </li>
          </ul>

          <div className="d-flex">
            <button
              className="btn ms-3"
              type="submit"
              style={{ backgroundColor: "#5D3FD3", color: "#ffffff" }}
            >
              Log in
            </button>
            <button
              className="btn ms-3"
              type="submit"
              style={{ backgroundColor: "#5D3FD3", color: "#ffffff" }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
