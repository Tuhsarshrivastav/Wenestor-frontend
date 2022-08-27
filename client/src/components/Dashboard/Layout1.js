import React from "react";
import { NavLink } from "react-router-dom";
import "./Layout.css";
import logo from "../../Images/wenester-logo.svg";
import searchLogo from "../../Images/search-logo.svg";
import bell from "../../Images/bell.svg";
import profileimg from "../../Images/blog2.png";
const Layout = ({ data }) => {
  return (
    <div className="layout">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
