import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import AllProjects from "./AllProjectsCard";
import { Link } from "react-router-dom";
import axios from "axios";
import BusinessDetailsDashboard from "./BusinessDetailsDashboard";
// import {baseUrl} from "../../services/url";
import { API_URL } from "../../services/url";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;
function BusinessAllProjects() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const BusinessProjects = async () => {
      // setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(baseUrl + "/api/business/project", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setState(res.data.data);
        console.log(res.data.data);
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
      <div>
        <div className="allProjectHeading">
          <h4 className="text-center mt-4">All Projects</h4>
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/business/dashboard/createprojects">
            <h5 className="text-dark">Add Project</h5>
          </Link>
        </div>
        {/* {state.map((data, index) => (
          <div key={index}>
            <AllProjects data={data} />
          </div>
        ))} */}
        <BusinessDetailsDashboard />
      </div>
    </Layout>
  );
}

export default BusinessAllProjects;
