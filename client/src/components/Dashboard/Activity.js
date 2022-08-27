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
      <hr className="mt-2 mb-3"/>
    </div>
  );
};

export default Activity;
