import React from "react";
import Separator from "../../common/seperator/Separator";
import { educationData } from "../../Data/education";
import "./education.css";
import EducationCard from "./educationCard/EducationCard";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function Education() {
  const data = educationData;

  return (
    <div className="education">
      <Separator />
      <div style={{ display: "flex", alignItems:"center" }}>
        <BorderColorIcon className="option-icon" fontSize="large" />
        <label className="section-title">Education</label>
      </div>
      <div
        className="education-list"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        {data.map((classs) => {
          return <EducationCard classs={classs} />;
        })}
      </div>
    </div>
  );
}

export default Education;
