import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Courses = () => {
  const [fontSize, setFontSize] = useState("40px");
  const [searchWidth, setSearchWidth] = useState("30%");
  const [searchHeight, setSearchHeight] = useState("50px");
  const [helpTextTop, setHelpTextTop] = useState("20%");
  const [searchTop, setSearchTop] = useState("60%");
  const [imageHeight, setImageHeight] = useState("25vh");
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    const updateResponsiveStyles = () => {
      if (window.innerWidth < 576) {
        setFontSize("20px");
        setSearchWidth("80%");
        setSearchHeight("40px");
        setHelpTextTop("20%");
        setSearchTop("60%");
        setImageHeight("40vh");
      } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
        setFontSize("28px");
        setSearchWidth("50%");
        setSearchHeight("45px");
        setHelpTextTop("15%");
        setSearchTop("70%");
        setImageHeight("30vh");
      } else {
        setFontSize("40px");
        setSearchWidth("30%");
        setSearchHeight("50px");
        setHelpTextTop("20%");
        setSearchTop("60%");
        setImageHeight("25vh");
      }
    };

    updateResponsiveStyles();
    window.addEventListener("resize", updateResponsiveStyles);

    return () => {
      window.removeEventListener("resize", updateResponsiveStyles);
    };
  }, []);

  const categories = [
    {
      name: [
        "Fundamentals of Graphic Design",
        "Digital Illustration Techniques",
        "Branding and Visual Identity Design",
      ],
      images: ["graphic1.jpeg", "graphic2.jpeg", "graphic3.jpeg"],
    },
    {
      name: [
        "Mastering SEO Content Writing",
        "Creative Writing for Digital Platforms",
        "Technical Writing and Documentation",
      ],
      images: ["content1.jpeg", "content2.jpeg", "content3.jpeg"],
    },
    {
      name: [
        "Business Strategy and Competitive Analysis",
        "Financial Management for Entrepreneurs",
        "Brand Management and Consumer Insights",
      ],
      images: ["business1.jpeg", "business2.jpeg", "business3.jpeg"],
    },
    {
      name: [
        "Digital Marketing Essentials",
        "Content Marketing and Social Media Strategies",
        "Marketing Fundamentals and Consumer Behavior",
      ],
      images: ["marketing1.jpeg", "marketing2.jpeg", "marketing3.jpeg"],
    },
    {
      name: [
        "Introduction to Data Science and Analytics",
        "Web Development with React and Node.js",
        "Cybersecurity Fundamentals and Best Practices",
      ],
      images: ["technology1.jpeg", "technology2.jpeg", "technology3.jpeg"],
    },
    {
      name: [
        "Strategic Human Resource Management",
        "Talent Acquisition and Recruitment",
        "Employee Relations and Performance Management",
      ],
      images: ["hr1.jpeg", "hr2.jpeg", "hr3.jpeg"],
    },
  ];

  // Filter courses based on the search query
  const filteredCategories = categories.map((category) => ({
    ...category,
    name: category.name.filter((course) =>
      course.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    images: category.images.filter((_, index) =>
      category.name[index]?.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mb-4 p-0" style={{ position: "relative" }}>
          <img
            src="/assets/coursesTop.png"
            alt="Courses Top"
            style={{
              width: "100%",
              height: imageHeight,
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: helpTextTop,
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: fontSize,
              fontWeight: "500",
            }}
          >
            How can we help?
          </div>
          <div
            style={{
              position: "absolute",
              top: searchTop,
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: searchWidth,
            }}
          >
            <div className="input-group">
              <span
                className="input-group-text"
                id="search-icon"
                style={{
                  backgroundColor: "#ffffff",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search for courses"
                aria-label="Search for courses"
                aria-describedby="button-search"
                style={{
                  height: searchHeight,
                  borderRadius: "0 10px 10px 0",
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="btn"
                type="button"
                id="button-search"
                style={{
                  backgroundColor: "#5D3FD3",
                  color: "#ffffff",
                  height: searchHeight,
                  borderRadius: "10px",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {filteredCategories.map((category) =>
          category.name.map((course, index) => (
            <div
              key={`${course}-${index}`}
              className="col-lg-4 col-md-4 col-sm-12 mb-4"
            >
              <div
                className="card"
                style={{
                  height: "400px",
                  width: "80%",
                  border: "2px solid white",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  margin: "0 auto",
                }}
              >
                <img
                  src={`/assets/${category.images[index]}`}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                  alt={course}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      color: "#191970",
                      fontSize: "25px",
                    }}
                  >
                    {course}
                  </h5>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Courses;
