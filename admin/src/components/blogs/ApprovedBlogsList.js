import React, { useEffect, useState } from "react";
import BlogApprovedCard from "./blogCard/BlogApprovedCard";
import ApprovedModal from "../modals/Approved";
import RejectModal from "../modals/Reject";
import EditModal from "../modals/Edit";
import Loader from "../../common/Loader";
import axios from "axios";
import { API_URL } from "../../services/url";

const ApprovedBlogsList = () => {
  const [approvedSuccess, setApprovedSuccess] = useState(false);
  const [editBlog, setEditBlog] = useState(null);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const closeApprovedModal = () => {
    setApprovedSuccess(false);
  };

  useEffect(() => {
    async function getAllBlogs() {
      try {
        const response = await axios.get(`${API_URL}/api//blog/approved`);
        setState(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getAllBlogs();
  }, [state.length]);
  return (
    <>
      {approvedSuccess && <ApprovedModal onClose={closeApprovedModal} />}
      {editBlog && (
        <EditModal blogToEdit={editBlog} onClose={() => setEditBlog(null)} />
      )}
      {loading && <div className="loader">{<Loader />}</div>}
      {state.length > 0 &&
        state.map(({ title, content, blog_id }) => (
          <BlogApprovedCard
            className="blog-card"
            title={title}
            content={content}
            blog_id={blog_id}
            setApprovedSuccess={setApprovedSuccess}
            setEditBlog={setEditBlog}
          />
        ))}
    </>
  );
};

export default ApprovedBlogsList;
