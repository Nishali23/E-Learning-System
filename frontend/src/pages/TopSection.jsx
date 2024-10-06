import React from "react";

const TopSection = ({}) => {
  return (
    <div
      className="row"
      style={{
        backgroundColor: "#CCCCFF",
        position: "relative",
        height: "100vh",
      }}
    >
      <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column align-items-center align-items-lg-end justify-content-center">
        <div>
          <div
            className="fw-bold fs-1"
            style={{
              color: "#191970",
              width: "80%",
              textAlign: "left",
              marginBottom: "30px",
            }}
          >
            Engaging & <br />
            Accessible Online <br /> Courses For All
          </div>

          <div
            className="fs-5"
            style={{
              color: "#71797E",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            We offer a range of excellent training and certification
            <br /> courses suitable for everyone and anywhere
          </div>

          <div
            className="input-group mt-4"
            style={{
              borderRadius: "10px",
              backgroundColor: "#ffffff",
            }}
          >
            <span
              className="input-group-text "
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
                height: "70px",
                width: "100%",
                maxWidth: "73%",
              }}
            />

            <button
              className="btn"
              type="button"
              id="button-search"
              style={{
                backgroundColor: "#5D3FD3",
                color: "#ffffff",
                height: "60px",
                width: "90px",
                borderRadius: "10px",
                marginTop: "3px",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div
        className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center"
        style={{
          position: "relative",
        }}
      >
        <img
          src="/assets/circle1.png"
          alt="Background Circle"
          style={{
            position: "absolute",
            width: "60%",
            maxWidth: "350px",
            height: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        />

        <img
          src="/assets/LaptopGirl.png"
          alt="Girl with Laptop"
          className="img-fluid"
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            objectFit: "cover",
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
};

export default TopSection;
