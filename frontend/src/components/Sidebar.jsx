import {
  FaTachometerAlt,
  FaBullhorn,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
} from "react-icons/fa";
import React, { useState } from "react";

const Sidebar = ({ setActivePage }) => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleClick = (item) => {
    setSelectedItem(item);
    setActivePage(item);
  };

  return (
    <div
      className="col-2"
      style={{
        padding: "1%",
        borderRadius: "10px",
      }}
    >
      <div
        className="d-flex align-items-center"
        style={{ marginBottom: "20%" }}
      >
        <img
          src="/assets/Logo.png"
          alt="Logo"
          style={{
            width: "65px",
            height: "65px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "10px",
          }}
        />
        <div className="d-flex flex-column">
          <span
            style={{
              color: "#191970",
              fontWeight: "600",
              fontSize: "25px",
            }}
          >
            WEB MASTERS
          </span>
          <span
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#5D3FD3",
            }}
          >
            Proper education with success
          </span>
        </div>
      </div>

      <div style={{ fontSize: "140%", fontWeight: "500" }}>
        <div
          onClick={() => handleClick("Dashboard")}
          style={{
            marginBottom: "10%",
            display: "flex",
            alignItems: "center",
            padding: "5px",
            backgroundColor:
              selectedItem === "Dashboard"
                ? "rgba(240, 208, 255, 0.5)"
                : "#ffffff",
            color: selectedItem === "Dashboard" ? "#191970" : "#191970",
            cursor: "pointer",
          }}
        >
          <FaTachometerAlt style={{ marginRight: "8px" }} /> Dashboard
        </div>
        <div
          onClick={() => handleClick("Announcements")}
          style={{
            marginBottom: "10%",
            display: "flex",
            alignItems: "center",
            padding: "5px",
            backgroundColor:
              selectedItem === "Announcements"
                ? "rgba(240, 208, 255, 0.5)"
                : "#ffffff",
            color: selectedItem === "Announcements" ? "#191970" : "#191970",
            cursor: "pointer",
          }}
        >
          <FaBullhorn style={{ marginRight: "8px" }} /> Announcements
        </div>
        <div
          onClick={() => handleClick("Students")}
          style={{
            marginBottom: "10%",
            display: "flex",
            alignItems: "center",
            padding: "5px",
            backgroundColor:
              selectedItem === "Students"
                ? "rgba(240, 208, 255, 0.5)"
                : "#ffffff",
            color: selectedItem === "Students" ? "#191970" : "#191970",
            cursor: "pointer",
          }}
        >
          <FaUserGraduate style={{ marginRight: "8px" }} /> Students
        </div>
        <div
          onClick={() => handleClick("Teachers")}
          style={{
            marginBottom: "10%",
            display: "flex",
            alignItems: "center",
            padding: "5px",
            backgroundColor:
              selectedItem === "Teachers"
                ? "rgba(240, 208, 255, 0.5)"
                : "#ffffff",
            color: selectedItem === "Teachers" ? "#191970" : "#191970",
            cursor: "pointer",
          }}
        >
          <FaChalkboardTeacher style={{ marginRight: "8px" }} /> Teachers
        </div>
        <div
          onClick={() => handleClick("Courses")}
          style={{
            marginBottom: "10%",
            display: "flex",
            alignItems: "center",
            padding: "5px",
            backgroundColor:
              selectedItem === "Courses"
                ? "rgba(240, 208, 255, 0.5)"
                : "#ffffff",
            color: selectedItem === "Courses" ? "#191970" : "#191970",
            cursor: "pointer",
          }}
        >
          <FaBookOpen style={{ marginRight: "8px" }} /> Courses
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
