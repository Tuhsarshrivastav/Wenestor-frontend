import React from "react";
import axios from "axios";
import "./modal.css";
import close from "../../Images/close.svg";
import { API_URL } from "../../services/url";

const RejectModal = ({ onClose, id, message }) => {
  console.log(message, id);
  const onDelete = async () => {
    console.log("deleting", id);
    try {
      const token = localStorage.getItem("admin");
      const res = await axios.delete(`${API_URL}/admin/skills/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal">
        <div className="close" onClick={onClose}>
          <img src={close} alt="X" className="close" />
        </div>
        <div className="title">{message}</div>
        <div className="modal-actions">
          <div className="yes btns" onClick={onDelete}>
            Yes
          </div>
          <div className="no btns" onClick={onClose}>
            No
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectModal;
