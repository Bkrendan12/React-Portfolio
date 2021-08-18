import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <a className="footerIconGithub" href="https://github.com/Bkrendan12">
        <img src={github} alt="Find me on github" />
      </a>
      <a
        className="footerIcon"
        href="https://www.linkedin.com/in/brendan-kurylo/"
      >
        <img src={linkedin} alt="Find me on linkedin" />
      </a>
    </div>
  );
}

export default Footer;
