import React from "react";
import "./App.css";
import { SectionHeading } from "./components/SectionHeading/SectionHeading";
import { Projects } from "./components/Projects/Projects";
import { ContactMe } from "./components/ContactMe/ContactMe";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1 className="name">Ryan York</h1>
        <p className="jobDescription">Front-End Developer</p>
        <SectionHeading text="Projects" />

        <Projects />
        <SectionHeading text="Contact Me" />
        <ContactMe />
      </div>
    );
  }
}

export default App;
