import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signUp";
import Courses from "./pages/courses";
import AboutUs from "./pages/aboutUs";
import Navigation from "./pages/navigation";
import Dashboard from "./pages/dashboard";
import Announcements from "./pages/announcement";
import AddCourse from "./pages/addCourse";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTeacher from "./pages/addTeacher";
import AddStudent from "./pages/addStudent";
import Layout from "./pages/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/announcement" element={<Announcements />} />
        <Route path="/addCourse" element={<AddCourse />} />
        <Route path="/addTeacher" element={<AddTeacher />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
