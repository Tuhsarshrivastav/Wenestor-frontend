import React from "react";

const OutgoingMessage = ({message}) => {
  return (
    <div className="outgoing_msg mb-1">
      <div className="sent_msg">
        <p>{message.isBusiness?message.message:""}</p>
      </div>
    </div>
  );
};

export default OutgoingMessage;
