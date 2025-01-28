import React from "react";

const SecondSection = () => {
  return (
    <div
      className="row"
      style={{
        height: "75vh",
      }}
    >
      <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column align-items-center align-items-lg-end justify-content-center">
        <div
          className="fw-bold fs-1"
          style={{
            marginBottom: "40px",
            textAlign: "left",
            color: "#191970",
            width: "60%",
          }}
        >
          Get Certified With <br /> Your Trusted Partners
        </div>
        <div
          style={{
            marginBottom: "40px",
            textAlign: "left",
            width: "60%",
            color: "#71797E",
            fontWeight: "500",
          }}
        >
          We are a company who is best known for offering <br /> awarding body
          accredited courses for anyone who <br /> wishes to take their
          professional life to the next level
        </div>

        <div style={{ width: "60%" }}>
          <button
            className="btn"
            type="button"
            id="button-search"
            style={{
              backgroundColor: "#5D3FD3",
              color: "#ffffff",
              height: "60px",
              width: "200px",
              borderRadius: "10px",
            }}
          >
            View Courses
          </button>
        </div>
      </div>

      <div className="col d-flex justify-content-around align-items-center">
        <img
          src="/assets/uni1.jpeg"
          alt="University 1"
          style={{
            maxWidth: "200px",
            height: "auto",
            objectFit: "cover",
            marginRight: "10px",
          }}
        />
        <img
          src="/assets/uni2.jpeg"
          alt="University 2"
          style={{
            maxWidth: "200px",
            height: "auto",
            objectFit: "cover",
            marginRight: "10px",
          }}
        />
        <img
          src="/assets/uni3.jpeg"
          alt="University 3"
          style={{
            maxWidth: "200px",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default SecondSection;
