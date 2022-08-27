import React, { useState } from "react";
import "./BlogsDashboard.css";
import Layout from "../Layout.js";
import AllBlogsList from "../../blogs/AllBlogsList";
import ApprovedBlogsList from "../../blogs/ApprovedBlogsList";
import CreateModal from "../../modals/Create";

const BlogsDashboard = () => {
  const [list, setList] = useState("all");
  const [createBlog, setCreateBlog] = useState(false);

  const onClose = () => {
    setCreateBlog(false);
  };

  return (
    <>
      <Layout>
        {createBlog && (
          <CreateModal onClose={onClose} />
        )}
        <div className="blogs__list">
          <div className="blogs__list-heading">
            <div
              className={`blogs ${list === "all" && "selected"}`}
              onClick={() => setList(list === "all" ? "approved" : "all")}
            >
              All Blogs
            </div>
            <div
              className={`blogs ${list == "approved" && "selected"}`}
              onClick={() => setList(list === "all" ? "approved" : "all")}
            >
              Approved Blogs
            </div>
          </div>
          <div className="create-blog" onClick={() => setCreateBlog(true)}>
            + Create Blog
          </div>
          {list === "all" ? <AllBlogsList /> : <ApprovedBlogsList />}
        </div>
      </Layout>
    </>
  );
};

export default BlogsDashboard;
