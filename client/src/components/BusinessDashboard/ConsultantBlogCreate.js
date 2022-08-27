import React, { useState } from "react";
import Layout from "./Layout";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";
const ConsultantBlogCreate = ({ history }) => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    content: "",
  });
  const [status, setStatus] = useState(null);

  const onChange = ({ target }) => {
    setBlog({ ...blog, [target.name]: target.value });
  };
  const onSubmit = async () => {
    try {
      const res = await axios.post("http://35.225.88.225/admin/blog", {
        title: blog.title,
        content: blog.content,
        writtenby: "consultant name", // we will get consultant name  from localstorage
      });
      if (res.status === 201) {
        setBlog({
          title: "",
          content: "",
        });
        setStatus("Successfully submitted for approval of Admin.");
        history.push("/dashboard");
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout>
      <div className="edit-modal backdrop">
        <div className="modal editForm">
          <Link to="/dashboard/file">Upload File</Link>
          <div className="close">
            <Link to="/dashboard">
              <p>Back</p>
            </Link>
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
          {status && <div className="status">{status}</div>}

          <button className="create btn btn-primary" onClick={onSubmit}>
            Create
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ConsultantBlogCreate;
