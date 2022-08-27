import React, { useState } from "react";
import AllProjects from "./AllProjects";
import ApplyedProject from "./ApplyedProject";
import Layout from "./Layout";
import "./PorojectsDashboard.css";

const ConsultantProjects = () => {
  const [list, setList] = useState("all");
  console.log("here in consultant projects");

  return (
    <Layout>
      <div className="blogs__list">
        <div className="blogs__list-heading">
          <div
            className={`blogs ${list === "all" && "selected"}`}
            onClick={() => setList(list === "all" ? "approved" : "all")}
          >
            All Projects
          </div>

          <div
            className={`blogs ${list == "approved" && "selected"}`}
            onClick={() => setList(list === "all" ? "approved" : "all")}
          >
            Applied Projects
          </div>
        </div>
        {list === "all" ? <AllProjects /> : <ApplyedProject />}
      </div>
    </Layout>
  );
};

export default ConsultantProjects;
