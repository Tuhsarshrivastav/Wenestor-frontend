import React from "react";

const IncomingMessage = ({message}) => {
  return (
    <div className="incoming_msg mb-1">
      <div className="incoming_msg_img">
        {" "}
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="avatar"
        />{" "}
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{message.isConsultant? message.message:""}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomingMessage;
