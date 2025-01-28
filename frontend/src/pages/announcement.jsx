import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Announcements = () => {
  const [senderType, setSenderType] = useState("Student");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/announcements"
      );
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const addAnnouncement = async () => {
    if (!title.trim() || !message.trim()) {
      alert("Title and Message cannot be empty!");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/v1/announcements", {
        senderType,
        title,
        message,
      });

      setSenderType("Student");
      setTitle("");
      setMessage("");
      fetchAnnouncements();
    } catch (error) {
      console.error("Error adding announcement:", error);
    }
  };

  const handleEdit = (announcement) => {
    setEditMode(true);
    setEditId(announcement._id);
    setSenderType(announcement.senderType);
    setTitle(announcement.title);
    setMessage(announcement.message);
  };

  const updateAnnouncement = async () => {
    if (!title.trim() || !message.trim()) {
      alert("Title and Message cannot be empty!");
      return;
    }

    try {
      await axios.patch(
        `http://localhost:3000/api/v1/announcements/${editId}`,
        {
          senderType,
          title,
          message,
        }
      );

      setEditMode(false);
      setEditId(null);
      setSenderType("Student");
      setTitle("");
      setMessage("");
      fetchAnnouncements();
    } catch (error) {
      console.error("Error updating announcement:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/announcements/${id}`);
      setAnnouncements(
        announcements.filter((announcement) => announcement._id !== id)
      );
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  const filteredAnnouncements = announcements.filter((announcement) =>
    announcement.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="col" style={{ padding: "1%" }}>
      <div
        className="col"
        style={{
          backgroundColor: "rgba(240, 208, 255, 0.5)",
          borderRadius: "10px",
          padding: "2%",
        }}
      >
        <div style={{ fontSize: "200%", fontWeight: "500", color: "#36454F" }}>
          {editMode ? "Edit Announcement" : "Send Announcement"}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
          }}
        >
          <div>
            <label
              htmlFor="recipient-select"
              style={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#191970",
                marginRight: "0.5rem",
              }}
            >
              Send to:
            </label>
            <select
              id="recipient-select"
              value={senderType}
              onChange={(e) => setSenderType(e.target.value)}
              className="form-select"
              style={{
                width: "300px",
                display: "inline-block",
                backgroundColor: "white",
              }}
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              placeholder="Search Announcement"
              style={{
                width: "300px",
                backgroundColor: "white",
              }}
            />
          </div>
        </div>
        <div style={{ marginTop: "40px" }}>
          <label
            htmlFor="announcement-title"
            style={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#191970",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            Title:
          </label>
          <input
            id="announcement-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Enter announcement title"
            style={{
              backgroundColor: "white",
              marginBottom: "40px",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="announcement-message"
            style={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#191970",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            Message:
          </label>
          <textarea
            id="announcement-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            placeholder="Enter announcement message"
            rows="5"
            style={{
              backgroundColor: "white",
            }}
          ></textarea>
        </div>
        <div style={{ marginTop: "40px" }}>
          <button
            className="btn btn-primary"
            onClick={editMode ? updateAnnouncement : addAnnouncement}
            style={{
              backgroundColor: editMode ? "yellow" : "#5D3FD3",
              border: "none",
              fontWeight: "500",
              fontSize: "20px",
              color: editMode ? "black" : "white",
            }}
          >
            {editMode ? "Update Announcement" : "Send Announcement"}
          </button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h3>Recent Announcements</h3>
          <ul className="list-group">
            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((announcement) => (
                <li
                  key={announcement._id}
                  className="list-group-item"
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "#F8F8FF",
                  }}
                >
                  <h5>{announcement.title}</h5>
                  <p>{announcement.message}</p>
                  <small>
                    Sent to: <strong>{announcement.senderType}</strong>
                  </small>
                  <div className="mt-2">
                    <button
                      className="btn btn"
                      onClick={() => handleEdit(announcement)}
                      style={{
                        marginRight: "0.5rem",
                        backgroundColor: "#FFBF00",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(announcement._id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p>No announcements found.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
