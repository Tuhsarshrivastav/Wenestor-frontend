import React, { Component } from "react";
import Heading from "../common/Heading";

export default class SocialService extends Component {
  render() {
    return (
      <section className="  mt-5 pt-5 bg-offwhite mb-5">
        <div className="container  text-white p-4 px-5">
          <Heading heading="Our Initiative during Covid-19 Pandemic"></Heading>
          <p className="display-4 mt-3">
            We wish to enable you to come out of crisis with advice and
            consultation from best professionals for no cost for 5 hours and
            post that you will need to pay as per terms agreed before the start
            of consultation.
          </p>
        </div>
      </section>
    );
  }
}
