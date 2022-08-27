import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import ExpertCard from "./ExpertCard/ExpertCard";
import "./InviteExperts.css";
import filter from "../../../../Images/Filter.svg";
import axios from "axios";
import { API_URL } from "../../../../services/url";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;

const InviteExperts = ({ match }) => {
  console.log("inside invite experts component", match);
  const projectId = match.params.id; // use this to send invite

  const [experts, setExperts] = useState([]);
  const [hide, setHide] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    console.log("category changed");
    // filter array
  }, [selectedCategory]);
  const [state, setState] = useState([]);

  useEffect(() => {
    const BusinessProjects = async () => {
      console.log("fetching):");
      // setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(baseUrl + "/api/business/uninvited", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setState(res.data.data);
        console.log(res.data.data);
        setExperts(res.data.data);
      } catch (error) {
        console.log(error.messagge);
      } finally {
        // setLoading(false);
      }
    };
    BusinessProjects();
  }, [state.length]);
  return (
    <Layout>
      <div className="company-heading text-center mt-2">
        <h3>All Experts</h3>
        <div className="filter-experts" onClick={() => setHide(!hide)}>
          Filter Experts <img src={filter} alt="filter" />
          {!hide && (
            <div className="dropdown-filter">
              <div
                className="option"
                value="Sales & Marketing"
                onClick={() => setSelectedCategory("Sales & Marketing")}
              >
                Sales & Marketing
              </div>
              <div
                className="option"
                value="Finance & Accounting"
                onClick={() => setSelectedCategory("Finance & Accounting")}
              >
                Finance & Accounting
              </div>
              <div
                className="option"
                value="Human resources"
                onClick={() => setSelectedCategory("Human resources")}
              >
                Human resources
              </div>
              <div
                className="option"
                value="Operations"
                onClick={() => setSelectedCategory("Operations")}
              >
                Operations
              </div>
              <div
                className="option"
                value="data"
                onClick={() => setSelectedCategory("Data")}
              >
                Data
              </div>
            </div>
          )}
        </div>
        {experts.length > 0 && (
          <div className="experts">
            {experts.map((expert) => (
              <ExpertCard
                key={expert.consultant_id}
                project_id={projectId}
                consultant_id={expert.profile_id}
                name={expert.tagline}
                role={expert.role}
                introduction={expert.introduction}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default InviteExperts;
