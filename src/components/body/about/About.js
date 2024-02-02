import React from "react";
import Social from "../../common/socialContact/Social";
import TypeWriterEffect from "react-typewriter-effect";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info" data-aos="fade-right" data-aos-duration="2000">
          <span data-aos="fade-right" data-aos-duration="1000">Hello 👋 I'm</span> <br /> <span className="info-name" data-aos="fade-left" data-aos-duration="2000"> Tariq Rasheed</span>{" "}
          <br />
          <span data-aos="fade-right" data-aos-duration="3000" > Student At NIT Srinagar </span>
        </div>
        <div className="about-picture">
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            src={require("../../../assets/picture.svg").default}
            className="picture"
            alt=""
          />
        </div>
      </div>
      <div className="more-info">
        <TypeWriterEffect
          data-aos="fade-right"
          textStyle={{ 
              fontFamily: "'Work Sans', sans-serif",
              fontSize:"16px",
              color: "black",
              fontWeight:"0",
              lineHeight:"1.5rem"
            }}
          startDelay={100}
          cursorColor="rgba(255, 255, 255, 0)"
          text="My name is Tariq Rasheed.I was born on 26 DECEMBER 2001. i am a
        programmer, a compitative coder , a web designer , a photographer , a
        teacher and a lifetime student. I am currently student at NIT SRINAGAR in
        the department of electronics and communication engineering. My field of
        intrests include: programming and web development. MY hobbies are
        playing football,listening songs,playing guitar,reading books,chess,video games and
        travelling."
          typeSpeed={25}
        />
      </div>

      <div className="about-bottom">
        <Social />
      </div>
    </div>
  );
}

export default About;
