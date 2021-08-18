import React from "react";
import MyResume from "../assets/brendanResume.pdf";

function Resume() {
  return (
    <div className="resume">
      <a href={MyResume}>My Resume</a>
    </div>
  );
}

export default Resume;
