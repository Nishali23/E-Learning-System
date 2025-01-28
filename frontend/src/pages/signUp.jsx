import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.6);
  &::placeholder {
    color: #c0c0c0;
  }
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      setMessage(response.data.message || "Signup successful!");
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "An error occurred during signup."
      );
    }
  };

  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{
          backgroundImage: "url('/assets/loginBackground.jpg')",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "120vh",
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
          }}
        >
          <h1 className="mb-4" style={{ color: "#5D3FD3", fontWeight: "700" }}>
            Get Started
          </h1>
          <h2 className="mb-4" style={{ color: "#191970", fontWeight: "700" }}>
            Sign up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label"
                style={{ color: "#71797E", fontWeight: "500" }}
              >
                Profile Name
              </label>
              <Input
                type="text"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                style={{
                  height: "100%",
                  minHeight: "7vh",
                  width: "100%",
                }}
              />
            </div>

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
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                style={{
                  height: "100%",
                  minHeight: "7vh",
                  width: "100%",
                }}
              />
            </div>

            <div className="mb-3">
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
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                style={{
                  height: "100%",
                  minHeight: "7vh",
                  width: "100%",
                }}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="confirmPassword"
                className="form-label"
                style={{ color: "#71797E", fontWeight: "500" }}
              >
                Confirm Password
              </label>
              <Input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your Password"
                style={{
                  height: "100%",
                  minHeight: "7vh",
                  width: "100%",
                }}
              />
            </div>

            {message && <p className="text-danger mb-3">{message}</p>}

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
              Sign up
            </button>
          </form>
          <h6 style={{ color: "#71797E" }}>
            Already have an Account?{" "}
            <a
              href="/login"
              style={{
                color: "#5D3FD3",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Log in
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Signup;
