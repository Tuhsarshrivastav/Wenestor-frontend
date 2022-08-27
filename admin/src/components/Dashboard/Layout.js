import React from "react";
import { NavLink } from "react-router-dom";
import "./layout.css";
import logo from "../../Images/wenester-logo.svg";
import searchLogo from "../../Images/search-logo.svg";
import bell from "../../Images/bell.svg";
import { useNavigate } from "react-router-dom";
const Layout = ({ children }) => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };
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
  );
};

export default Layout;
