import React from "react";
import About from "./about/About";
import "./body.css";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Education from "./education/Education";
import Achieve from "./achievements/Achieve";
import Rank from "./goodRanks/Rank";
import Experience from "./experience/Experience";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="ranks">
        <Rank />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="achievements" >
        <Achieve />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
