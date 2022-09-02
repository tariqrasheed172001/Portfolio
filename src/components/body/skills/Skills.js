import React  from "react";
import Separator from "../../common/seperator/Separator";
import { skillData } from "../../Data/skills";
import SkillCard from "./SkillCard";
import "./skills.css";

function Skills() {
  const data = skillData;

  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
            <div className="skills-list">
              {data.map((skill) => {
                return <SkillCard skill={skill} />;
              })}
            </div>
      </div>
    </div>
  );
}

export default Skills;
