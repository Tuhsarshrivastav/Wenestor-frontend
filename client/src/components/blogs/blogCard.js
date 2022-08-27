import React from "react";
import { Link } from "react-router-dom";

import arrow from "../../Images/read-more-arrow.svg";
import "./blogCard.css";

export default function BlogCard({ blog }) {
  console.log(blog);
  return (
    <div>
      <div className="blogCard">
        <div className="blogCard-body">
          <h3 className="blogCard-title">{blog.title}</h3>
          {blog.content.substring(0, 200)}...
          <br></br>
          <Link
            className="blogCard-Read-more"
            to={{ pathname: `/blogs/${blog.blog_id}`, blog: blog }}
          >
            Read more <img className="arrow" src={arrow} />
          </Link>
        </div>
      </div>
    </div>
  );
}
