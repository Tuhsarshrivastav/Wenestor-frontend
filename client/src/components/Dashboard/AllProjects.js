import React, { useState, useEffect } from "react";
import axios from "axios";
import ApplyedModel from "./models/Applyed";
import AllProjectsCard from "./AllProjectsCard";
import { API_URL } from "../../services/url";
const baseUrl = API_URL;

const AllProjects = () => {
  const [applyedSuccess, setApplyedSuccess] = useState(false);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const AllProjects = async () => {
      setLoading(true);
      try {
        // token is not working here
        // console.log("first");

        const token = localStorage.getItem("consultant_token");
        const res = await axios.get(baseUrl + "/api/consultant/project", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log("hi ", res.data.data);
        setState(res.data.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    AllProjects();
  }, [state.length]);
  const closeApplyed = () => {
    setApplyedSuccess(false);
  };
  return (
    <>
      {applyedSuccess && <ApplyedModel onClose={closeApplyed} />}

      {state.map((items) => {
        return (
          <>
            <AllProjectsCard
              className="blog-card"
              project={items}
              setApplyedSuccess={setApplyedSuccess}
            />{" "}
          </>
        );
        // console.log("first",items.title);
      })}
      {/* {state.map((index)=>{
        
      <AllProjectsCard
        className="blog-card"
        title={index.title}
        domain={index.domain}
        description={index.description}
        setApplyedSuccess={setApplyedSuccess}
      />
    })} */}
      {/* <AllProjectsCard
        className="blog-card"
        title="title"
        domain="domain"
        description="description"
        setApplyedSuccess={setApplyedSuccess}
      /> */}
    </>
  );
};

export default AllProjects;
