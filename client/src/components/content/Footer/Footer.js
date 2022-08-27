import React from "react";
import { Link } from "react-router-dom";
// import {
//   GrInstagram,
//   GrTwitter,
//   GrFacebookOption,
//   GrLinkedin,
// } from "react-icons/gr";
import logo from "../../../../../build/wenester-logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <section className="contactmargin">
        <form action="">
          <h2 className="row d-flex justify-content-center">Contact us here</h2>

          <div className="container px-5">
            <div className="contacttext">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="send email"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    style={{ background: "#01BD4E", color: "white" }}
                    className="btn btn-outline-secondary rounded-left"
                    type="button"
                  >
                    Request Query
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      {/* <div className="contact-form">
        <div className="heading">Contact us here</div>
        <div className="input">
          <input type="text" placeholder="Enter your email" />
          <Link to="#" className="btn btn-primary">
            Request query
          </Link>
        </div>
      </div> */}
      <div style={{ background: "#01C853" }}>
        <footer className="container px-8 mt-8 text-center text-lg-start footer">
          <div className="footer-bg">
            <div className="footer-logo">
              <a href="/">
                <img
                  src={logo}
                  className="img-responsive center-block footer-img"
                  border="0"
                  alt="Null"
                ></img>
              </a>
            </div>

            <div className="ft">
              <div className="container p-4 textleft">
                <div className="row">
                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h6 className="">
                      Company
                      <p></p>
                      <hr className="mt-2 mb-3" />
                    </h6>

                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" className="text-light textleft">
                          About us
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light textleft">
                          Brand Resources
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          Careers
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          Legal
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          Security
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h6 className="mb-0">
                      Resources
                      <p></p>
                      <hr className="mt-2 mb-3" />
                    </h6>

                    <ul className="list-unstyled">
                      <li>
                        <a href="#!" className="text-light">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          Events
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          Customer services
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          Casestudies
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h6 className="">
                      Market place Servies
                      <p></p>
                      <hr className="mt-2 mb-3" />
                    </h6>

                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" className="text-light">
                          Corporate strategy
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          Supply chain
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          Data analytics and business analytics
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          Finance & Accounting
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          Market Research
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          Technology & Digital
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          View all categories
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h6 className="mb-0">
                      Support
                      <p></p>
                      <hr className="mt-2 mb-3" />
                    </h6>

                    <ul className="list-unstyled">
                      <li>
                        <a href="#!" className="text-light">
                          Support center
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h6 className=" mb-0">
                      Contact us
                      <p></p>
                      <hr className="mt-2 mb-3" />
                    </h6>

                    <ul className="list-unstyled">
                      <li>
                        <a href="#!" className="text-light">
                          Call us
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-light">
                          Mail us
                        </a>
                      </li>

                      <li className="social">
                        <section className="mb-4">
                          <link
                            rel="stylesheet"
                            href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
                            integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S"
                            crossOrigin="anonymous"
                          />

                          <a
                            style={{ background: "white", color: "#01BD4E" }}
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://www.facebook.com/profile.php?id=100078290928510"
                            role="button"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>

                          <a
                            style={{ background: "white", color: "#01BD4E" }}
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://twitter.com/Wenestor3"
                            role="button"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>

                          <a
                            style={{ background: "white", color: "#01BD4E" }}
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://www.instagram.com/wenestorconsultants/"
                            role="button"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </section>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="copyright">
              2022 All rights reserved. @wenester.com
              <p>.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
