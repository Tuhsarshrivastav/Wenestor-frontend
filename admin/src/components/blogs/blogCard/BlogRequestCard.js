import React, { useState } from "react";
import "./BlogCard.css";
import axios from "axios";
import RejectModal from "../../modals/Reject";

const BlogRequestCard = ({
  title,
  content,
  blog_id,
  setApprovedSuccess,
  approvedtogoforwebsite,
}) => {
  const [rejectModal, setRejectModal] = useState(null);
  const closeRejectModal = (yesNo) => {
    setRejectModal(null);
  };
  const approvedBlog = async () => {
    try {
      const token = localStorage.getItem("admin");
      const body = {
        approvedtogoforwebsite: 1,
      };
      const config = {
        headers: { authorization: `Bearer ${token}` },
      };
      const res = await axios.put(
        `http://35.225.88.225/admin/blog/${blog_id}`,
        body,
        config
      );
      console.log(res.data.data);
      if (res.status === 201) {
        setApprovedSuccess(true);
      }
    } catch (error) {
      console.log(error.messagge);
    }
  };
  // this api will work after redeploy
  const DeleteBlogByid = async () => {
    try {
      const token = localStorage.getItem("admin");
      const res = await axios.delete(
        `http://35.225.88.225/admin/blog/${blog_id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.messagge);
    }
  };

  return (
    <>
      {rejectModal && (
        <RejectModal
          deleteBlog={DeleteBlogByid}
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
            {approvedtogoforwebsite !== 1 ? (
              <div
                style={{ cursor: "pointer" }}
                className="approve"
                onClick={approvedBlog}
              >
                Approve
              </div>
            ) : (
              <div className="approve">Approved</div>
            )}
            <div
              className="reject"
              onClick={
                () => setRejectModal("Are you sure you want to reject ?")
                // DeleteBlogByid
              }
            >
              Reject
            </div>
          </div>
      </div>
    </>
  );
};

export default BlogRequestCard;
