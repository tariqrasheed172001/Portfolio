import React from "react";
import Separator from "../../common/seperator/Separator";
import "./experience.css";
import ExperienceCard from "./experienceCard/ExperienceCard";
import { experienceData } from "../../Data/experience";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

function Experience() {
  const data = experienceData;
  return (
    <div className="achievements">
      <Separator />
      <div style={{ display: "flex", alignItems:"center" }}>
        <BusinessCenterIcon className="option-icon" fontSize="large" />
        <label className="section-title">Experiance</label>
      </div>
      <div className="achievement-list" data-aos="fade-left">
        {data.map((experience) => {
          return <ExperienceCard achievement={experience} />;
        })}
      </div>
    </div>
  );
}

export default Experience;
