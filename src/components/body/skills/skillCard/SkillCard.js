import React from "react";
import "./skillCard.css";

function SkillCard({ skill }) {
  const handleClick = (event) => {
    event.preventDefault();

    const url = skill.link;
    window.open(url, '_blank');
  };
  return (
    <div className="skill-card" onClick={handleClick}>
      <div className="skill-icon">{skill.icon}</div>
      <label className="skill-name">{skill.name}</label>
    </div>
  );
}

export default SkillCard;
