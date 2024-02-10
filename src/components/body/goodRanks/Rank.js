import React from "react";
import Separator from "../../common/seperator/Separator";
import { Ranks } from "../../Data/goodRanks";
import AttributionIcon from "@mui/icons-material/Attribution";

import "./rank.css";
import RankCard from "./rankCard/RankCard";

function Rank() {
  const data = Ranks;

  return (
    <div className="education">
      <Separator />
      <div style={{ display: "flex", alignItems:"center" }}>
        <AttributionIcon className="option-icon" fontSize="large" />
        <label className="section-title">Coding Ranks & Profiles</label>
      </div>
      <div className="education-list" data-aos="fade-left">
        {data.map((classs) => {
          return <RankCard classs={classs} />;
        })}
      </div>
    </div>
  );
}

export default Rank;
