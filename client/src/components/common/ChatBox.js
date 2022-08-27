import React, { useState } from "react";
import PropTypes from "prop-types";
import { CONSULTANT, BUSINESS } from "../../constants";
// import { IoMdAttach } from "react-icons/io";
import $ from "jquery";
import { GrAttachment } from "react-icons/gr";
import { MdSend } from "react-icons/md";
import * as filesApi from "../../api/filesApi";
import "bootstrap";
const classGenerator = (person, chatIsConsultant) => {
  if (
    (person === CONSULTANT && !chatIsConsultant) ||
    (person === BUSINESS && chatIsConsultant)
  ) {
    return "card sender w-75 ml-0 mb-2 p-2 ";
  } else return "card reciever w-75 mr-0 mb-2 p-2 ";
};

export default function ChatBox({
  chats,
  person,
  status,
  sendMsg,
  title,
  onRequestChange,
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
        $("#text-area123")[0].style.height = "45px";
        $("#text-area123")[0].style.height =
          $("#text-area123")[0].scrollHeight + "px";
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
      className="modal fade"
      id="chatModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="text-info">{title}</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
          </div>
          <div className="modal-body bg-light">
            <div className="msg-area" id="msg-area">
              {chatsContent}
              {person === BUSINESS && status === 0 ? (
                <>
                  <div className="btn-grp">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => onRequestChange(1)}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => onRequestChange(2)}
                    >
                      Reject
                    </button>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="modal-footer p-0 justify-content-start">
            {msg.input_file === "" ? (
              ""
            ) : (
              <div className=" d-flex justify-content-between mr-2 mt-2 ml-2 w-100">
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
            <form onSubmit={onSubmit} className="mb-2 mt-2 w-100">
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
                  id="text-area123"
                  placeholder="Type a message"
                  style={{
                    height: $("#text-area123")[0]
                      ? $("#text-area123")[0].scrollHeight
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
          </div>
        </div>
      </div>
    </div>
  );
}

ChatBox.propTypes = {
  chats: PropTypes.array.isRequired,
  person: PropTypes.string.isRequired,
  sendMsg: PropTypes.func.isRequired,
  status: PropTypes.number,
  title: PropTypes.string.isRequired,
  onRequestChange: PropTypes.func,
};
