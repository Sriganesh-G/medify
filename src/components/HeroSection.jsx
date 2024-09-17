import React from "react";
import Buttons from "./Buttons";
import heroImage from "../../public/assets/heroImage.png";
const HeroSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 50px 0px 50px",
      }}
    >
      {/*   Hero Text Section */}
      <div className="heroText" style={{ padding: "25px 0px 5px 50px " }}>
        <h6 style={{ fontSize: "31px", color: "#102851", margin: "10px 0px" }}>
          Skip the travel! Find Online
        </h6>
        <h1 style={{ fontSize: "56px", color: "#000000", margin: "10px 0px" }}>
          Medical <span style={{ color: "#2AA7FF" }}>Centers</span>
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#5C6169",
            width: "570px",
            margin: "10px 0px 20px 0px",
          }}
        >
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
        <Buttons value={"Find Centers"}></Buttons>
      </div>

      {/* Hero Image Section */}
      <div className="heroImage">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
