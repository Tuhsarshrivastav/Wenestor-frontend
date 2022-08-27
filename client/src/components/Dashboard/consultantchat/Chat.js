import React, { useEffect, useState } from "react";
import "./chat.css";
import Layout from "../Layout";
import ChatList from "./ChatList";
import jwt from "jwt-decode";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../../../services/url";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;

const Chat = () => {
  const [chatLists, setChatLists] = useState([]);
  const [bus_id, setBus_id] = useState();
  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const token = localStorage.getItem("consultant_token");

        // const token = localStorage.getItem("");

        const res = await axios.get(baseUrl + "/api/consultant/chat", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        // console.log(res);
        console.log("lists", res.data.data);

        setChatLists(res.data.data);
        // setExperts(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchChatList();
  }, []);

  // const b_id =  ;
  console.log("b_id", jwt(localStorage.getItem("token")).data.business_id);

  return (
    <Layout>
      <div className="container-fluid animate__animated animate__wobble py-5">
        <div className="container">
          {/* <h3 className=" text-center text-capitalize">Project Chating</h3> */}
          {/* <p className=" text-center">all about react native</p>w */}
          {/* <p className=" text-center">Team created by @tushar</p> */}
          <div className="messaging">
            <div className="inbox_msg">
              <div className="inbox_people">
                <div className="headind_srch">
                  <div className="recent_heading">
                    <h5>Business</h5>
                  </div>
                </div>
                <div className="inbox_chat">
                  {chatLists.map((list, key) => (
                    <Link
                      to={{
                        pathname: "/dashboard/chatscreen/" + list.project_id,
                        customobject: {
                          project_id: list.project_id,
                          business_id: list.business_id,
                          consultant_id: jwt(
                            localStorage.getItem("consultant_token")
                          ).data.consultant_id,
                        },
                      }}
                      key={key}
                    >
                      <ChatList chatList={list} />
                    </Link>
                  ))}
                </div>
              </div>
              {/* <div className="mesgs">
                <div className="msg_history">
                  <IncomingMessage />
                  <OutgoingMessage />
                </div>
                <div className="type_msg">
                  <div className="input_msg_write">
                    <textarea
                      className="form-control"
                      placeholder="Type a message"
                      name="message"
                      id="message"
                      // value={props.message}
                      // onChange={props.handleChange}
                      // error={props.error.message}
                    />
                    <button
                      className="btn btn-lg w-100 btn-dark"
                      style={{ float: "right" }}
                      type="button"
                    >
                      <i className="far fa-comment-dots text-warning">SEND</i>
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
