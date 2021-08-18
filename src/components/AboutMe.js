import React from "react";
import ProfilePic from "../assets/myFace.png";

function AboutMe() {
  return (
    <div className="about">
      <img className="me" src={ProfilePic} alt="my face" />
      <p>
        My name is Brendan and I am currently a junior web developer attending
        the UNH Bootcamp in Southern New Hampshire. I've had a passion for
        creating all kinds of content over the years and have always had
        interest in making functional websites for small businesses, bands, and
        more. If you would like to see my work or contact me personally,there
        will be links at the bottom of the page hosting my github link, linkdn
        profile, my email and phone number.
      </p>
    </div>
  );
}

export default AboutMe;
