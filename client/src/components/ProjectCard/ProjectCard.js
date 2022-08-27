import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ image, topic, subtopic, data }) => {
  return (
    <div className="container project">
      <div className="image">
        <span className="dot">
          <div className="imm">
            <img className="" src={image}></img>
          </div>
        </span>
      </div>
      <div className="align-centre">
        <div className="topic ">{topic}</div>
      </div>
      <div className="subtopic">{subtopic}</div>
      <div className="data">{data}</div>
    </div>
  );
};

export default ProjectCard;
