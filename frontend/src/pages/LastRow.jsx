import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const LastRow = ({
  logoSrc,
  companyName,
  description,
  address,
  facebookUrl,
  linkedinUrl,
  twitterUrl,
  firstTitle,
  firstLinks,
  secondTitle,
  secondLinks,
  thirdTitle,
}) => {
  return (
    <div className="row" style={{ height: "40vh", backgroundColor: "#EDEADE" }}>
      <div className="col-3 d-flex flex-column align-items-center">
        <div className="d-flex flex-row" style={{ height: "100px" }}>
          <img
            src={logoSrc}
            alt="Logo"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "10px",
            }}
          />
          <div className="d-flex flex-column">
            <div
              style={{
                color: "#191970",
                fontWeight: "600",
              }}
            >
              {companyName}
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "#5D3FD3",
              }}
            >
              {description}
            </div>
          </div>
        </div>

        <div
          style={{
            width: "275px",
            height: "110px",
            color: "#71797E",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          {address.split(",").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>

        <div className="d-flex flex-row" style={{ width: "275px" }}>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "30px", color: "#5D3FD3" }}
          >
            <FaFacebook size={35} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "30px", color: "#5D3FD3" }}
          >
            <FaLinkedin size={35} />
          </a>
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#5D3FD3" }}
          >
            <FaTwitter size={35} />
          </a>
        </div>
      </div>

      <div className="col-3 d-flex flex-column align-items-center">
        <div
          style={{
            color: "#191970",
            fontWeight: "500",
            fontSize: "20px",
            height: "43px",
            width: "100px",
          }}
        >
          {firstTitle}
        </div>
        {firstLinks.map((link, index) => (
          <div
            key={index}
            style={{
              width: "100px",
              color: "#71797E",
              fontSize: "17px",
              fontWeight: "500",
            }}
          >
            {link}
          </div>
        ))}
      </div>

      <div className="col-3 d-flex flex-column align-items-center">
        <div
          style={{
            color: "#191970",
            fontWeight: "500",
            fontSize: "20px",
            height: "43px",
            width: "150px",
          }}
        >
          {secondTitle}
        </div>
        {secondLinks.map((link, index) => (
          <div
            key={index}
            style={{
              width: "150px",
              color: "#71797E",
              fontSize: "17px",
              fontWeight: "500",
            }}
          >
            {link}
          </div>
        ))}
      </div>

      <div className="col-3 col-3 d-flex flex-column align-items-end">
        <div
          style={{
            color: "#191970",
            fontWeight: "500",
            fontSize: "20px",
            height: "48px",
            width: "300px",
          }}
        >
          {thirdTitle}
        </div>
        <div
          style={{
            height: "75px",
            width: "300px",
          }}
        >
          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Number"
            style={{
              height: "50px",
              width: "300px",
            }}
          />
        </div>
        <div style={{ width: "300px" }}>
          <button
            className="btn"
            style={{
              backgroundColor: "#5D3FD3",
              color: "#ffffff",
              height: "42px",
              width: "200px",
            }}
          >
            Request a call back
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastRow;
