import React from "react";
import "./ProjectCard.css";

const AllProjectsCard = ({ data }) => {
  console.log(data);
  return (
    <div className="blog-card">
      <div className="blog-card__content">
        <div className="description">
          <span className="bold">Title: </span>
          {data.title}
        </div>
        <div className="description mt-2">
          <span className="bold">Domains: </span>
          {data.domains}
        </div>
        <div className="description mt-2">
          <span className="bold">Description: </span>
          {data.description}
        </div>
        <div className="description mt-2">
          <span className="bold">questions: </span>
          {data.questions.map((ques)=>{
            return <> {ques.value}</>
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProjectsCard;
