import React from "react";

const CourseCategories = ({ imgSrc, altText, title, coursesCount }) => {
  return (
    <div
      className="col-lg-3 col-md-4 col-sm-6"
      style={{
        fontWeight: 600,
        width: "15%",
      }}
    >
      <div
        className="card d-flex justify-content-center align-items-center"
        style={{
          minHeight: "200px",
          width: "200px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          border: "2px solid white",
          backgroundColor: "#ffffff",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <div>
          <img
            src={imgSrc}
            alt={altText}
            style={{
              maxWidth: "100px",
              height: "auto",
              transition: "transform 0.3s ease-in-out", // smooth image transition
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.2)"; // scale image up on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"; // scale back to normal
            }}
          />
        </div>

        <div style={{ color: "#191970", fontSize: "23px" }}>{title}</div>
        <div style={{ color: "#71797E" }}>{coursesCount} Courses</div>
      </div>
    </div>
  );
};

export default CourseCategories;
