import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../services/url";
import jwt from "jwt-decode";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;
const ChatList = ({ chatList }) => {

  const [projectDetails, setProjectDetails] = useState([]);
  console.log("imp", chatList);
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const token = localStorage.getItem("consultant_token");
        const consultant_id = jwt(localStorage.getItem("consultant_token")).data
        .consultant_id;
        console.log("consult at chatlist ",consultant_id);
        const res = await axios.get(
          baseUrl + "/api/consultant/projectappliedbyconsultant/" + consultant_id,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(res);
        // setState(res.data.data);
        console.log("projects ", res.data.data);

        setProjectDetails(res.data.data);
        // setExperts(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProject();
  }, []);

  // console.log( "title",projectDetails.map((list,key)=>(
  //   list.title
  //   )));

  return (
    <div
      id={"cl_"}
      className="chat_list"
      onClick={(e) => {
        // onClick(e, "cl_");
      }}
    >
      <div className="chat_people">
        <div className="chat_img">
          {" "}
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="avatar"
          />{" "}
        </div>
        <div className="chat_ib">
          <h3>{chatList.name}</h3>
          {projectDetails.map((list, key) => (
            <p key={key}>{list.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
