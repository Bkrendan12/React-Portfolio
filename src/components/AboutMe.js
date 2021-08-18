import React from "react";
import ProfilePic from "../assets/TRU (2).png";

function AboutMe() {
  return (
    <div>
      <img src={ProfilePic} alt="a picture of me" />
      <p>some bio</p>
    </div>
  );
}

export default AboutMe;
