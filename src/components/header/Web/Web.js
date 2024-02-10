import React, { useEffect, useState } from "react";
import "./web.css";


function Web() {
  const [sshow, handleSshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleSshow(true);
      } else handleSshow(false);
    });
  }, []);

  return (
    <div className="web">
      <div className="web-option">
        <a href="#experience">
          <label className="hover-underline-animation" >Experience</label>
        </a>
      </div>
      <div className="web-option">
        <a href="#ranks">
          <label className="hover-underline-animation" >Ranks</label>
        </a>
      </div>
      <div className="web-option">
        <a href="#project">
          <label className="hover-underline-animation" >Projects</label>
        </a>
      </div>
      <div className="web-option">
        <a href="#achievements">
          <label className="hover-underline-animation" >Achievements</label>
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <label className="hover-underline-animation" >Skills</label>
        </a>
      </div>
      <div className="web-option">
        <a href="#education">
          <label className="hover-underline-animation" >Education</label>
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <label className="hover-underline-animation" >Contact</label>
        </a>
      </div>
    </div>
  );
}

export default Web;
