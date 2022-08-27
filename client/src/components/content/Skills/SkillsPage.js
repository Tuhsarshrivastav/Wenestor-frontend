import React, { useState } from "react";
import "./skill.css";
import { Link, Navigate } from "react-router-dom";
import ExpertCard from "./ExpertCard/ExpertCard";
import PropTypes from "prop-types";

const SkillsPage = ({ location: { heading, data } }) => {
  const [showAll, setShowAll] = useState(false);
  const toggle = () => {
    setShowAll((p) => !p);
  };
  console.log(data);
  return (
    <div className="experts-page">
      <div className="heading-main">{heading}</div>
      <div className="paragraph">
        Rebis est eligendi optio cumque nihil impedit quo minus id quod maxime
        placeat facer um soluta nobis est eligendi optio cumque nihil impedit
        quo minus id quod maxime placeat facere possimus, omnis voluptas
        assumenda est, omnis dolor repell
      </div>
      <div className="categories">
        <div className="category">Operations & Process Improvement</div>
        <div className="category">Supply Chain Strategy & Transformation</div>
        <div className="category">Sub Category 3</div>
      </div>
      <div className="experts-heading">
        <div className="verified">Verified experts</div>
        {showAll ? (
          <div className="view" onClick={toggle}>
            See less
          </div>
        ) : (
          <div className="view" onClick={toggle}>
            See all
          </div>
        )}
      </div>
      {data.map((expert, index) => (
        <div key={index} className="four-experts">
          <ExpertCard
            key={expert.profile_id}
            profile_id={expert.profile_id}
            name={expert.tagline}
            experience={8}
            image={0}
          />
          <ExpertCard
            onClick={() => {
              console.log("here");
              <Navigate to={`/expert-profile/${expert.profile_id}`} />;
            }}
            name="Lica De Seline."
            experience={8}
            image={1}
            skill={"mern-stack"}
          ></ExpertCard>
          <ExpertCard
            name="Lisa D celine"
            experience={8}
            image={2}
          ></ExpertCard>
          <ExpertCard
            name="Lisa De celine."
            experience={8}
            image={3}
          ></ExpertCard>
        </div>
      ))}
      {showAll && (
        <div>
          <div className="four-experts">
            <ExpertCard name="Andrew S." experience={8} image={0}></ExpertCard>
            <ExpertCard
              name="Lica De Seline."
              experience={8}
              image={1}
            ></ExpertCard>
            <ExpertCard
              name="Lisa D celine"
              experience={8}
              image={2}
            ></ExpertCard>
            <ExpertCard
              name="Lisa De celine."
              experience={8}
              image={3}
            ></ExpertCard>
          </div>
          <div className="four-experts">
            <ExpertCard name="Andrew S." experience={8} image={0}></ExpertCard>
            <ExpertCard
              name="Lica De Seline."
              experience={8}
              image={1}
            ></ExpertCard>
            <ExpertCard
              name="Lisa D celine"
              experience={8}
              image={2}
            ></ExpertCard>
            <ExpertCard
              name="Lisa De celine."
              experience={8}
              image={3}
            ></ExpertCard>
          </div>
          <div className="four-experts">
            <ExpertCard name="Andrew S." experience={8} image={0}></ExpertCard>
            <ExpertCard
              name="Lica De Seline."
              experience={8}
              image={1}
            ></ExpertCard>
            <ExpertCard
              name="Lisa D celine"
              experience={8}
              image={2}
            ></ExpertCard>
            <ExpertCard
              name="Lisa De celine."
              experience={8}
              image={3}
            ></ExpertCard>
          </div>
        </div>
      )}

      <div className="find-your-expert">
        <div className="heading-find">Find your expert</div>
        <div className="steps">
          <div className="one">
            <div className="icon">1</div>
            <div className="title">Post your Project</div>
            <div className="description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis issimos ducimus qui blanditiis
            </div>
          </div>
          <div className="two">
            <div className="icon">2</div>
            <div className="title">Compare your experts</div>
            <div className="description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis issimos ducimus qui blanditiis
            </div>
          </div>
          <div className="three">
            <div className="icon">3</div>
            <div className="title">Collaborate</div>
            <div className="description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis issimos ducimus qui blanditiis
            </div>
          </div>
        </div>
        <Link className="btn btn-primary">Create Project</Link>
      </div>
    </div>
  );
};
SkillsPage.propTypes = {
  location: PropTypes.object.isRequired,
};
export default SkillsPage;
