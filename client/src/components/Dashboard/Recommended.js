import React from "react";
import "./Recommended.css";

const Recommended = ({imageUrl,by,title,desc,value,type}) => {
  return (
    <div className="card ">
      <h3>Recommended Projects</h3>
      <div className="by">
        <div className="image container"><img src={imageUrl}></img></div>
        <p>{by}</p>
      </div>
      <div className="title">
      {title}
      </div>
      <div className="desc">
        {desc}
      </div>
      <div className="pack row">
        <h5 className="col value">{value}</h5>
        <h6 className="type">{type}</h6>
      </div>
    </div>
  );
};

export default Recommended;
