import React from "react";
import { CONSULTANT, BUSINESS } from "../../constants";
import PropTypes from "prop-types";
export default function ButtonGrp({ person, changePerson }) {
  return (
    <div className="btn-group w-100">
      <button
        className={
          person === CONSULTANT ? "btn btn-success" : "btn btn-outline-success"
        }
        onClick={() => changePerson(CONSULTANT)}
      >
        As a Consultant
      </button>
      <button
        className={
          person === BUSINESS ? "btn btn-success" : "btn btn-outline-success"
        }
        onClick={() => changePerson(BUSINESS)}
      >
        As a Business
      </button>
    </div>
  );
}
ButtonGrp.propTypes = {
  person: PropTypes.string.isRequired,
  changePerson: PropTypes.func.isRequired,
};
