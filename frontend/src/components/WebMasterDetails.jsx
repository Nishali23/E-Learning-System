import React from "react";

const WebMasterDetails = ({ title, subtitle, courseDetails }) => {
  return (
    <div>
      <h1
        style={{
          color: "#191970",
          fontWeight: "700",
          width: "800px",
          height: "100px",
        }}
      >
        {title}
      </h1>

      <h5
        style={{
          fontWeight: "500",
          color: "#71797E",
          width: "800px",
          height: "80px",
        }}
      >
        {subtitle}
      </h5>

      <style>
        {`
          ul.custom-list li::marker {
            color: #5D3FD3; 
            font-size: 30px; 
          }
        `}
      </style>

      <ul
        className="custom-list"
        style={{
          listStyleType: "disc",
          marginLeft: "40px",
          paddingLeft: "0",
        }}
      >
        {courseDetails.map((detail, index) => (
          <li key={index}>
            <div
              style={{
                fontSize: "22px",
                color: "#191970",
                fontWeight: "500",
                padding: "10px 0",
              }}
            >
              {detail.heading}
            </div>
            <div
              style={{
                fontSize: "18px",
                color: "#71797E",
                padding: "5px 0",
              }}
            >
              {detail.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebMasterDetails;
