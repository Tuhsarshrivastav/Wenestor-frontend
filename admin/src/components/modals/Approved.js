import React from "react";
import "./modal.css";
import tick from "../../Images/tick.svg";
import close from "../../Images/close.svg";

const ApprovedModal = ({ onClose }) => {
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal">
        <div className="close" onClick={onClose}>
          <img src={close} alt="X" className="close" />
        </div>
        <img src={tick} alt="success" className="tick" />
        <div className="title">The blog is Approved successfully</div>
        <div className="view-btn">View</div>
      </div>
    </div>
  );
};

export default ApprovedModal;
