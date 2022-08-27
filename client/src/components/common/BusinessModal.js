import React from "react";
import PropTypes from "prop-types";
import * as filesApi from "../../api/filesApi";
import "bootstrap";
export default function BusinessModal({ currProject }) {
  return (
    <>
      <div
        className="modal fade "
        role="dialog"
        id="businessmodal"
        data-toggle="modal"
        aria-hidden="false"
        aria-labelledby="myModalLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title text-primary text-uppercase">
                {currProject.title}
              </h5>
              <button
                type="button"
                className="close mt-1 p-0"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h5>{"Description"}</h5>
              <div className="box">
                <p>{currProject.description}</p>
              </div>
              <h5>Questions</h5>
              <ul className="list-group my-ul">
                {currProject.questions.map((ques) => (
                  <li className=" box" key={ques.id}>
                    {ques.value}
                  </li>
                ))}
              </ul>
              <h5>Domains</h5>
              <ul className="list-group my-ul">
                {currProject.domains.map((domain, inde) => (
                  <li className=" box" key={domain}>
                    {domain}
                  </li>
                ))}
              </ul>
              {currProject.files && currProject.files.length > 0 ? (
                <>
                  <h5>Files</h5>
                  <ul className="list-group my-ul">
                    {currProject.files.map((file) => (
                      <li
                        onClick={() => filesApi.fetchFile(file.id)}
                        className=" box btn-link"
                        key={file.id}
                      >
                        {file.file_url}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
BusinessModal.propTypes = {
  currProject: PropTypes.object.isRequired,
};
