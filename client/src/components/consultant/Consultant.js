import React, { useState, useEffect } from "react";
import BusinessCard from "../common/BusinessCard";
import { CONSULTANT } from "../../constants";
import * as chatsApi from "../../api/chatApi";
import { initialProjectModel } from "../../models/ProjectModel";
import $ from "jquery";
// import BusinessModal from "../common/BusinessModal";
import { fetchOptions } from "../../redux/actions/fetchOptionsAction";
import { connect } from "react-redux";
import * as projectsApi from "../../api/projectsApi";
// import ConsultantCard from "../common/ConsultantCard";
import PropTypes from "prop-types";
import ChatBox from "../common/ChatBox";
import LoadModal from "../common/LoadModal";
import { logout } from "../../redux/actions/loginAction";
import SelectInput from "../common/SelectInput";
import ProjectDetailsCard from "../common/ProjectDetailsCard";
import ChatCard from "../common/ChatCard";

function ConsultantOld({ options, fetchOptions, logout, ...props }) {
  const [currProjectId, setCurrProjectId] = useState("");
  const [preference, setPreference] = useState({
    domain_type: "",
    business_type: "",
    domain_text: "All",
  });
  const [projects, setProjects] = useState([]);
  console.log(projects);
  const [secondRow, setSecondRow] = useState(false);
  // const [current_business, setCurrentBusiness] = useState({});
  const [currBusiness, setCurrBusiness] = useState("");
  const [api, setApi] = useState(false);
  const [chatObj, setChatObj] = useState({
    status: 1,
    messages: [],
    chat_id: "",
  });
  const [chatcard, setChatCard] = useState(false);
  useEffect(() => {
    if (!options.business_types || options.business_types.length === 0) {
      setApi(false);
      fetchOptions();
    }
    const val = options.business_types[0];
    if (val) {
      setApi(true);
      projectsApi
        .loadProjectByPreference(preference)
        .then((res) => {
          setApi(false);
          setProjects(
            res.data.projects.map((project) => ({
              ...project,
              domains: project.domains.split(", "),
            }))
          );
        })
        .catch((err) => {
          if (err.response.status === 403 || err.response.status === 401) {
            logout();
            alert(
              "You are not logged in as Consultant. Please Login as consultant"
            );
            setApi(false);
            props.history.push("/login");
          }
        });
    }
  }, [options]);
  console.log(projects);
  const onCardClick = (id) => {
    setCurrProjectId(id);
    setApi(true);
    projectsApi.loadBusinessByProject(id).then(() => {
      setApi(false);
      setSecondRow(true);
      setChatCard(false);

      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      // setCurrentBusiness(res.data.business);
    });
  };
  const onMoreClick = (id) => {
    setCurrProjectId(id);
    $("#businessmodal").modal("toggle");
  };
  const changePreference = async ({ target }) => {
    setApi(true);
    let newPreference = { ...preference, [target.name]: target.value };
    if (target.name == "domain_type")
      newPreference.domain_text = target[target.selectedIndex].text;
    setPreference(newPreference);
    projectsApi.loadProjectByPreference(newPreference).then((res) => {
      setApi(false);
      setProjects(
        res.data.projects.map((project) => ({
          ...project,
          domains: project.domains.split(", "),
        }))
      );
    });
    // setPreference(id);
    setCurrProjectId("");
    setSecondRow(false);
  };
  const sendMsg = (msg) => {
    setApi(true);
    chatsApi
      .sendMsg(
        msg,
        currProjectId,
        CONSULTANT,
        chatObj.chat_id === "" ? null : chatObj.chat_id
      )
      .then((response) => {
        setApi(false);

        setChatObj({
          ...chatObj,
          messages: [...chatObj.messages, response.data.message],
          status: status === 2 ? 2 : chatObj.messages.length === 0 ? 0 : 1,
          chat_id: response.data.chat_id,
        });
      })
      .catch((err) => {
        setApi(false);
        if (err.response.status === 403) {
          alert("Please login again as Consultant");
          props.history.push("/login");
        }
      });
  };
  const funcBusinessCard = (project) => {
    return (
      <BusinessCard
        alert={!project.isConsultantRead}
        value={project}
        key={project.id}
        person={CONSULTANT}
        onCardClick={onCardClick}
        onMoreClick={onMoreClick}
      />
    );
  };
  const projectsAlert = projects.filter(
    (project) => project.isConsultantRead === false
  );
  const projectsNotAlert = projects.filter(
    (project) => project.isConsultantRead
  );
  const business_cards = [...projectsAlert, ...projectsNotAlert].map(
    (project) => funcBusinessCard(project)
  );

  const onReplyClick = (id, name) => {
    setCurrBusiness(name);
    setApi(true);
    chatsApi
      .loadChat(currProjectId)
      .then((response) => {
        setApi(false);
        const chat = response.data.chat;
        setChatObj(chat);
        const currProject = projects.filter(
          (project) => project.id === currProjectId
        )[0];
        if (currProject.isConsultantRead === false) {
          setProjects(
            projects.map((project) =>
              project.id === currProjectId
                ? { ...project, isConsultantRead: true }
                : project
            )
          );
        }
        setChatCard(true);
      })
      .catch((err) => {
        setApi(false);
        console.log(err);
        // console.log(err.response, err.response.data);
        if (err.response && err.response.status === 403) {
          logout();
          alert("User not found, Please login again");
          props.history.push("/login");
        } else alert(err.response.data.msg);
      });
  };
  const currProject =
    currProjectId === ""
      ? initialProjectModel
      : projects.find((project) => project.id === currProjectId);
  // const business_details_card = (
  //   <ConsultantCard
  //     person={CONSULTANT}
  //     key={current_business.id}
  //     value={current_business}
  //     onCardClick={onConsultantCardClick}
  //   />
  // );

  const selectbusiness = (
    <>
      {" "}
      <SelectInput
        options={[{ id: "", name: "All" }, ...options.business_types]}
        required={true}
        name="business_type"
        className="col-6"
        value={preference.business_type}
        label="Business Type"
        onChange={changePreference}
      />
      <SelectInput
        required={true}
        name="domain_type"
        className="col-6"
        onChange={changePreference}
        value={preference.domain_type}
        label="Domain Type"
        options={[{ id: "", name: "All" }, ...options.domain_types]}
      />
    </>
  );
  const chatBox = (
    <ChatBox
      chats={chatObj.messages}
      title={currBusiness}
      person={CONSULTANT}
      sendMsg={sendMsg}
      status={chatObj.status}
    />
  );

  return (
    <>
      <LoadModal open={api} />
      {chatBox}

      <div className="consultant-dashboard" style={{ minHeight: "100vh" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-xs-12 pr-5 border-right border-success">
              <div className="row">{selectbusiness}</div>
              <div className="row mt-5 d-flex flex-column">
                {projects.length > 0 ? (
                  business_cards
                ) : (
                  <h2 className="text-center text-info">
                    {api ? "Loading" : "No Projects here"}
                  </h2>
                )}
              </div>
            </div>
            <div
              className={
                "col-lg-5 col-xs-12 mx-auto " +
                (secondRow ? "d-auto" : "d-none")
              }
            >
              {
                <div className="row mt-5 d-flex flex-column">
                  <ProjectDetailsCard
                    currProject={currProject}
                    onReplyClick={onReplyClick}
                  />
                  <ChatCard
                    chats={chatObj.messages}
                    title={"Chat here"}
                    person={CONSULTANT}
                    sendMsg={sendMsg}
                    status={chatObj.status}
                    close={() => setChatCard(false)}
                    display={chatcard}
                  />
                </div>
              }
            </div>
          </div>
        </div>
        {/* <div className="consultant-flex">
          <div className="consultant-dashboard-row">
            <div className="btn-grp">{button_grp}</div>
            {business_cards}

          </div>
          <div className="consultant-dashboard-row">
            {secondRow ? business_details_card : ""}
          </div>
        </div> */}
      </div>
    </>
  );
}
function matchPropsToState(state) {
  return { options: state.options };
}
const matchDispatchToState = {
  fetchOptions,
  logout,
};
export default connect(matchPropsToState, matchDispatchToState)(ConsultantOld);

ConsultantOld.propTypes = {
  options: PropTypes.object,
  fetchOptions: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
