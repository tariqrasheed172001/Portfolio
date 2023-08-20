import React from 'react'
import "./achievementCard.css";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";

function ExperienceCard({achievement}) {
   return (
    <div className="achievement-card">
      <CCard style={{ width: "18rem" }}>
        <CCardBody>
            {
                achievement.date && 
                <div className="achievement-date">{achievement.date}</div>
            }   
          <CCardTitle>
            <label className="achievement-title">{achievement.title}</label>
          </CCardTitle>
          <CCardText>

            {achievement.company && <div className="achievement-company"><label>Institute: </label>{achievement.company}</div>}
            {/* <div className="achievement-instructor"><label>Instructor: </label>{achievement.instructor}</div> */}
            <div className="achievement-desc">{achievement.description}</div>
          </CCardText>
          {achievement?.certificate && 
            <CButton
            href={achievement.certificate}
            className="certificate-button"
          >
            Certificate
          </CButton>
          }
          {achievement?.link && 
            <CButton
            href={achievement.link}
            className="certificate-button"
          >
            Link
          </CButton>
          }
        </CCardBody>
      </CCard>
    </div>
  );
}

export default ExperienceCard