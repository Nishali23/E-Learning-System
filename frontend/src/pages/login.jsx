import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.6);
  &::placeholder {
    color: #c0c0c0;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      alert("Login successful!");
      navigate("/layout");
    } catch (error) {
      console.error("Error logging in:", error);

      if (error.response) {
        if (error.response.status === 401) {
          if (error.response.data.message === "Invalid email") {
            setErrorMessage("Wrong email. Please check and try again.");
          } else if (error.response.data.message === "Invalid password") {
            setErrorMessage("Wrong password. Please check and try again.");
          } else {
            setErrorMessage(
              <div>
                Not an existing user?{" "}
                <a href="/signup" style={{ color: "#5D3FD3" }}>
                  Sign Up
                </a>
                .
              </div>
            );
          }
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{
          backgroundImage: "url('/assets/loginBackground.jpg')",
          backgroundSize: "cover",
          height: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="col-lg-4 col-md-6"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
            padding: "50px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            height: "100%",
            minHeight: "50vh",
          }}
        >
          <h1 style={{ color: "#5D3FD3", fontWeight: "700" }}>Welcome Back!</h1>
          <h6 className="mb-5" style={{ color: "#71797E" }}>
            Please Login to your account
          </h6>
          <h2 className="mb-4" style={{ color: "#191970", fontWeight: "700" }}>
            Login
          </h2>

          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "#71797E", fontWeight: "500" }}
              >
                Email address
              </label>
              <Input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  height: "100%",
                  minHeight: "7vh",
                  width: "100%",
                }}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="form-label"
                style={{ color: "#71797E", fontWeight: "500" }}
              >
                Password
              </label>
              <Input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{
                  height: "100%",
                  minHeight: "7vh",
                  width: "100%",
                }}
              />
            </div>

            <button
              type="submit"
              className="btn mb-5"
              style={{
                backgroundColor: "#5D3FD3",
                color: "#ffffff",
                width: "100%",
                height: "100%",
                minHeight: "7vh",
              }}
            >
              Login
            </button>
          </form>

          <h6 style={{ color: "#71797E" }}>
            New User?{" "}
            <a
              href="/signup"
              style={{
                color: "#5D3FD3",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Sign up
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Login;
