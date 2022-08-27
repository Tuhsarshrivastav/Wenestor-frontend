import React from "react";
import * as filesApi from "../../api/filesApi";
import PropTypes from "prop-types";
export default function ProjectDetailsCard({ currProject, onReplyClick }) {
  // console.log(currProject);
  return (
    <div className="card animate__animated animate__bounceInLeft mb-5 shadow-lg">
      <div className="card-header">
        <h2 className="text-capitalize text-primary">{currProject.title}</h2>
      </div>
      <div className="card-body">
        <div className="card-text">
          <span className="text-dark font-weight-bold h5">
            {"Description : "}
          </span>
          <p className="text-muted display-5 ">{currProject.description}</p>
        </div>
        <div className="card-text">
          <span className="text-dark font-weight-bold h5">
            {"Questions : "}
          </span>
          <ul className="list-group list-group-flush text-muted display-5 ">
            {currProject.questions.map((question) => (
              <li className="list-group-item pl-0" key={question.id}>
                {question.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-text">
          <p className="text-dark font-weight-bold h5 w-100">{"Domains : "}</p>
          <ul className="list-inline text-info display-5 text-capitalize">
            {currProject.domains.map((domain, key) => (
              <li
                className="p-1 border border-primary rounded mr-2 bg-info text-white list-inline-item"
                key={key}
              >
                {domain}
              </li>
            ))}
          </ul>
        </div>
        {currProject.files.length > 0 ? (
          <div className="card-text">
            <span className="text-dark font-weight-bold h5 w-100">
              {"Files : "}
            </span>
            <ul className="list-group list-group-flush text-muted display-5 ">
              {currProject.files.map((file) => (
                <li
                  onClick={() => filesApi.fetchFile(file.id)}
                  className="list-group-item btn-link pl-0"
                  key={file.id}
                >
                  {file.file_url}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="card-footer d-flex justify-content-center">
        <button
          className="btn btn-primary"
          onClick={() =>
            onReplyClick(currProject.id, currProject.name_business)
          }
        >
          Reply
        </button>
      </div>
    </div>
  );
}

ProjectDetailsCard.propTypes = {
  currProject: PropTypes.object.isRequired,
  onReplyClick: PropTypes.func.isRequired,
};
