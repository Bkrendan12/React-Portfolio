import React from "react";
import ProfilePic from "../assets/myFace.png";

function AboutMe() {
  return (
    <div className="about">
      <h1>About me</h1>
      <img className="me" src={ProfilePic} alt="my face" />
      <p>
        My name is Brendan and I am currently a junior web developer attending
        the UNH Bootcamp in Southern New Hampshire. I've had a passion for
        creating all kinds of content over the years and have always had
        interest in making functional websites for small businesses, bands, and
        more. If you would like to check out my project portfolio, my contact
        and resume, use the links from navbar above and it will take you to each
        desired page.
      </p>
    </div>
  );
}

export default AboutMe;
