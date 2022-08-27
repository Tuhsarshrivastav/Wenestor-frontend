import React, { useState } from "react";
import "./BlogCard.css";
import RejectModal from "../../modals/Reject";
import axios from "axios";
import { API_URL } from "../../../services/url";

const BlogApprovedCard = ({ title, content, blog_id, setEditBlog }) => {
  const [rejectModal, setRejectModal] = useState("");
  const closeRejectModal = (yesNo) => {
    setRejectModal(null);
  };
  const DeleteBlogByid = async () => {
    try {
      const token = localStorage.getItem("admin");
      const res = await axios.delete(`${API_URL}/admin/blog/${blog_id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.messagge);
    }
  };
  return (
    <>
      {rejectModal && (
        <RejectModal
          deleteApproveblog={DeleteBlogByid}
          message={rejectModal}
          onClose={closeRejectModal}
        />
      )}
      <div className="blog-card">
        <div key={blog_id} className="blog-card__content">
          <div className="title">
            <span className="bold">Title: </span>
            {title}
          </div>
          <div className="description">
            <span className="bold">Description: </span>
            {content}
          </div>
        </div>
        <div className="card-actions">
          <div
            className="edit"
            onClick={() =>
              setRejectModal("Are you sure you want to save changes?")
            }
          >
            Edit
          </div>
          <div
            className="view"
            onClick={() =>
              setEditBlog({ title, content, description: "", blog_id })
            }
          >
            View
          </div>
          <div
            className="delete"
            onClick={() => setRejectModal("Are you sure you want to delete ?")}
          >
            Delete
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogApprovedCard;
