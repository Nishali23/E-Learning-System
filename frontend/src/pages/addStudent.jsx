import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AddStudent = () => {
  const [students, setStudents] = useState([]);
  const [studentID, setStudentID] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudentId, setEditingStudentId] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/students");
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async () => {
    if (!studentID || !studentName || !studentEmail) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/v1/students", {
        studentId: studentID,
        name: studentName,
        email: studentEmail,
      });

      setStudentID("");
      setStudentName("");
      setStudentEmail("");
      fetchStudents();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const editStudent = async () => {
    if (!studentID || !studentName || !studentEmail) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await axios.patch(
        `http://localhost:3000/api/v1/students/${editingStudentId}`,
        {
          studentId: studentID,
          name: studentName,
          email: studentEmail,
        }
      );

      setStudentID("");
      setStudentName("");
      setStudentEmail("");
      setIsEditing(false);
      setEditingStudentId(null);
      fetchStudents();
    } catch (error) {
      console.error("Error editing student:", error);
    }
  };

  const deleteStudent = async (studentId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/students/${studentId}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          Student Management
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
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
              className="form-control"
              placeholder="Student ID"
              style={{ width: "250px", marginRight: "10px" }}
            />
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="form-control"
              placeholder="Student Name"
              style={{ width: "250px", marginRight: "10px" }}
            />
            <input
              type="email"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
              className="form-control"
              placeholder="Student Email"
              style={{ width: "250px", marginRight: "10px" }}
            />

            <button
              className="btn"
              onClick={isEditing ? editStudent : addStudent}
              style={{
                backgroundColor: isEditing ? "yellow" : "#5D3FD3",
                fontWeight: "500",
                color: isEditing ? "black" : "white",
              }}
            >
              {isEditing ? "Edit Student" : "Add Student"}
            </button>
          </div>
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              placeholder="Search Students"
              style={{ width: "250px" }}
            />
          </div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ color: "#191970" }}>Student ID</th>
              <th style={{ color: "#191970" }}>Student Name</th>
              <th style={{ color: "#191970" }}>Student Email</th>
              <th style={{ color: "#191970" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student._id}>
                <td>{student.studentId}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    className="btn btn-sm"
                    style={{
                      marginRight: "0.5rem",
                      backgroundColor: "#FFBF00",
                    }}
                    onClick={() => {
                      setStudentID(student.studentId);
                      setStudentName(student.name);
                      setStudentEmail(student.email);
                      setIsEditing(true);
                      setEditingStudentId(student._id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteStudent(student._id)}
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

export default AddStudent;
