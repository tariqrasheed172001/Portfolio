import React from "react";
import "./achievementCard.css";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";

function AchievementCard({ achievement }) {
  return (
    <div className="achievement-card">
      <CCard style={{ width: "18rem" }}>
        <CCardBody>
          <div className="achievement-date">{achievement.date}</div>
          <CCardTitle>
            <label className="achievement-title">{achievement.title}</label>
          </CCardTitle>
          <CCardText>
            <div className="achievement-company"><label>company: </label>{achievement.company}</div>
            <div className="achievement-instructor"><label>Instructor: </label>{achievement.instructor}</div>
            <div className="achievement-desc">{achievement.description}</div>
          </CCardText>
          <CButton
            href={achievement.certificate}
            className="certificate-button"
          >
            Certificate
          </CButton>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default AchievementCard;
