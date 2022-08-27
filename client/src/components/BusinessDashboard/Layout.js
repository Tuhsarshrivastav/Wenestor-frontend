import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Layout.css";
import logo from "../../Images/wenester-logo.svg";
import searchLogo from "../../Images/search-logo.svg";
import bell from "../../Images/bell.svg";
import { useHistory } from "react-router-dom";
const Layout = ({ children }) => {
  const history = useHistory();
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("person");
    history.push("/login");
  };
  return (
    <div className="layout">
      <div className="sidebar">
        <Link to="/">
          <div
            className="sidebar__logo"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </Link>
        <div className="sidebar__heading">Dashboard</div>
        <nav className="sidebar__nav">
          <NavLink to="/blogs" activeClassName="active">
            Blogs
          </NavLink>
          <NavLink
            to="/business/dashboard/add-company"
            activeClassName="active"
          >
            Add Company
          </NavLink>
          <NavLink to="/business/dashboard/projects" activeClassName="active">
            Projects
          </NavLink>
          <NavLink to="/business/dashboard/chat" activeClassName="active">
            Chat
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
          </div>
          <button className="btn btn-primary" onClick={onLogout}>
            Logout
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
