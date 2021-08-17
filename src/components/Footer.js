import React from "react";
import github from "../../public/github.png";
import linkedin from "../../public/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <a className="footerIconGithub" href="https://github.com/scottgeleas">
        <img src={github} alt="Find me on github" />
      </a>
      <a className="footerIcon" href="https://www.linkedin.com/in/scottgeleas/">
        <img src={linkedin} alt="Find me on linkedin" />
      </a>
    </div>
  );
}

export default Footer;
