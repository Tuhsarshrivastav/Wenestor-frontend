import React, { useState, useEffect } from "react";
import BlogRequestCard from "./blogCard/BlogRequestCard";
import ApprovedModal from "../modals/Approved";
import axios from "axios";
import Loader from "../../common/Loader";
import { API_URL } from "../../services/url";

const AllBlogsList = () => {
  const [approvedSuccess, setApprovedSuccess] = useState(false);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllBlogs = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("admin");
        const res = await axios.get(`${API_URL}/admin/blog`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setState(res.data.data);
      } catch (error) {
        console.log(error.messagge);
      } finally {
        setLoading(false);
      }
    };
    getAllBlogs();
  }, [state.length]);
  const closeApprovedModal = () => {
    setApprovedSuccess(false);
  };

  return (
    <>
      {approvedSuccess && <ApprovedModal onClose={closeApprovedModal} />}

      {loading && <div className="loader">{<Loader />}</div>}
      {state.length > 0 &&
        state.map(({ title, content, blog_id, approvedtogoforwebsite }) => (
          <BlogRequestCard
            className="blog-card"
            title={title}
            content={content}
            blog_id={blog_id}
            loading={loading}
            approvedtogoforwebsite={approvedtogoforwebsite}
            setApprovedSuccess={setApprovedSuccess}
            // setRejectModal={setRejectModal}
          />
        ))}
    </>
  );
};

export default AllBlogsList;
