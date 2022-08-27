import React from "react";
import Heading from "../common/Heading";
import Consultants from "../../Images/consultants.svg";
import Organizations from "../../Images/organizations.svg";
import { RiAccountCircleLine, RiFeedbackLine } from "react-icons/ri";
import { MdLaptop, MdPayment } from "react-icons/md";
import { GiDiscussion } from "react-icons/gi";
import { AiOutlineSolution, AiOutlineProject } from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";

export default function HowWeWork() {
  return (
    <div className="">
      <section className="section px-5 mt-5">
        <div className="container px-5 mt-5 howwework">
          <div className="jumbotron">
            <div className="container px-5 mt-5">
              <Heading heading="How does it work?"></Heading>
            </div>
            <div className="container ">
              <div className="container ">
                <div className="row ">
                  <div className="col-lg-6 col-sm-12">
                    <img
                      src={Consultants}
                      alt="Consultants Image"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-6 pt-5">
                    <h3 className="">
                      Find the <span style={{ color: "#01C853" }}>expert</span>{" "}
                      in 3 simple steps!
                    </h3>
                    <p className="pt-5 display-5">
                      <ol className="nobl ">
                        <l1></l1>

                        <li>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis issimos ducimus qui blanditiis
                        </li>
                        <p></p>
                        <li>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis issimos ducimus qui blanditiis
                        </li>
                        <p></p>
                        <li>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis issimos ducimus qui blanditiis
                        </li>
                        <p></p>
                      </ol>
                    </p>

                    <div className="createProjectbutton">
                      <button
                        style={{ background: "#01BD4E", color: "white" }}
                        className="btn btn-outline-secondary btn-lg btn-block"
                      >
                        Create Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div></div>
    </div>
  );
}
