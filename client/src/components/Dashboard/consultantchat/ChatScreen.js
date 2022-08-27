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
    socket.emit("setup", jwt(localStorage.getItem("consultant_token")).data);
    socket.on("connected", () => setSocketConnected(true));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let chat_id;
    const fetchChatList = async () => {
      const token = localStorage.getItem("consultant_token");
      // const token = localStorage.getItem("");
      const config = {
        headers: { authorization: `Bearer ${token}` },
      };
      try {
        console.log(data.business_id + " hi " + data.project_id);
        const res = await axios.get(
          `${baseUrl}/api/consultant/chat/${data.business_id}/${data.project_id}`,
          config
        );
        console.log(
          "chat_id send smg for consutlant",
          res.data.data[0].chat_id
        );
        chat_id = res.data.data[0].chat_id;
      } catch (error) {
        console.log(error);
      }
      console.log("vvvvvvimp ", chat_id);
      socket.emit("join chat", chat_id);
      try {
        // const token = localStorage.getItem("consultant_token");

        const res = await axios.get(
          baseUrl + "/api/consultant/chat/" + data.project_id,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(res);
        console.log("messages", res.data.chat.messages);

        setMessages(res.data.chat.messages);
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
        // console.log(" newMessageRecieved.message ............", newMessageRecieved.message);
        setMessages([...messages, newMessageRecieved.message]);
      }
    });
  });

  const sendMessageConsultant = async () => {
    const token = localStorage.getItem("consultant_token");
    // const token = localStorage.getItem("");
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    let chat_id;
    try {
      console.log(data.business_id + " hi " + data.project_id);
      const res = await axios.get(
        `${baseUrl}/api/consultant/chat/${data.business_id}/${data.project_id}`,
        config
      );
      console.log("chat_id send smg for consutlant", res.data.data[0].chat_id);
      chat_id = res.data.data[0].chat_id;
    } catch (error) {
      console.log(error);
    }

    if (chat_id === undefined) {
      chat_id = null;
    }
    const message = sendMessage;
    const formData = new FormData();
    formData.append("chat_file", null);
    console.log("res");
    formData.append("text", message);
    formData.append("project_id", data.project_id);
    formData.append("chat_id", chat_id);
    console.log(formData);
    // const formData = {};

    try {
      const res = await axios.post(
        baseUrl + "/api/consultant/chat",
        formData,
        config
      );
      if (res.status === 200) {
        // window.location = "/trendingprojects";
        console.log("consultant side send msg", res.data.message);
        socket.emit("new message", res.data);
        setMessages([...messages, res.data.message]);
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
              {msg.isConsultant && <OutgoingMessage key={key} message={msg} />}
              {msg.isBusiness && <IncomingMessage key={key} message={msg} />}
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
              onClick={sendMessageConsultant}
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
