import React from "react";
import "./ExpertCardStyles.css";

const ExpertCard = (props) => {
  return (
    <div className="card-of-expert">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
};

export default ExpertCard;
