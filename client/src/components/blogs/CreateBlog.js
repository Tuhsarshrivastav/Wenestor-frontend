import React, { useState } from "react";
import "./createBlog.css";
import { postBlog } from "../../api/blogs";

const CreateBlog = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
  });
  const [status, setStatus] = useState(null);

  const onChange = ({ target }) => {
    setBlogData({ ...blogData, [target.name]: target.value });
  };

  const onSubmit = async (cons_id) => {
    setStatus("Publishing your Blog...");
    try {
      const consultant_id = localStorage.getItem("id");
      const res = await postBlog(blogData, consultant_id);
      setStatus("Successfully submitted for approval of Admin.");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="cb__heading">Write new Blog</div>
      <div className="cb__form-container">
        <div className="cb__title cb__input-field">
          <div className="label">Title*</div>
          <input
            type="text"
            value={blogData.title}
            name="title"
            placeholder="Enter title"
            onChange={onChange}
          />
        </div>
        <div className="cb__input-field cb__description">
          <div className="label">content*</div>
          <input
            type="text"
            name="content"
            placeholder="Enter Content"
            value={blogData.content}
            onChange={onChange}
          />
        </div>

        <div className="cb__input-field publish">
          <button onClick={onSubmit} className="cb__publish-btn">
            Publish Blog
          </button>
        </div>
        {status && <div className="status">{status}</div>}
      </div>
    </>
  );
};

export default CreateBlog;
