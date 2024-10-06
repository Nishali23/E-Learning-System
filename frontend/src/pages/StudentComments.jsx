import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const StudentComments = ({ items, backgroundImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const { name, text, image } = items[currentIndex];

  return (
    <div
      className="row d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "120vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="col d-flex justify-content-center align-items-end"
        style={{
          height: "100%",
          maxHeight: "150px",
          fontSize: "40px",
          textAlign: "center",
          fontWeight: "700",
          color: "#191970",
        }}
      >
        We Value Our Students,
        <br />
        Let's Hear From Them
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <div
          className="card text-center p-3"
          style={{
            width: "25rem",
            minWidth: "200px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            border: "2px solid #ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              alt={name}
              style={{
                width: "170px",
                height: "190px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
          </div>
          <div className="card-body">
            <p
              className="card-text"
              style={{ color: "#191970", fontSize: "20px" }}
            >
              {text}
            </p>
            <p
              className="card-title font-weight-bold"
              style={{
                color: "#71797E",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              {name}
            </p>
          </div>
          <div className="testimonial-arrows">
            <button
              onClick={prevTestimonial}
              className="btn btn-outline-secondary mx-2"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="btn btn-outline-secondary mx-2"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentComments;
