import React from "react";
import About from "./about/About";
import "./body.css";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Work from "./education/Education";
import Achieve from "./achievements/Achieve";
import Rank from "./goodRanks/Rank";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="Rank">
        <Rank />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="achievements" >
        <Achieve />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
