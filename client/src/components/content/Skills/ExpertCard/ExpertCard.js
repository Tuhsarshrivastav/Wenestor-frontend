import React from "react";
import { Link } from "react-router-dom";
import "./ExpertCard.css";
import expert1 from "../../../../Images/expert1.png";
import expert2 from "../../../../Images/expert2.png";
import expert3 from "../../../../Images/expert3.png";
import expert4 from "../../../../Images/expert4.png";

const ExpertCard = ({ image, name, experience, profile_id }) => {
  const images = [expert1, expert2, expert3, expert4];
  return (
    <Link to={`/expert/profile/${profile_id}`}>
      <div className="expert-card">
        <div className="img-container">
          <img src={images[image]} alt="Expert-Image" />
        </div>
        <h3 className="expert-name">{name}</h3>
        <div className="experience">{experience} years of experience</div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          culpa?
        </div>
      </div>
    </Link>
  );
};

export default ExpertCard;
