import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const SkillsNav = ({ skills, experts }) => {
  return (
    <div className="skills-nav">
      {skills.length > 0 &&
        skills.map(({ name, skills_id }) => (
          <div key={skills_id}>
            <NavLink
              to={{ pathname: "/skills", heading: name, data: experts }}
              activeClassName="active"
            >
              {name}
            </NavLink>
          </div>
        ))}
      {/* <div>
        <NavLink to="sales-marketing" activeClassName="active">
          Sales & Marketing
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{
            pathname: "/skills",
            heading: "Corporate Strategy",
          }}
          activeClassName="active"
        >
          Corporate strategy
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{
            pathname: "/skills",
            heading: "Digital Transformation & Technology",
          }}
          activeClassName="active"
        >
          Digital Transformation & Technology
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{
            pathname: "/skills",
            heading: "Operations & Supply Chain Management",
          }}
          activeClassName="active"
        >
          Operations & supply chain management
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{
            pathname: "/skills",
            heading: "Data & Business Analytics",
          }}
          activeClassName="active"
        >
          Data & Business analytics
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{
            pathname: "/skills",
            heading: "Finance & Accounting",
          }}
          activeClassName="active"
        >
          Finance & Accounting
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{
            pathname: "/skills",
            heading: "Human Resources & Organization",
          }}
          activeClassName="active"
        >
          Human resources & Organization
        </NavLink>
      </div> */}
    </div>
  );
};

export default SkillsNav;
