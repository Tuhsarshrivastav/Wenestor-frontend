import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import BlogLanding from "../../Images/BlogLanding.png";

const Blog = (props) => {
  //   const { title, subtitle, blog_content, image, uploadDate } =
  //     props.location.blog;
  //   const d = new Date(uploadDate);
  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth",
      }),
    []
  );
  const { title, content, writtenby, post_time } = props.location.blog;
  return (
    <section className="single-blog">
      <div className="blogLandingImageWrapper">
        <img src={BlogLanding} alt="BlogLanding" />
      </div>
      <div className="title">{title}</div>
      <h3>{content}</h3>
      By {writtenby}
      <h3>{post_time}</h3>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius magni
      repellat delectus voluptatibus quisquam, explicabo ducimus dicta
      consequatur rerum blanditiis culpa assumenda alias sapiente. Harum,
      ratione. Ducimus architecto voluptate quae!
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, numquam
        animi qui aut necessitatibus ut.
      </h3>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius magni
      repellat delectus voluptatibus quisquam, explicabo ducimus dicta
      consequatur rerum blanditiis culpa assumenda alias sapiente. Harum,
      ratione. Ducimus architecto voluptate quae!
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, numquam
        animi qui aut necessitatibus ut.
      </h3>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius magni
      repellat delectus voluptatibus quisquam, explicabo ducimus dicta
      consequatur rerum blanditiis culpa assumenda alias sapiente. Harum,
      ratione. Ducimus architecto voluptate quae!
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, numquam
        animi qui aut necessitatibus ut.
      </h3>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius magni
      repellat delectus voluptatibus quisquam, explicabo ducimus dicta
      consequatur rerum blanditiis culpa assumenda alias sapiente. Harum,
      ratione. Ducimus architecto voluptate quae!
      <br />
      <Link href="#" className="btn btn-primary">
        Click here for business change
      </Link>
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1>
              <a href="">{title}</a>
            </h1>
            <p className="lead">
              <i className="fa fa-user"></i> by <a href="">{subtitle}</a>
            </p>
            <hr />
            <p>
              <i className="fa fa-calendar"></i> Posted on {d.toDateString()}
            </p>
            <p>
              <i className="fa fa-tags"></i> Tags:{" "}
              <a href="">
                <span className="badge badge-info">Bootstrap</span>
              </a>{" "}
              <a href="">
                <span className="badge badge-info">Web</span>
              </a>{" "}
              <a href="">
                <span className="badge badge-info">CSS</span>
              </a>{" "}
              <a href="">
                <span className="badge badge-info">HTML</span>
              </a>
            </p>
            <hr />
            <img
              width="900"
              height="300"
              src={`http://localhost:3002/api/getfile/${image}`}
              className="img-responsive"
            />
            <hr />
            <p className="lead">{blog_content.substring(0, 200)}</p>
            <br />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Blog;
