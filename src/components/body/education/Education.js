import React, { useEffect, useState } from "react";
import Separator from "../../common/seperator/Separator";
import { educationData } from "../../Data/education";
import "./education.css";
import EducationCard from "./EducationCard";


function Education() {
  const data = educationData;
  
  return (
    
    <div className="education">
    <Separator />
    
      <label className="section-title">Education</label>
      <div className="education-list">
        {
          data.map((classs) => {
            return (
                <EducationCard classs={classs} />
            )
          })
        }
      </div>
      
    </div>
  );
}

export default Education;
