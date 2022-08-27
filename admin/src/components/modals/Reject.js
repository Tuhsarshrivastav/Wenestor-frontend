import React from "react";
import "./modal.css";
import close from "../../Images/close.svg";
const RejectModal = ({
  onClose,
  id,
  message,
  deleteBlog,
  deleteApproveblog,
}) => {
  console.log(message);
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal">
        <div className="close" onClick={onClose}>
          <img src={close} alt="X" className="close" />
        </div>
        <div className="title">{message}</div>
        <div className="modal-actions">
          <div className="yes btns" onClick={deleteBlog || deleteApproveblog}>
            Yes
          </div>
          <div className="no btns">No</div>
        </div>
      </div>
    </div>
  );
};

export default RejectModal;
