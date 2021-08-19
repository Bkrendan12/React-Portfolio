import React from "react";
import WorkoutTrackerImg from "../assets/workout.png";
import BudgetTrackerImg from "../assets/budget.png";
import GenreImg from "../assets/genre.png";
import SubTrackerImg from "../assets/subTracker.png";
import NoteTakerImg from "../assets/noteTaker.png";

function Portfolio() {
  const data = [
    {
      title: "Workout Tracker",
      imageLink: WorkoutTrackerImg,
      activeLink: "https://stormy-wildwood-67945.herokuapp.com/",
      repoLink: "https://github.com/Bkrendan12/Workout-Tracker",
    },
    {
      title: "Budget Tracker",
      imageLink: BudgetTrackerImg,
      activeLink: "https://enigmatic-citadel-14562.herokuapp.com/",
      repoLink: "https://github.com/Bkrendan12/Budget-Tracker",
    },
    {
      title: "Genre Blog",
      imageLink: GenreImg,
      activeLink: "https://multicultural-celsius-99954.herokuapp.com/",
      repoLink: "https://github.com/Bkrendan12/Genre-Blog",
    },
    {
      title: "Subscription Tracker",
      imageLink: SubTrackerImg,
      activeLink: "https://evening-fortress-06751.herokuapp.com/",
      repoLink: "https://github.com/Bkrendan12/Subscription-Tracker",
    },
    {
      title: "Note Taker",
      imageLink: NoteTakerImg,
      activeLink: "https://note-taker-bk.herokuapp.com/",
      repoLink: "https://github.com/Bkrendan12/Express-Note-Taker",
    },
  ];
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      {data.map((e) => (
        <div>
          <h3>{e.title}</h3>
          <img src={e.imageLink} alt="projectImg" />
          <a href={e.activeLink}>Live Application</a>
          <a href={e.repoLink}>Github Repository</a>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
