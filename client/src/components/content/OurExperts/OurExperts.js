import React from "react";
import ExpertCard from "./ExpertCard";
import "./OurExperts.css";
import expertsDiscuss from "../../../Images/experts-discuss.png";

const OurExperts = ({ experts }) => {
  return (
    <>
      <div className="experts-heading">Our Experts</div>
      <div className="our-experts">
        {experts.length > 0 &&
          experts.map(({ consultant_id, tagline, skills }) => (
            <ExpertCard
              key={consultant_id}
              img={expertsDiscuss}
              title={tagline}
              subtitle={skills}
            />
          ))}

        {/* <ExpertCard
          img={expertsDiscuss}
          title="Digital Transformation & Technology"
          subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, enim."
        />
        <ExpertCard
          img={expertsDiscuss}
          title="Digital Transformation & Technology"
          subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, enim."
        />
        <ExpertCard
          img={expertsDiscuss}
          title="Digital Transformation & Technology"
          subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, enim."
        />
        <ExpertCard
          img={expertsDiscuss}
          title="Digital Transformation & Technology"
          subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, enim."
        />
        <ExpertCard
          img={expertsDiscuss}
          title="Digital Transformation & Technology"
          subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, enim."
        /> */}
      </div>
    </>
  );
};

export default OurExperts;
