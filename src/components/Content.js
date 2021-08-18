import React from "react";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

function Content({ page }) {
  switch (page) {
    case "about me":
      return <AboutMe />;
    case "portfolio":
      return <Portfolio />;
    case "contact":
      return <Contact />;
    case "resume":
      return <Resume />;
    default:
      return <AboutMe />;
  }
}

export default Content;
