import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AddTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [teacherID, setTeacherID] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTeacherId, setEditingTeacherId] = useState(null);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/teachers");
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const addTeacher = async () => {
    if (!teacherID || !teacherName || !teacherEmail) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/v1/teachers", {
        teacherId: teacherID,
        name: teacherName,
        email: teacherEmail,
      });

      setTeacherID("");
      setTeacherName("");
      setTeacherEmail("");
      fetchTeachers();
    } catch (error) {
      console.error("Error adding teacher:", error);
    }
  };

  const editTeacher = async () => {
    if (!teacherID || !teacherName || !teacherEmail) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await axios.patch(
        `http://localhost:3000/api/v1/teachers/${editingTeacherId}`,
        {
          teacherId: teacherID,
          name: teacherName,
          email: teacherEmail,
        }
      );

      setTeacherID("");
      setTeacherName("");
      setTeacherEmail("");
      setIsEditing(false);
      setEditingTeacherId(null);
      fetchTeachers();
    } catch (error) {
      console.error("Error editing teacher:", error);
    }
  };

  const deleteTeacher = async (teacherId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/teachers/${teacherId}`);
      fetchTeachers();
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          Teacher Management
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
              value={teacherID}
              onChange={(e) => setTeacherID(e.target.value)}
              className="form-control"
              placeholder="Teacher ID"
              style={{ width: "200px", marginRight: "10px" }}
            />
            <input
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="form-control"
              placeholder="Teacher Name"
              style={{ width: "200px", marginRight: "10px" }}
            />
            <input
              type="email"
              value={teacherEmail}
              onChange={(e) => setTeacherEmail(e.target.value)}
              className="form-control"
              placeholder="Teacher Email"
              style={{ width: "200px", marginRight: "10px" }}
            />

            <button
              className="btn"
              onClick={isEditing ? editTeacher : addTeacher}
              style={{
                backgroundColor: isEditing ? "yellow" : "#5D3FD3",
                fontWeight: "500",
                color: isEditing ? "black" : "white",
              }}
            >
              {isEditing ? "Edit Teacher" : "Add Teacher"}
            </button>
          </div>
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              placeholder="Search Teachers"
              style={{ width: "250px" }}
            />
          </div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ color: "#191970" }}>Teacher ID</th>
              <th style={{ color: "#191970" }}>Teacher Name</th>
              <th style={{ color: "#191970" }}>Teacher Email</th>
              <th style={{ color: "#191970" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeachers.map((teacher) => (
              <tr key={teacher._id}>
                <td>{teacher.teacherId}</td>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => {
                      setTeacherID(teacher.teacherId);
                      setTeacherName(teacher.name);
                      setTeacherEmail(teacher.email);
                      setIsEditing(true);
                      setEditingTeacherId(teacher._id);
                    }}
                    style={{ marginRight: "0.5rem" }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTeacher(teacher._id)}
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

export default AddTeacher;
