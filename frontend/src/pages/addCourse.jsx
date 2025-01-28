import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AddCourse = () => {
  const [courses, setCourses] = useState([]);
  const [courseID, setCourseID] = useState("");
  const [courseName, setCourseName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingCourse, setEditingCourse] = useState(null);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/courses");
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleAddCourse = async () => {
    if (!courseID || !courseName) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/v1/courses", {
        courseId: courseID,
        name: courseName,
      });

      setCourseID("");
      setCourseName("");
      fetchCourses();
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const handleDeleteCourse = async (Id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/courses/${Id}`);
      fetchCourses();
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleEditClick = (course) => {
    setEditingCourse(course);
    setCourseID(course.courseId);
    setCourseName(course.name);
  };

  const handleEditCourse = async () => {
    if (!courseID || !courseName) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      await axios.patch(
        `http://localhost:3000/api/v1/courses/${editingCourse._id}`,
        {
          courseId: courseID,
          name: courseName,
        }
      );

      setCourseID("");
      setCourseName("");
      setEditingCourse(null);
      fetchCourses();
    } catch (error) {
      console.error("Error editing course:", error);
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="col" style={{ padding: "1%" }}>
      <div
        className="col"
        style={{
          backgroundColor: "rgba(240, 208, 255, 0.5)",
          borderRadius: "10px",
          padding: "2%",
          height: "80vh",
        }}
      >
        <div
          style={{
            fontSize: "200%",
            fontWeight: "500",
            color: "#36454F",
            marginBottom: "40px",
          }}
        >
          Course Management
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "40px",
            }}
          >
            <input
              type="text"
              value={courseID}
              onChange={(e) => setCourseID(e.target.value)}
              className="form-control"
              placeholder="Course ID"
              style={{ width: "250px", marginRight: "10px" }}
            />
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="form-control"
              placeholder="Course Name"
              style={{ width: "250px", marginRight: "10px" }}
            />
            <button
              className="btn "
              onClick={editingCourse ? handleEditCourse : handleAddCourse}
              style={{
                backgroundColor: editingCourse ? "yellow" : "#5D3FD3",
                fontWeight: "500",
                color: editingCourse ? "black" : "white",
              }}
            >
              {editingCourse ? "Save Changes" : "Add Course"}
            </button>
          </div>
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              placeholder="Search Courses"
              style={{ width: "250px" }}
            />
          </div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ color: "#191970" }}>Course ID</th>
              <th style={{ color: "#191970" }}>Course Name</th>
              <th style={{ color: "#191970" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course._id}>
                <td>{course.courseId}</td>
                <td>{course.name}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEditClick(course)}
                    style={{ marginRight: "0.5rem" }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteCourse(course._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCourse;
