import React, { useState } from "react";
import "./modal.css";
import close from "../../Images/close.svg";

const EditModal = ({ blogToEdit, onClose }) => {
  const [blog, setBlog] = useState(blogToEdit);
  const onChange = ({ target }) => {
    setBlog({ ...blog, [target.name]: target.value });
  };
  const onSubmit = async () => {
    console.log("submit)", blog);
  };
  return (
    <div className="edit-modal backdrop">
      <div className="modal editForm">
        <div className="close" onClick={onClose}>
          <img src={close} alt="X" className="close" />
        </div>
        <div className="input-field">
          <span className="input-label">Title: </span>
          <input
            type="text"
            value={blog.title}
            name="title"
            onChange={onChange}
          />
        </div>
        <div className="input-field">
          <span className="input-label">Description: </span>
          <input
            type="text"
            value={blog.description}
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="input-field content">
          <input
            type="text"
            value={blog.content}
            placeholder="Content"
            name="content"
            onChange={onChange}
          />
        </div>
        <button className="create btn btn-primary" onClick={onSubmit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditModal;
