import React from "react";
import Layout from "./Layout";
import Activity from "./Activity";
import "./Dashboard.css";
import Recommended from "./Recommended";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <div className="intro box1 ">
          <div className="text ">
            <h1 className="name">Hello Shivani</h1>
            <h4 className="text ready">Ready to get your day started?</h4>
            <div className="image"></div>
          </div>
        </div>

        <div className="recents">
          <div className="manage">
            <h3 className="recent1">Recent Activity</h3>
            <a>
              <h3 className="manage1">Manage Activity</h3>
            </a>
          </div>
          <div className="activities">
            <Activity type="blog" subtype="edited" time="1 hr ago" />
            <Activity type="blog" subtype="edited" time="1 hr ago" />
            <Activity type="blog" subtype="edited" time="1 hr ago" />
            <Activity type="blog" subtype="edited" time="1 hr ago" />
          </div>
        </div>

        <div className="weekly-overview">
          <h2 className="text-overview">weekly overview</h2>
        </div>

        <div className="recommended-projects">
          <Recommended />
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
