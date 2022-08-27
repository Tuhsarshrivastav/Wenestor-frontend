import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CONSULTANT, BUSINESS } from "../../constants";
import { GrAttachment } from "react-icons/gr";
import * as filesApi from "../../api/filesApi";
import $ from "jquery";
import { MdSend } from "react-icons/md";
const classGenerator = (person, chatIsConsultant) => {
  if (
    (person === CONSULTANT && !chatIsConsultant) ||
    (person === BUSINESS && chatIsConsultant)
  ) {
    return "card sender w-75 ml-0 mb-2 p-2 ";
  } else return "card reciever w-75 mr-0 mb-2 p-2 ";
};
export default function ChatCard({
  chats,
  person,
  status,
  sendMsg,
  title,
  close,
  display,
}) {
  const chatsContent = chats
    ? chats.map((chat) => (
        <div
          key={chat.message_id}
          className={classGenerator(person, chat.isConsultant)}
        >
          {chat.isFile ? (
            <div
              className="btn-link"
              onClick={() => filesApi.fetchChatFile(chat.message.id)}
            >
              {chat.message.file_url}
            </div>
          ) : (
            chat.message
          )}
        </div>
      ))
    : "";
  useEffect(() => {
    $("#custom_chat_card_body").scrollTop(
      $("#custom_chat_card_body")[0]
        ? $("#custom_chat_card_body")[0].scrollHeight
        : 0
    );
  });
  const [msg, setMsg] = useState({ file: "", input_file: "", text: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    if (msg.text === "" && msg.file == "") return;
    if (msg.file !== "") {
      setMsg({ ...msg, file: "", input_file: "" });
      sendMsg({ ...msg, text: "" });
    } else {
      setMsg({ ...msg, text: "", input_file: "" });
      sendMsg(msg);
    }
  };
  const onChange = (name, value) => {
    if (name !== "file") {
      setMsg({ ...msg, [name]: value });
      window.setTimeout(() => {
        $("#text-area1234")[0].style.height = "45px";
        $("#text-area1234")[0].style.height =
          $("#text-area1234")[0].scrollHeight + "px";
      }, 0);
      return;
    }

    setMsg({
      ...msg,
      input_file: value.value,
      [name]: value.files[0],
    });
  };
  return (
    <div
      className={
        "card shadow-lg animate__animated animate__backInDown " +
        (display ? "d-auto" : "d-none")
      }
    >
      <div className="card-header ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="h5 text-info">{title}</div>
          <button type="button" onClick={close} className="close">
            ×
          </button>
        </div>
      </div>
      <div
        className="card-body"
        id="custom_chat_card_body"
        style={{ height: "50vh", minHeight: "50vh", overflow: "auto" }}
      >
        {chatsContent}
      </div>
      <div className="card-footer p-0">
        {status === 1 ? (
          <>
            {msg.input_file === "" ? (
              ""
            ) : (
              <div className=" d-flex justify-content-between mr-2 mt-2 ml-2">
                <div className="text-info h5">{msg.file.name}</div>
                <button
                  type="button"
                  onClick={() => setMsg({ ...msg, input_file: "", file: "" })}
                  className="close"
                >
                  ×
                </button>
              </div>
            )}
            <form onSubmit={onSubmit} className="mb-2 mt-2">
              <div
                className="d-flex align-items-end w-100 m-0 "
                style={{ minHeight: "50px" }}
              >
                <div className="col-1 rounded-0 btn text-secondary ">
                  <label htmlFor="file-input2" style={{ cursor: "pointer" }}>
                    <GrAttachment size="1.5em" />
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="file-input2"
                    value={msg.input_file}
                    onChange={({ target }) => {
                      onChange(target.name, target);
                    }}
                    className="d-none"
                  />
                </div>
                <textarea
                  type="text"
                  value={msg.text}
                  name="text"
                  id="text-area1234"
                  placeholder="Type a message"
                  style={{
                    height: $("#text-area1234")[0]
                      ? $("#text-area1234")[0].scrollHeight
                      : "45px",
                    minHeight: "45px",
                    maxHeight: "100px",
                  }}
                  onChange={({ target }) => onChange(target.name, target.value)}
                  className="form-control col-10  p-2 rounded m-auto"
                />

                <button
                  type="submit"
                  className="btn  text-secondary  text-capitalize col-1  rounded-0"
                  value="send"
                >
                  <MdSend size="2em" />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-info text-center h5 p-3 text-bold">
            <strong> Your request is not accepted. </strong>
            Please wait for business to accept your request
          </div>
        )}
      </div>
    </div>
  );
}

ChatCard.propTypes = {
  chats: PropTypes.array,
  person: PropTypes.string,
  status: PropTypes.number,
  sendMsg: PropTypes.func,
  title: PropTypes.string,
  close: PropTypes.func,
  display: PropTypes.bool,
};
