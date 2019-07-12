import pianoImg from "./assests/piano-game.png";
import pottyTrackerImg from "./assests/potty-tracker.png";
import workoutImg from "./assests/workout.png";
import exampleSiteImg from "./assests/example-site.png";
export const PROJECTS = [
  {
    title: "example site",
    link: "https://rcyork.github.io/example-site/",
    description: [
      "Generic example site with common components",
      "Responsive design",
      "HTML5",
      "CSS3 (Sass)",
      "A few lines of vanilla JS (ES2015+)"
    ],
    repo: "https://github.com/rcyork/example-site",
    img: exampleSiteImg,
    alt: "website screenshot"
  },
  {
    title: "piano game",
    link: "https://rcyork.github.io/piano-game/",
    description: [
      "Piano note guessing game",
      "Built with React",
      "Stats and theme persisted via local storage",
      "Includes keyboard shortcuts: up and down arrow for selecting sharp or flat notes as well as the letters for guessing the notes"
    ],
    repo: "https://github.com/rcyork/piano-game",
    img: pianoImg,
    alt: "website screenshot"
  },

  {
    title: "potty tracker",
    link: "http://18.219.43.162",
    description: [
      "Used to track dogs potty habits to aid in training",
      "Also helpful so everyone in a household can check if the dog(s) needs to be let out",
      `Can create or join "rooms" in order to share with multiple people`,
      "Built with React",
      `Data persisted via "lowdb"`,
      "Logs can be deleted or even updated"
    ],
    repo: "https://github.com/rcyork/potty-tracker",
    img: pottyTrackerImg,
    alt: "website screenshot"
  },
  {
    title: "workout program",
    link: "https://rcyork.github.io/workout",
    description: [
      `Better version of popular beginner weightlifting program "5x5"`,
      "Built with React",
      "Data persisted via local storage",
      "Has a set progression for each lift and will calculate it for you automatically so all you have to do is lift the weights it tells you",
      "If you fail a workout twice in a row it will automatically drop the weight for you and let you work your way back up"
    ],
    repo: "https://github.com/rcyork/workout",
    img: workoutImg,
    alt: "website screenshot"
  }
];
