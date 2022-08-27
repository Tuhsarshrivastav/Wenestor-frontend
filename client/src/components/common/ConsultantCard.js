import React from "react";
import PropTypes from "prop-types";

export default function ConsultantCard({ value, onCardClick }) {
  const name = value.name;
  const experience = value.experience;
  const solution = value.solution;
  const industry = value.industry;
  const suggestion = undefined;
  const name_of_business = value.name_business;
  const type_business = value.type_business;
  return (
    <div
      className="card shadow-lg mb-3 animate__animated animate__bounceInUp"
      onClick={() => onCardClick(value.id, value.name)}
    >
      <div className="card-header">
        <h4 className="text-capitalize text-info">{name}</h4>
      </div>
      <div className="card-body">
        <div className="card-text">
          {experience ? (
            <div className="card-text">
              <p className="text-muted display-5 ">
                <span className="h5 font-weight-bold text-dark">
                  Experience
                </span>
                {" : "}
                {experience}
              </p>
            </div>
          ) : (
            ""
          )}
          {name_of_business ? (
            <div className="card-head">
              <p className="text-muted display-5 ">
                <span className="h5 font-weight-bold text-dark">
                  Name of Business
                </span>

                {" : "}
                {name_of_business}
              </p>
            </div>
          ) : (
            ""
          )}
          {suggestion ? (
            <div className="card-head">
              <p className="text-muted display-5 ">
                <span className="font-weight-bold text-dark h5">
                  Suggestion
                </span>
                {" : "}
                {suggestion}
              </p>
            </div>
          ) : (
            ""
          )}
          {solution ? (
            <div className="card-head">
              <p className="text-muted display-5 ">
                <span className="font-weight-bold text-dark h5">Solution</span>
                {" : "}
                {solution}
              </p>
            </div>
          ) : (
            ""
          )}
          {industry ? (
            <div className="card-head">
              <p className="text-muted display-5 ">
                <span className="font-weight-bold text-dark h5">industry</span>
                {" : "}
                {industry}
              </p>
            </div>
          ) : (
            ""
          )}
          {type_business ? (
            <div className="card-head">
              <p className="text-muted display-5 ">
                <span className="font-weight-bold text-dark h5">
                  Business Type
                </span>
                {" : "}
                {type_business}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

ConsultantCard.propTypes = {
  value: PropTypes.object.isRequired,
  onCardClick: PropTypes.func.isRequired,
};
