import React, { useState, useEffect } from "react";
import { getAllBlogs } from "../../api/blogs";
import { Link } from "react-router-dom";
import BlogCard from "./blogCard";
import "./allBlogs.css";
import BlogsLanding from "../../Images/BlogsLanding.png";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  // const [error, setError] = useState("");
  const [status, setStatus] = useState(null);
  useEffect(async () => {
    try {
      const res = await getAllBlogs();
      setBlogs(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <section className="allBlogs">
      <div className="landing-image">
        <img src={BlogsLanding} alt="Blogs-Landing-image" />
      </div>
      <div className="allblogs-heading">
        <div className="title">Blogs</div>
        <div className="description">
          Insights on the freelance economy, strategy execution, and the future
          of work.
        </div>
      </div>

      <nav className="blogs-nav">
        <ul>
          <li>
            <Link>All Topics</Link>
          </li>
          <li>
            <Link>Flexible Workforce</Link>
          </li>
          <li>
            <Link>Freelance Economy</Link>
          </li>
          <li>
            <Link>Future of work</Link>
          </li>
          <li>
            <Link>Strategy Execution</Link>
          </li>
          <li>
            <Link>Human Resources and Organizations</Link>
          </li>
        </ul>
      </nav>
      <div className="allBlogs-grid container">
        {blogs.map((blog, blog_id) => {
          return (
            <div className="allBlogs-SingleBlog" key={blog_id}>
              <BlogCard key={blog_id} blog={blog} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
