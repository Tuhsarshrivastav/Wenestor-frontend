import React from "react";
import "./activity.css";
const Activity = ({ type, subtype, time }) => {
  return (
    <div>
      <div className="activity">
        <div className="type">
          {type}
          <div className="subtype">{subtype}</div>
        </div>
        <div className="time">{time}</div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Activity;
