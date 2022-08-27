import React, { useState } from "react";
import "./SkillCard.css";

const SkillCard = ({ skill, setEditSkill, setDeleteSkill }) => {
  const { name, brief, details, subskills, skill_id } = skill;
  console.log(skill);
  return (
    <div className="skill-card">
      <div className="skill-card__content">
        <div className="name">
          <span className="bold">Name: </span>
          {name}
        </div>
        <div className="brief">
          <span className="bold">Brief: </span>
          {brief}
        </div>
        <div className="details">
          <span className="bold">Details: </span>
          {details}
        </div>
        <div className="subskills">
          <span className="bold">Sub Skills: </span>
          {subskills}
        </div>
      </div>

      <div className="card-actions">
        <div
          style={{ cursor: "pointer" }}
          className="edit"
          onClick={() => setEditSkill({ skill })}
        >
          Edit
        </div>
        <div
          className="delete"
          onClick={() => {
            setDeleteSkill({
              message: "Are you sure you want to delete ?",
              id: skill.skills_id,
            });
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
