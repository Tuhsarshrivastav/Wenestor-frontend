import React from "react";
import Card from "../common/Card";
import { FaClipboardCheck, FaRobot, FaUsers } from "react-icons/fa";
import { GiRelationshipBounds, GiTeacher } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import Heading from "../common/Heading";

export default function Whyus() {
  return (
    <section className="section mt-5">
      <div className="container mt-5">
        <Heading heading="Why us?" />
        <div className="row text-center mt-5">
          <div className="col-md-6 col-lg-4 col-sm-6 mt-3">
            <Card text="Customer Centric">
              <FaUsers className="display-2" />
            </Card>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 mt-3 mt-3">
            <Card text="Best in support">
              <RiCustomerService2Line className="display-2" />
            </Card>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 mt-3">
            <Card text="Experienced Professionals">
              <GiTeacher className="display-1 white-text" />
            </Card>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 mt-3">
            <Card text="Alpha Bot">
              <FaRobot className="display-2" />
            </Card>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 mt-3">
            <Card text="Quality Focus">
              <FaClipboardCheck className="display-2" />
            </Card>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 mt-3">
            <Card text="Longterm Relationships">
              <GiRelationshipBounds className="display-2" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
