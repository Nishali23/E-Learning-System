import React from "react";

const HorisontalImage = ({
  imgSrc,
  message,
  subMessage,
  bgColor,
  textColor,
  height,
}) => {
  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{
        height: height || "40vh",
        backgroundColor: bgColor || "#EDEADE",
      }}
    >
      <div className="col-12 p-0" style={{ position: "relative" }}>
        <div>
          <img
            src={imgSrc || "/assets/horisontalPic.jpeg"}
            alt="Horisontal"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "180px",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            color: textColor || "white",
            fontSize: "24px",
            fontWeight: "bold",
            transform: "translateY(-50%)",
          }}
        >
          {message}
          <br /> {subMessage}
        </div>
      </div>
    </div>
  );
};

export default HorisontalImage;
