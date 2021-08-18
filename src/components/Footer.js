import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import stackoverflow from "../assets/stackoverflow.png";

function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <a href="https://github.com/Bkrendan12">
          <img src={github} alt="Find me on github" />
        </a>
        <a href="https://www.linkedin.com/in/brendan-kurylo/">
          <img src={linkedin} alt="Find me on linkedin" />
        </a>
        <a href="https://stackoverflow.com/users/15325537/brendan-kurylo">
          <img src={stackoverflow} alt="Find me on linkedin" />
        </a>
      </div>

      <div>
        <p>Brendan Kurylo</p>
        <p>Rollinsford, NH</p>
        <p>bkrendan12@gmail.com</p>
        <p>603-818-0578</p>
      </div>
    </div>
  );
}

export default Footer;
