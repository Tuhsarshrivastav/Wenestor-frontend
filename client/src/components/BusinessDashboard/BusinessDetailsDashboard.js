import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BusinessCard from "../common/BusinessCard";
import PropTypes from "prop-types";
import $ from "jquery";
import { initialProjectModel } from "../../models/ProjectModel";
import {
  loadProjects,
  deleteProject,
} from "../../redux/actions/businessProjectAction";
import BusinessModal from "../common/BusinessModal";
import ChatBox from "../common/ChatBox";
import * as projectsApi from "../../api/projectsApi";
import * as chatsApi from "../../api/chatApi";
import BusinessSecondRow from "../business/businessDashboard/BusinessSecondRow";
import { BUSINESS } from "../../constants/";
import { logout } from "../../redux/actions/loginAction";
import LoadModal from "../common/LoadModal";
import { loadOptions } from "@babel/core";
import { useHistory } from "react-router-dom";

function BusinessDetailsDashboard({
  projects,
  loadProjects,
  deleteProject,
  logout,
  ...props
}) {
  const history = useHistory();
  const [currProjectId, setCurrProjectId] = useState("");
  const [secondRow, setSecondRow] = useState(true);
  const [isReplies, setIsReplies] = useState(true);
  const [replies, setReplies] = useState([]);
  const [invites, setInvites] = useState([]);
  const [currConsultant, setCurrConsultant] = useState({ id: "", name: "" });
  const [chatObj, setChatObj] = useState({
    status: 1,
    messages: [],
    chat_id: "",
  });
  const [api, setApi] = useState(false);
  useEffect(() => {
    loadOptions();

    setApi(false);
    loadProjects()
      .then(() => setApi(false))
      .catch((err) => {
        {
          console.log(err);
          if (err.response.status === 403 || err.response.status === 401) {
            alert("You are not logged in");
            logout();
            history.push("/login");
          } else {
            console.error(err);
            alert(err);
          }
        }
      });
  }, []);

  //Delete Project
  const onDelete = (id) => {
    let confirm_delete = confirm("Are u sure? You want to delete this project");
    if (!confirm_delete) return;
    deleteProject(id);
    if (id === currProjectId) {
      setCurrProjectId("");
      setReplies([]);
      setInvites([]);
    }
  };
  //Edit Project
  const onEdit = (id) => {
    console.log("onEdit func called", id);
    history.push("/business/dashboard/createprojects/" + id);
  };
  //More click
  const onMoreClick = (id) => {
    setCurrProjectId(id);
    $("#businessmodal").modal("toggle");
  };

  //Get replies/invites
  const onCardClick = (id) => {
    setSecondRow(true);
    setCurrProjectId(id);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (id !== currProjectId || !secondRow) {
      setIsReplies(true);
      loadReplies(id);
    }
  };
  //Loading replies
  const loadReplies = (id) => {
    setSecondRow(false);
    setApi(true);
    projectsApi.loadReplies(id).then((response) => {
      setApi(false);
      setSecondRow(true);
      setReplies(response.data.consultants);
    });
  };
  //Loading invites
  const loadInvites = (id) => {
    setApi(true);
    projectsApi
      .loadInvites(id)
      .then((response) => {
        setApi(false);
        setInvites(response.data.consultants);
      })
      .catch((err) => {
        setApi(false);
        const response = err.response;
        if (response.status === 404) setInvites([]);
        {
          alert("Sorry No more uninvited consultants");
          setIsReplies(true);
        }
      });
  };
  //Close replies/invites section
  const onClose = (id) => {
    if (id === currProjectId) setSecondRow(false);
  };
  //toggle invite/reply
  const changeisReplies = (value) => {
    if (value !== isReplies) {
      setIsReplies(value);
      if (value) loadReplies(currProjectId);
      else loadInvites(currProjectId);
    }
  };
  //Clicks on Consultant card

  const onConsultantCardClick = (id, name) => {
    setCurrConsultant({ id, name });
    setApi(true);
    chatsApi
      .loadChat(currProjectId, id)
      .then((response) => {
        $("#chatModal").modal("toggle");
        setApi(false);
        const chat = response.data.chat;
        setChatObj(chat);
      })
      .catch((err) => {
        setApi(false);
        alert(err.Message);
      });
  };
  const sendMsg = (msg) => {
    setApi(true);
    chatsApi
      .sendMsg(
        msg,
        currProjectId,
        BUSINESS,
        chatObj.chat_id === "" ? null : chatObj.chat_id,
        currConsultant.id
      )
      .then((response) => {
        setApi(false);
        setChatObj({
          ...chatObj,
          messages: [...chatObj.messages, response.data.message],
          status: 1,
        });
      });
  };
  const onRequestChange = (status) => {
    const chat_id = chatObj.chat_id;
    setApi(true);
    chatsApi.changeStatus(chat_id, status).then(() => {
      setApi(false);
      setChatObj({ ...chatObj, status: status });
    });
  };
  const currProject =
    currProjectId === ""
      ? initialProjectModel
      : projects.find((project) => project.id === currProjectId);

  const businessModal = <BusinessModal currProject={currProject} />;
  const business_row = projects.map((card) => (
    <BusinessCard
      key={card.id}
      value={card}
      onMoreClick={onMoreClick}
      onCardClick={onCardClick}
      onEdit={onEdit}
      onDelete={onDelete}
      onClose={onClose}
    />
  ));
  if (chatObj.messages.length > 0) {
    document.getElementById("msg-area").scrollTop =
      document.getElementById("msg-area").scrollHeight;
  }

  const chatBox = (
    <ChatBox
      chats={chatObj.messages}
      title={currConsultant.name}
      person={BUSINESS}
      sendMsg={sendMsg}
      status={chatObj.status}
      onRequestChange={onRequestChange}
    />
  );
  const secondRowContent = (
    <BusinessSecondRow
      values={isReplies ? replies : invites}
      onCardClick={onConsultantCardClick}
    />
  );
  // const ButtonGrp = (
  //   <div className="business-dashboard-btn-grp">
  //     <button
  //       className={isReplies ? "btn btn-dark" : "btn  btn-outline-dark"}
  //       onClick={() => changeisReplies(true)}
  //     >
  //       Replies
  //     </button>
  //     <button
  //       className={!isReplies ? "btn btn-dark" : "btn  btn-outline-dark"}
  //       onClick={() => changeisReplies(false)}
  //     >
  //       Invites
  //     </button>
  //   </div>
  // );
  const ButtonGrp = (
    <ul className="nav nav-pills mb-3 animate__animated animate__bounceInRight">
      <li className="nav-item">
        <a
          className={
            isReplies
              ? " nav-link btn btn-default active"
              : " nav-link btn btn-default "
          }
          onClick={() => changeisReplies(true)}
        >
          Replies
        </a>
      </li>
      <li className="nav-item">
        <a
          className={
            !isReplies
              ? "btn btn-default nav-link active"
              : "btn btn-default nav-link"
          }
          onClick={() => changeisReplies(false)}
        >
          Invites
        </a>
      </li>
    </ul>
  );

  return (
    <div style={{ minHeight: "100vh" }}>
      <LoadModal open={api} />
      {businessModal}
      {chatBox}
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            {business_row}
            {/* <div className="row center mb-3 center-align justify-content-center ">
              <Link
                className="btn btn-success add-btn"
                to="/business/dashboard/createprojects"
              >
                + {"   "}Add
              </Link>
            </div> */}
          </div>
          {secondRow ? (
            <div className="col-lg-6 col-sm-12">
              <div className="container-fluid">{ButtonGrp}</div>
              <div className="container-fluid">{secondRowContent}</div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
function matchStateToProps(state) {
  return { projects: state.projects };
}

const matchDispatchToProps = { loadProjects, deleteProject, logout };
export default connect(
  matchStateToProps,
  matchDispatchToProps
)(BusinessDetailsDashboard);

BusinessDetailsDashboard.propTypes = {
  projects: PropTypes.array,
  loadProjects: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
