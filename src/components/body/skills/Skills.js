import React from "react";
import Separator from "../../common/seperator/Separator";
import { skillData } from "../../Data/skills";
import SkillCard from "./skillCard/SkillCard";
import "./skills.css";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

function Skills() {
  const data = skillData;

  return (
    <div className="skills">
      <Separator />
      <div style={{ display: "flex", alignItems:"center" }}>
        <LaptopMacIcon className="option-icon" fontSize="large" />
        <label className="section-title">Skills</label>
      </div>
      <div className="skills-container">
        <div
          className="skills-list"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          {data.map((skill) => {
            return <SkillCard skill={skill} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
