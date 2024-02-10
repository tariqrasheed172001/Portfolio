import React from "react";
import Separator from "../../common/seperator/Separator";
import { achievementData } from "../../Data/achievements";
import "./achieve.css";
import AchievementCard from "./achievementCard/AchievementCard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function Achieve() {
  const data = achievementData;
  return (
    <div className="achievements">
      <Separator />
      <div style={{ display: "flex", alignItems:"center" }}>
        <EmojiEventsIcon className="option-icon" fontSize="large" />
        <label className="section-title">Achievements</label>
      </div>
      <div
        className="achievement-list"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        {data.map((achievement) => {
          return <AchievementCard achievement={achievement} />;
        })}
      </div>
    </div>
  );
}

export default Achieve;
