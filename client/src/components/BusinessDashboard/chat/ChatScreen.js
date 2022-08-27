import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";
import "./chat.css";
import axios from "axios";
import { API_URL } from "../../../services/url";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;
import jwt from "jwt-decode";
import io from "socket.io-client";
const ENDPOINT = baseUrl; // "https://talk-a-tive.herokuapp.com"; -> After deployment
var socket, selectedChatCompare;

const ChatScreen = ({ match, location }) => {
  const data = location.customobject;
  console.log("Customobject", data);

  const [messages, setMessages] = useState([]);
  const [sendMessage, setSendMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", jwt(localStorage.getItem("token")).data);
    socket.on("connected", () => setSocketConnected(true));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let chat_id;
    const fetchChatList = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: { authorization: `Bearer ${token}` },
        };

        try {
          console.log(
            "cons_id" + data.consultant_id + "project_id" + data.project_id
          );
          const res = await axios.get(
            `${baseUrl}/api/business/chat/${data.consultant_id}/${data.project_id}`,
            config
          );
          console.log("chat_id send smg", res.data.data[0].chat_id);
          chat_id = res.data.data[0].chat_id;
          // console.log("chat_id ",chat_id);
        } catch (error) {
          console.log(error);
        }
        console.log("vvvvvvimp ", chat_id);
        socket.emit("join chat", chat_id);
        const res = await axios.get(
          baseUrl +
            "/api/business/chat/" +
            data.consultant_id +
            "/" +
            data.project_id +
            "/" +
            data.business_id,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(res);
        console.log("messages", res.data.data);

        setMessages(res.data.data);
        // setExperts(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchChatList();
    selectedChatCompare = chat_id;
  }, []);

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      if (selectedChatCompare.chat_id !== newMessageRecieved.chat._id) {
        console.log("no match");
      } else {
        console.log(
          " newMessageRecieved.message ............",
          newMessageRecieved.message
        );
        setMessages([...messages, newMessageRecieved.message]);
      }
    });
  });

  const sendMessageBusiness = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    let chat_id;
    try {
      console.log(
        "cons_id" + data.consultant_id + "project_id" + data.project_id
      );
      const res = await axios.get(
        `${baseUrl}/api/business/chat/${data.consultant_id}/${data.project_id}`,
        config
      );
      console.log("chat_id send smg", res.data.data[0].chat_id);
      chat_id = res.data.data[0].chat_id;
      // console.log("chat_id ",chat_id);
    } catch (error) {
      console.log(error);
    }

    if (chat_id === undefined) {
      console.log("first if ");
      chat_id = null;
    }
    const message = sendMessage;
    const formData = new FormData();
    formData.append("chat_file", null);
    console.log("res");
    formData.append("text", message);
    formData.append("consultant_id", data.consultant_id);
    formData.append("project_id", data.project_id);
    formData.append("chat_id", chat_id);
    console.log(formData);
    // const formData = {};

    try {
      const res = await axios.post(
        baseUrl + "/api/business/chat",
        formData,
        config
      );
      if (res.status === 200) {
        console.log("business side send msg", res.data.data);
        socket.emit("new message", res.data.data);
        setMessages([...messages, res.data.data.message]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="mesgs">
        <div className="msg_history">
          {messages.map((msg, key) => (
            <>
              {msg.isBusiness && <OutgoingMessage key={key} message={msg} />}
              {msg.isConsultant && <IncomingMessage key={key} message={msg} />}
            </>
          ))}
        </div>
        <div className="type_msg">
          <div className="input_msg_write">
            <textarea
              className="form-control"
              placeholder="Type a message"
              name="message"
              id="message"
              value={sendMessage}
              onChange={(e) => setSendMessage(e.target.value)}
              // error={props.error.message}
            />
            <button
              className="btn btn-lg w-100 btn-dark"
              style={{ float: "right" }}
              type="button"
              onClick={sendMessageBusiness}
            >
              <i className="far fa-comment-dots text-warning">SEND</i>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatScreen;
