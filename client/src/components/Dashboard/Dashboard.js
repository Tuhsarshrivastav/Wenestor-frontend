import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./Dashboard.css";
import Layout from "./Layout";
import Activity from "./Activity";
import Recommended from "./Recommended.js";
import demo from "../../Images/blog2.png";
import dashimg from "../../Images/dashimg.png";
const Dashboard = () => {
  const [data, setData] = useState([
    "HI,you have an invite from abc",
    "HI,you have an invite from xyz",
  ]);
  {
    /*Invite data from Api to send to Layout*/
  }
  console.log("dashboard rendered");

  return (
    <Layout data={data}>
      {/* <Sidebar /> */}
      <div className="main">
        <div className="top row">
          <div className="card card1 bg-primary col">
            <div className="introtext">
              <h2>Hello Shivani</h2>
              <h4>Ready to get your day started?</h4>
            </div>
            <div>
              <img src={dashimg}></img>
            </div>
          </div>
          <div className="card card3">
            <div className="weekly-head">
              Weekly Overview
              <div className="weekly-text">1Apr - 7Apr</div>
            </div>
            <div className="card mx-auto chart">Chart</div>
          </div>
        </div>

        <div className="top2 row">
          <div className="card card2 col">
            <div className="row">
              <h5 className="recent col">Recent Activity</h5>
              <h5 className="manage ">Manage Activity</h5>
            </div>
            <div className="activities">
              <Activity type="Blog" subtype="edited" time="11 hrs ago" />
              <Activity type="Blog" subtype="edited" time="11 hrs ago" />
              <Activity type="Blog" subtype="edited" time="11 hrs ago" />
              <Activity type="Blog" subtype="edited" time="11 hrs ago" />
            </div>
          </div>
          <div className="recommend">
            <Recommended
              imageUrl={demo}
              by="by Ajay Malhotra"
              title="Need a designer to form branding essentials for my business"
              desc="looking for a graphic designer to create all the branding assets for my startup"
              value="3500$"
              type="Full Time"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
