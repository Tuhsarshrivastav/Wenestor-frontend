import React from "react";
import "./ProjectCard.css";
import axios from "axios";
import { API_URL } from "../../services/url";
const baseUrl = API_URL;

const AllProjectsCard = ({project}) => {
  console.log("project",project);

  const applyToProject = async()=>{
    const consultant_id = localStorage.getItem("consultant_id");
    const token = localStorage.getItem("consultant_token");
    const project_id = project.project_id;
    const res = await axios.post(baseUrl+"/api/consultant/projectappliedbyconsultant",  {
      consultant_id : consultant_id,
      project_id : project_id
    },{
      headers: {
        authorization: `Bearer ${token}`,
      }
    });
  }
  return (
    <div className="blog-card">
      <div className="blog-card__content">
        <div className="description">
          <span className="bold">Title: </span>
          {project.title}
        </div>
        <div className="description">
          <span className="bold">Domains: </span>
          {project.domains}
        </div>
        <div className="description">
          <span className="bold">Description: </span>
          {project.description}
        </div>
      </div>
      <div className="card-actions">
        <div
          className="reject"
          onClick={applyToProject}
          // DeleteBlogByid
        >
          Apply
        </div>
      </div>
    </div>
    
    // <div className="blog-card">
    //   <div className="blog-card__content">
    //     <div className="description">
    //       <span className="bold">Title: </span>
    //       {"title"}
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
    //   <div className="card-actions">
    //     <div
    //       className="reject"

    //       // DeleteBlogByid
    //     >
    //       Apply
    //     </div>
    //   </div>
    // </div>
    // <div className="blog-card">
    //   <div className="blog-card__content">
    //     <div className="description">
    //       <span className="bold">Title: </span>
    //       {props.title}
    //     </div>
    //     <div className="description">
    //       <span className="bold">Domains: </span>
    //       {props.domain}
    //     </div>
    //     <div className="description">
    //       <span className="bold">Description: </span>
    //       {props.description}
    //     </div>
    //   </div>
    //   <div className="card-actions">
    //     <div
    //       className="reject"

    //       // DeleteBlogByid
    //     >
    //       Apply
    //     </div>
    //   </div>
    // </div>
  );
};

export default AllProjectsCard;
