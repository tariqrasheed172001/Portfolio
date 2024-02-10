import React from "react";
import "./mobile.css";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AttributionIcon from '@mui/icons-material/Attribution';


function Mobile({ isOpen, setOpen }) {
  return (
    <div
      data-aos={isOpen ? "fade-left" : "fade-right"}
      className="mobile"
      onClick={() => setOpen(!isOpen)}
    >
      <div className="mobile-options">
        <div className="mobile-option">
          <a className="hover-underline-animation" href="#experience">
            <BusinessCenterIcon className="option-icon" fontSize="large" />
            Experience
          </a>
        </div>
        <div className="mobile-option">
          <a className="hover-underline-animation" href="#ranks">
            <AttributionIcon className="option-icon" fontSize="large" />
            Ranks
          </a>
        </div>
        <div className="mobile-option">
          <a className="hover-underline-animation" href="#project">
            <EngineeringIcon className="option-icon" fontSize="large" />
            projects
          </a>
        </div>
        <div className="mobile-option">
          <a className="hover-underline-animation" href="#achievements">
            <EmojiEventsIcon className="option-icon" fontSize="large" />
            Achievements
          </a>
        </div>
        <div className="mobile-option">
          <a className="hover-underline-animation" href="#skills">
            <LaptopMacIcon className="option-icon" fontSize="large" />
            skills
          </a>
        </div>
        <div className="mobile-option">
          <a className="hover-underline-animation" href="#education">
            <BorderColorIcon className="option-icon" fontSize="large" />
            Education
          </a>
        </div>
        <div className="mobile-option">
          <a className="hover-underline-animation" href="#contact">
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
