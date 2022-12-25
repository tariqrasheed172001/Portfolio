import React from "react";
import Separator from "../../common/seperator/Separator";
import { Ranks } from "../../Data/goodRanks";


import "./rank.css";
import RankCard from "./RankCard";


function Rank() {
    const data = Ranks;
  
  return (
    
    <div className="education">
    <Separator />
    
      <label className="section-title">Good Ranks</label>
      <div className="education-list">
        {
          data.map((classs) => {
            return (
                <RankCard classs={classs} />
            )
          })
        }
      </div>
      
    </div>
  );

}

export default Rank