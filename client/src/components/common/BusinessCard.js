import React from "react";
import PropTypes from "prop-types";
import { AiFillDelete, AiFillEdit, AiFillCloseCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import * as filesApi from "../../api/filesApi";
import { Link } from "react-router-dom";
import { CONSULTANT } from "../../constants";
export default function BusinessCard({
  value,
  onCardClick,
  onMoreClick,
  onDelete,
  onClose,
  onEdit,
  person,
  alert,
}) {
  const title = value.title;
  const description =
    value.description.length < 200
      ? value.description
      : value.description.substr(0, 200) + "...more";
  let questions = value.questions.map((ques) => ques.value).join(" : ");
  questions =
    questions.length < 200 ? questions : questions.substr(0, 200) + "...more";

  // let domains = value.domains.map((domain) => domain.value).join(" : ");
  // domains = domains.length < 200 ? domains : domains.substr(0, 200) + "...more";
  let domains = value.domains.join(", ").substr(0, 200);
  const files = value.files
    ? value.files.map((fileObj) => (
        <button
          className="btn btn-link"
          key={fileObj.id}
          onClick={() => filesApi.fetchFile(fileObj.id)}
        >
          {fileObj.file_url}
        </button>
      ))
    : "";
  const diff = Date.now() - Date.parse(value.post_time);
  let time = diff / (1000 * 3600 * 24);
  if (time < 1) {
    time = diff / (1000 * 3600);
    if (time < 1) {
      time = diff / (1000 * 60);
      if (time < 1) {
        time = diff / 1000;
        time = parseInt(time) + " seconds ago";
      } else time = parseInt(time) + " minutes ago";
    } else {
      time = parseInt(time) + " hours ago";
    }
  } else {
    time = parseInt(time) + "days ago";
  }

  return (
    <>
      {/* {person === CONSULTANT ? (
        ""
      ) : (
        <ul className="nav nav-pills mb-3">
          <li className="nav-item">
            <button className="nav-link btn btn-default text-success" onClick={() => onEdit(value.id)}>
              <AiFillEdit />EDIT
            </button>
          </li>

          <li>
            <button className="nav-link btn-default btn text-danger" onClick={() => onDelete(value.id)}>
              <AiFillDelete />DELETE
            </button>
          </li>
          <li>
            <button className="nav-link btn btn-default text-warning " onClick={() => onClose(value.id)}>
            <AiFillCloseCircle  />CLOSE
            </button>
          </li>
        </ul>
      )} */}

      <div
        onClick={
          () =>
            person === CONSULTANT ? onCardClick(value.id) : "" /*onCardClick*/
        }
        className={
          "card pt-3 shadow-lg mb-5 d-flex animate__animated animate__fadeInUp" +
          (alert ? "border border-primary" : "")
        }
        style={{
          minWidth: "100%",
          cursor: person === CONSULTANT ? "pointer" : "auto",
        }}
      >
        {/* Collapse part start */}
        <div className="collapse" id={"options" + value.id}>
          <div className="card-body w-100 p-0">
            <ul className="nav nav-pills ">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-default text-success"
                  onClick={() => {
                    console.log("clicked edit", value.id);
                    onEdit(value.id);
                  }}
                >
                  <AiFillEdit />
                  EDIT
                </button>
              </li>
              <li>
                <button
                  className="nav-link btn-default btn text-danger"
                  onClick={() => onDelete(value.id)}
                >
                  <AiFillDelete />
                  DELETE
                </button>
              </li>
              <li>
                <button
                  data-toggle="collapse"
                  data-target={"#options" + value.id}
                  className="nav-link btn btn-default text-warning "
                  onClick={() => onClose(value.id)}
                >
                  <AiFillCloseCircle />
                  CLOSE
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Collapse part ends here */}
        <div className="card-body">
          <div className="d-flex flex-row justify-content-lg-between mb-2">
            <div className="w-100">
              <div className="d-flex flex-row justify-content-between align-items-end w-100">
                <small className="text-mute ">Posted {time}</small>
                {alert ? (
                  <div className="alert text-info">Unread msgs</div>
                ) : (
                  ""
                )}
              </div>
              <h3 className="card-title text-success">{title}</h3>
            </div>
            {person === CONSULTANT ? (
              ""
            ) : (
              <button
                className="btn btn-default"
                type="button"
                data-toggle="collapse"
                data-target={"#options" + value.id}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <BsThreeDotsVertical />
              </button>
            )}
          </div>

          <div className="card-text">
            <p className="text-muted display-5">
              <span className="text-dark font-weight-bold h5">
                {"Description"}
              </span>
              {" : "}
              {description}
            </p>
            {person === CONSULTANT ? (
              ""
            ) : (
              <>
                {/* <div className="card-text">
                  <p className="text-muted display-5 ">
                    <span className="text-dark font-weight-bold h5">
                      {"Questions"}
                    </span>
                    {" : "}
                    {questions}
                  </p>
                </div> */}
                <div className="card-text">
                  <p className="text-muted display-5 ">
                    <span className="text-dark font-weight-bold h5">
                      {"Domain of the projects"}
                    </span>
                    {" : "}
                    {domains}
                  </p>
                </div>
                {files.length > 0 ? (
                  <div className="card-text">
                    <p className="text-muted display-5 ">
                      <span className="text-dark font-weight-bold h5">
                        {"Files of the projects"}
                      </span>
                      {" : "}
                      {files}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
        </div>
        <div className="card-footer">
          {person === CONSULTANT ? (
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="text-primary text-capitalize">
                {value.name_business}
              </h3>
              <div>
                <small className="text-mute">Business Type</small>
                <h5 className="text-primary text-capitalize">
                  {value.type_business}
                </h5>
              </div>
              <div>
                <small className="text-mute">Domains</small>
                <h5 className="text-primary text-capitalize">
                  {value.domains.join(", ")}
                </h5>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="#"
                onClick={() => onMoreClick(value.id)}
                className="card-link text-uppercase"
              >
                MORE
              </Link>
              {person === CONSULTANT ? (
                <Link
                  to="#"
                  className="card-link text-uppercase"
                  onClick={() => onCardClick(value.id)}
                >
                  Business Details
                </Link>
              ) : (
                <>
                  <Link
                    to={"/business/dashboard/createprojects/" + value.id}
                    className="card-link"
                  >
                    EDIT
                  </Link>
                  <Link
                    to={`/business/dashboard/invite-experts/${value.id}`}
                    onClick={() => onCardClick(value.id)}
                    className="card-link text-uppercase"
                  >
                    Replies/Invites
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

BusinessCard.propTypes = {
  value: PropTypes.object.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onMoreClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  onClose: PropTypes.func,
  onEdit: PropTypes.func,
  person: PropTypes.string,
};
