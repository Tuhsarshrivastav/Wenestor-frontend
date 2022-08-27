import React from "react";
import "./Recommended.css";
import demo from "../../Images/blog2.png";
const Recommended = () => {
  return (
    <div className="outbox">
      <h2 className="title">Recommended Projects</h2>
      <div className="by">
        <img className="image" src={demo}></img>
        <p>by Ajay Malhotra</p>
      </div>
      <div className="text1 container">
        Need a designer to form branding essentials for my business
      </div>
      <div className="text2 container ">
        looking for a graphic designer to create all the branding assets for my
        startup
      </div>
    </div>
  );
};

export default Recommended;
