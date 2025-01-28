import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar";
import Dashboard from "./dashboard";
import AddStudent from "./addStudent";
import AddTeacher from "./addTeacher";
import Announcements from "./announcement";
import AddCourse from "./addCourse";

const Layout = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;

      case "Students":
        return <AddStudent />;
      case "Teachers":
        return <AddTeacher />;
      case "Announcements":
        return <Announcements />;
      case "Courses":
        return <AddCourse />;
      default:
        return <div>Select a page from the sidebar</div>;
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#E0B0FF",
        minHeight: "100vh",
        padding: "4%",
      }}
    >
      <div
        className="row"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Sidebar setActivePage={setActivePage} />
        <div className="col-10">{renderPage()}</div>
      </div>
    </div>
  );
};

export default Layout;
