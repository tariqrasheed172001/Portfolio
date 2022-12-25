import React, { useEffect, useState } from "react";
import "./web.css";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Web() {
  const [sshow, handleSshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleSshow(true);
      } else handleSshow(false);
    });
  }, []);

  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <AssuredWorkloadIcon
            className={`option-icon ${sshow && "nav_black_option_icon"}`}
            fontSize="medium"
          />
          <label >Projects</label>
        </a>
      </div>
      <div className="web-option">
        <a href="#achievements">
          <EmojiEventsIcon
            className={`option-icon ${sshow && "nav_black_option_icon"}`}
            fontSize="medium"
          />
          <label>Achievements</label>
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <LaptopMacIcon
            className={`option-icon ${sshow && "nav_black_option_icon"}`}
            fontSize="medium"
          />
          <label >Skills</label>
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <BusinessCenterIcon
            className={`option-icon ${sshow && "nav_black_option_icon"}`}
            fontSize="medium"
          />
          <label >Education</label>
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <span className={`option-icon ${sshow && "nav_black_option_icon"}`}>
            <PhoneForwardedIcon fontSize="medium" />
          </span>
          <label >Contact</label>
        </a>
      </div>
    </div>
  );
}

export default Web;
