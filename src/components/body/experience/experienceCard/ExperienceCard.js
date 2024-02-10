import React from 'react'
import "./experienceCard.css";
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

            {achievement.company && <div className="achievement-company"><label>Company: </label>{achievement.company}</div>}
            {achievement.institue && <div className="achievement-company"><label>Institue: </label>{achievement.institue}</div>}
            {/* <div className="achievement-instructor"><label>Instructor: </label>{achievement.instructor}</div> */}
            <div className="achievement-desc">{achievement.description}</div>
          </CCardText>
          {achievement?.certificate && 
            <CButton
            href={achievement.certificate}
            className="certificate-button"
            target='_blank'
          >
            Certificate
          </CButton>
          }
          {achievement?.link && 
            <CButton
            href={achievement.link}
            className="certificate-button"
            target="_blank"
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