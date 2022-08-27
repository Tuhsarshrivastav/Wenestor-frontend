import React, { useState } from "react";
import "./ProjectCard.css";
const dummy = {
  title: "web development",
  domains: "web dev",
  description: "web development web development web development",
};
const ProjectCard = ({ project = dummy, setEditProject, setDeleteProject }) => {
  const { title, domains, description, trendingprojects_id } = project;
  console.log(project);
  return (
    <div className="skill-card">
      <div className="skill-card__content">
        <div className="name">
          <span className="bold">Title: </span>
          {title}
        </div>
        <div className="brief">
          <span className="bold">Domains: </span>
          {domains}
        </div>
        <div className="details">
          <span className="bold">Description: </span>
          {description}
        </div>
      </div>

      <div className="card-actions">
        <div
          style={{ cursor: "pointer" }}
          className="edit"
          onClick={() => setEditProject({ project })}
        >
          Edit
        </div>
        <div
          className="delete"
          onClick={() => {
            setDeleteProject({
              message: "Are you sure you want to delete ?",
              id: trendingprojects_id,
            });
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
