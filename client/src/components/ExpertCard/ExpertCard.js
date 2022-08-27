import React from "react";
import "./ExperCard.css";

const ExpertCard = ({ imageUrl, head, text }) => {
  return (
    <div className="">
      <div className="Expimage">
        <img src={imageUrl} />
        <div className="mtext">
          <div className="head">
            {head}
            <p></p>
          </div>
          <div className="text">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
