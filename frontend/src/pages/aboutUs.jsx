import React from "react";

const AboutUs = () => {
  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "150vh" }}>
        <div
          className="col-12 d-flex flex-column align-items-center justify-content-center"
          style={{
            backgroundColor: "#191970",
            color: "#ffffff",
            height: "15%",
            borderBottomLeftRadius: "40px",
            borderBottomRightRadius: "40px",
          }}
        >
          <div style={{ fontSize: "300%", fontWeight: "500" }}>About Us</div>
        </div>

        <div
          className=" col-12 d-flex flex-row align-items-center justify-content-center"
          style={{
            height: "40%",
            padding: "10%",
          }}
        >
          <div className="col-6">
            <div
              style={{ color: "#191970", fontSize: "180%", fontWeight: "700" }}
            >
              Who We Are
            </div>
            <div
              style={{ fontSize: "100%", color: "#71797E", fontWeight: "500" }}
            >
              We are a passionate team of educators, developers, and industry
              experts dedicated to making learning accessible to everyone,
              everywhere. Our platform brings together a diverse range of
              high-quality courses that empower individuals to grow their skills
              and achieve their career goals.
            </div>
          </div>

          <div className="col-6 d-flex  justify-content-end">
            <img
              src="/assets/technology2.jpeg"
              alt="About Us"
              style={{
                width: "80%",
                height: "auto",
              }}
            />
          </div>
        </div>

        <div
          className=" col-12 d-flex flex-row align-items-center justify-content-center"
          style={{
            height: "40%",
            padding: "10%",
            backgroundColor: "#E0E0FF",
          }}
        >
          <div className="col-6">
            <img
              src="/assets/technology1.jpeg"
              alt="About Us"
              style={{
                width: "80%",
                height: "auto",
              }}
            />
          </div>
          <div className="col-6">
            <div
              style={{ color: "#191970", fontSize: "180%", fontWeight: "700" }}
            >
              What Do We Do
            </div>
            <div
              style={{ fontSize: "100%", color: "#71797E", fontWeight: "500" }}
            >
              We offer an extensive range of online courses across various
              disciplines, from technology to business, design, and more. Our
              mission is to provide learners with flexible, engaging, and
              affordable education, helping them stay competitive in today’s
              evolving job market.
            </div>
          </div>
        </div>

        <div
          className=" col-12 d-flex flex-row align-items-center justify-content-center"
          style={{
            height: "40%",
            padding: "10%",
          }}
        >
          <div className="col-6">
            <div
              style={{ color: "#191970", fontSize: "180%", fontWeight: "700" }}
            >
              How Do We Help
            </div>
            <div
              style={{ fontSize: "100%", color: "#71797E", fontWeight: "500" }}
            >
              We help learners by providing expertly designed courses,
              interactive learning experiences, and personalized support.
              Whether you're a beginner or an experienced professional, we offer
              the tools and guidance you need to build confidence and expertise
              in your field.
            </div>
          </div>
          <div className="col-6 d-flex  justify-content-end">
            <img
              src="/assets/business1.jpeg"
              alt="About Us"
              style={{
                width: "80%",
                height: "auto",
              }}
            />
          </div>
        </div>

        <div
          className=" col-12 d-flex flex-row align-items-center justify-content-center"
          style={{
            height: "40%",
            padding: "10%",
            backgroundColor: "#E0E0FF",
          }}
        >
          <div className="col-6">
            <img
              src="/assets/content2.jpeg"
              alt="About Us"
              style={{
                width: "60%",
                height: "auto",
              }}
            />
          </div>
          <div className="col-6">
            <div
              style={{ color: "#191970", fontSize: "180%", fontWeight: "700" }}
            >
              Create Success Story
            </div>
            <div
              style={{ fontSize: "100%", color: "#71797E", fontWeight: "500" }}
            >
              We believe in the power of education to transform lives. By
              equipping our students with the right skills and knowledge, we
              help them create their own success stories. Our graduates have
              gone on to excel in their careers, start businesses, and lead
              innovation in their industries.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
