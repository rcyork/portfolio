import pianoImg from "./assests/piano-game.png";
import pottyTrackerImg from "./assests/potty-tracker.png";
import workoutImg from "./assests/workout.png";
import exampleSiteImg from "./assests/example-site.png";
export const PROJECTS = [
  {
    title: "Piano Note Guessing Game",
    link: "https://rcyork.github.io/piano-game/",
    description: [
      "Highlight a random note for the user to guess",
      "Automatically stores guess statistics",
      "Has keyboard shortcuts for power users (up arrow = sharp, down arrow = flat)",
      "Selectable Dark and Light theme",
      "Implemented with React, CSS Grid, and local storage"
    ],
    repo: "https://github.com/rcyork/piano-game",
    img: pianoImg,
    alt: "website screenshot"
  },

  {
    title: "Weight Training App",
    link: "https://rcyork.github.io/workout",
    description: [
      "Calculates what weights you should do following a linear percentage based workout routine.",
      "Will calculate next workout based on previous workout and if you completed the lifts or not",
      `Automatically lowers or raises your weight depending on the previous workouts' lift success`,
      "Includes chronological log of all workouts",
      "Implemented with React, CSS Grid, and persisted via local storage"
    ],
    repo: "https://github.com/rcyork/workout",
    img: workoutImg,
    alt: "website screenshot"
  },
  {
    title: "Potty Tracker",
    link: "http://18.219.43.162",
    description: [
      "Is used to track dogs' potty habits to aid in training",
      "Can be helpful so everyone in a household can check if the dog(s) needs to be let out",
      `Enables you to create or join "rooms" in order to share with multiple people`,
      "Includes logs that can be deleted or even updated",
      "Built with React, CSS Grid, and lowdb"
    ],
    repo: "https://github.com/rcyork/potty-tracker",
    img: pottyTrackerImg,
    alt: "website screenshot"
  },
  {
    title: "Modern Layout Site",
    link: "https://rcyork.github.io/example-site/",
    description: [
      "Responsive static site that showcases html/css implementations of common layout patterns",
      "Sticky Navbar",
      "Masonry Layout",
      "Grid of Cards",
      "Implemented with CSS Grid and flexbox"
    ],
    repo: "https://github.com/rcyork/example-site",
    img: exampleSiteImg,
    alt: "website screenshot"
  }
];
