import { Card } from "@material-ui/core";
import React from "react";
import "./ProjectStyles.css";
const ProjectCard = ({ icon, title, subtitle, description }) => {
  return (
    <div className="project-card">
      <div className="logo">
        <img src={icon} alt="" />
      </div>
      <div className="title">{title}</div>
      <p className="subtitle">{subtitle}</p>
      {description}
    </div>
  );
};

export default ProjectCard;
