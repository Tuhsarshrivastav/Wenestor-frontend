import React, { useState } from "react";
import "./modal.css";
import close from "../../Images/close.svg";
import { addBlog } from "../../services/services";

const CreateModal = ({ onClose }) => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    content: "",
  });
  const onChange = ({ target }) => {
    setBlog({ ...blog, [target.name]: target.value });
  };
  const onSubmit = () => {
    addBlog({
      title: blog.title,
      content: blog.content,
      writtenBy: "admin",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateModal;
