import React from "react";
import "./educationCard.css";
import { CCard,CCardImage,CCardBody,CCardTitle,CCardText } from '@coreui/react';

function EducationCard({ classs }) {
  return (
    <div className="education-card">
      {/* <img src={classs.logo} className='education-logo' alt='logo' />
       */}

      <CCard style={{ width: "18rem" }} className="default-card">
        <CCardImage
          
          className="education-logo"
          src={classs.logo}
        />
        <CCardBody>
          <CCardTitle>
            <label className="company-name">{classs.company}</label>
          </CCardTitle>
          <CCardText>
            <div className="education-info">
              <div className="education-dates">
                <label>{classs.dateJoining}</label>-
                <label>{classs.dateEnd}</label>
              </div>
              <div className="education-desc">
                <p>{classs.description}</p>
              </div>
            </div>
          </CCardText>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default EducationCard;
