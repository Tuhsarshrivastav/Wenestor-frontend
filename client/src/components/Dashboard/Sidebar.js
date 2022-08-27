import React from "react";
import "./Sidebar.css";
import logo from "../../Images/wenester-logo.svg";
import { NavLink, Link } from "react-router-dom";
import dashicon from "../../Images/dash.png";
import projicon from "../../Images/projicon.png";
import blogicon from "../../Images/blogicon.png";
import supporticon from "../../Images/support.png";
import settingsicon from "../../Images/setting.png";

const Sidebar = ({ children }) => {
  return (
    <div className="sidebar1">
      <Link to="/">
        <div className="logo">
          <img src={logo}></img>
        </div>
      </Link>
      <div className="options">
        <NavLink
          className="d-flex p-2 head sidebar__nav"
          to="/dashboard"
          activeClassName="active"
        >
          <span>
            <img src={dashicon} />
          </span>
          <h4>Dashboard</h4>
        </NavLink>

        <NavLink
          className="d-flex p-2 subhead sidebar__nav"
          to="/blogs"
          activeClassName="active"
        >
          <span>
            <img src={blogicon} />
          </span>
          <h4>Blogs</h4>
        </NavLink>
        <NavLink
          className="d-flex p-2 subhead sidebar__nav"
          to="/dashboard/create"
          activeClassName="active"
        >
          <span>
            <img src={blogicon} />
          </span>
          <h4>Create Blog</h4>
        </NavLink>
        <NavLink
          className="d-flex p-2 subhead sidebar__nav"
          to="/profile-creation/0"
          activeClassName="active"
        >
          <span>
            <img src={blogicon} />
          </span>
          <h4>Profile</h4>
        </NavLink>
        <NavLink
          className="d-flex p-2 subhead sidebar__nav"
          to="/dashboard/chat"
          activeClassName="active"
        >
          <span>
            <img src={blogicon} />
          </span>
          <h4>chat</h4>
        </NavLink>

        <NavLink
          className="d-flex p-2 subhead sidebar__nav"
          to="/consutant/projects"
          activeClassName="active"
        >
          <span>
            <img src={projicon} />
          </span>
          <h4>Projects</h4>
        </NavLink>
        <NavLink
          className="d-flex p-2 subhead sidebar__nav"
          to="/dashboard/#"
          activeClassName="active"
        >
          <span>
            <img src={settingsicon} />
          </span>
          <h4>Settings</h4>
        </NavLink>
        <NavLink
          className="d-flex p-2 subhead sidebar__nav"
          to="/dashboard/#"
          activeClassName="active"
        >
          <span>
            <img src={supporticon} />
          </span>
          <h4>Support</h4>
        </NavLink>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
