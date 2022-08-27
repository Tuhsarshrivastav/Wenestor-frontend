import React from "react";
const OutgoingMessage = ({ message }) => {
  console.log("bhai tu bhi aa jay", message);
  return (
    <div className="outgoing_msg mb-1">
      <div className="sent_msg">
        <p>{message.isConsultant == true && message.message}</p>
      </div>
    </div>
  );
};
export default OutgoingMessage;