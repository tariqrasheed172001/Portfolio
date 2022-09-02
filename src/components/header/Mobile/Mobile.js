import React from "react";
import "./mobile.css";
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';

function Mobile({ isOpen, setOpen }) {
  return (
    <div className="mobile" onClick={() => setOpen(!isOpen)}>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <AssuredWorkloadIcon className="option-icon" fontSize="large" />
            projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <LaptopMacIcon className="option-icon" fontSize="large" />
            skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <BusinessCenterIcon className="option-icon" fontSize="large" />
            work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <span className="option-icon">
              <PhoneForwardedIcon fontSize="large" />
            </span>
            contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
