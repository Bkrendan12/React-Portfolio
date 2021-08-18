import React from "react";
import WorkoutTrackerImg from "../assets/workouttracker.png";

function Portfolio() {
  const data = [
    {
      imageLink: WorkoutTrackerImg,
      activeLink: "heroku",
      repoLink: "https://github.com/Bkrendan12/Workout-Tracker",
    },
    { imageLink: "", activeLink: "", repoLink: "" },
    { imageLink: "", activeLink: "", repoLink: "" },
    { imageLink: "", activeLink: "", repoLink: "" },
    { imageLink: "", activeLink: "", repoLink: "" },
    { imageLink: "", activeLink: "", repoLink: "" },
  ];
  return (
    <div>
      {data.map((e) => (
        <div>
          <img src={e.imageLink} alt="project photo" />
          <a href={e.activeLink}>Live app</a>
          <a href={e.repoLink}>Repo link</a>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
