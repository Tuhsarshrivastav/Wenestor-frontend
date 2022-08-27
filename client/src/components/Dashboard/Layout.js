import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Layout.css";

import logo from "../../Images/wenester-logo.svg";
import dashicon from "../../Images/dash.png";
import projicon from "../../Images/projicon.png";
import blogicon from "../../Images/blogicon.png";
import settingsicon from "../../Images/setting.png";
import profileimg from "../../Images/blog2.png";
import searchLogo from "../../Images/search-logo.svg";
import bell from "../../Images/bell.svg";
const Layout = ({ children, data = {} }) => {
  console.log(data, "inside layout component");
  const history = useHistory();
  const Logout = () => {
    localStorage.removeItem("admin");
    history.push("/");
  };
  return (
    <>
      <div className="layout">
        <div className="sidebar">
          <div
            className="sidebar__logo"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
          <div className="sidebar__heading">
            <span>
              <img src={dashicon} />
            </span>
            Dashboard
          </div>
          <nav className="sidebar__nav">
            <NavLink to="/blogs" activeClassName="active">
              <span>
                <img src={blogicon} />
              </span>
              Blogs
            </NavLink>
            <NavLink to="/dashboard/create" activeClassName="active">
              <span>
                <img src={blogicon} />
              </span>
              Create Blog
            </NavLink>
            <NavLink to="/profile-creation/0" activeClassName="active">
              <span>
                <img src={blogicon} />
              </span>
              Profile
            </NavLink>
            <NavLink to="/dashboard/chat" activeClassName="active">
              <span>
                <img src={blogicon} />
              </span>
              Chat
            </NavLink>
            <NavLink to="/consultant/projects" activeClassName="active">
              <span>
                <img src={projicon} />
              </span>
              Projects
            </NavLink>
            <NavLink to="/dashboard/#" activeClassName="active">
              <span>
                <img src={settingsicon} />
              </span>
              Settings
            </NavLink>
          </nav>
        </div>
        <div className="layout__main">
          <div className="header">
            <div className="search__box">
              <img src={searchLogo} alt="search" className="search__logo" />
              <input className="search__box-input" placeholder="Search"></input>
            </div>
            <div className="admin">
              <img
                src={bell}
                alt="bell"
                className="bell"
                data-toggle="modal"
                data-target="#exampleModal"
              />

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Notifications
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      {/* {data.map((user) => (
                        <div key="1" className="user">
                          {user}
                        </div>
                      ))} */}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={profileimg}
                className="rounded-circle profimg"
                alt="profile img"
              ></img>
              <div className="text">Hello@Consultant</div>
              <button className="btn btn-primary" onClick={Logout}>
                Logout
              </button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
  /*
  return (
    <div className="layout">
      <div className="sidebar">
        <div
          className="sidebar__logo"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <div className="sidebar__heading">Dashboard</div>
        <nav className="sidebar__nav">
          <NavLink to="/dashboard/consultants" activeClassName="active">
            Consultants
          </NavLink>
          <NavLink to="/dashboard/businesses" activeClassName="active">
            Businesses
          </NavLink>
          <NavLink to="/dashboard/blogs" activeClassName="active">
            Blogs
          </NavLink>
          <NavLink to="/consutant/create" activeClassName="active">
            Create Blog
          </NavLink>
          <NavLink to="/dashboard/skills" activeClassName="active">
            Skills
          </NavLink>
          <NavLink to="/dashboard/trending-projects" activeClassName="active">
            Trending Projects
          </NavLink>
        </nav>
      </div>
      <div className="layout__main">
        <div className="header">
          <div className="search__box">
            <img src={searchLogo} alt="search" className="search__logo" />
            <input className="search__box-input" placeholder="Search"></input>
          </div>
          <div className="admin">
            <img src={bell} alt="bell" className="bell" />
            <div className="text">Admin</div>
            <button className="logout" onClick={Logout}>
              Logout
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  ); */
};

export default Layout;
