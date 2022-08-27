import React from "react";
import "./ProjectCard.css";
const ApplyedProjectCard = ({title,domain,description}) => {
  return (
    <div className="blog-card">
      <div className="blog-card__content">
        <div className="description">
          <span className="bold">Title: </span>
          {title}
        </div>
        <div className="description">
          <span className="bold">Domains: </span>
          {domain}
        </div>
        <div className="description">
          <span className="bold">Description: </span>
          {description}
        </div>
      </div>
    </div>
    // <div className="blog-card">
    //   <div className="blog-card__content">
    //     <div className="description">
    //       <span className="bold">Title: </span>
    //       {"domain"}
    //     </div>
    //     <div className="description">
    //       <span className="bold">Domains: </span>
    //       {"domain"}
    //     </div>
    //     <div className="description">
    //       <span className="bold">Description: </span>
    //       {"description"}
    //     </div>
    //   </div>
    // </div>
  );
};

export default ApplyedProjectCard;
