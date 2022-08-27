import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/loginAction";
import "./Header.css";
// import { CONSULTANT } from "../../constants";
import logo from "../../../../build/wenester-logo.png";

// const DUMMY_EXPERTS = [
//   {
//     image: "expert1.png",
//     name: "Andrew S.",
//     experience: "8 years experience",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, temporibus?",
//   },
//   {
//     image: "expert2.png",
//     name: "Lisa D celine",
//     experience: "8 years experience",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, temporibus?",
//   },
//   {
//     image: "expert3.png",
//     name: "Lisa D celine",
//     experience: "8 years experience",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, temporibus?",
//   },
//   {
//     image: "expert4.png",
//     name: "Lisa D celine.",
//     experience: "8 years experience",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, temporibus?",
//   },
// ];

function Header(props) {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          {" "}
          <img src={logo} alt="logo" />
        </Link>

        <div className="nav-items">
          <ul>
            <li>
              <Link to="/blogs">Resources</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/how-does-it-work">How does it work</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <Link to="/register/1" className="btn btn-outline">
            Apply as expert
          </Link>
          <Link to="/register/1" className="btn btn-dark">
            Find expert
          </Link>
        </div>
      </div>
    </>
  );
}
const matchStateToProps = (state) => {
  return { login: state.login, person: state.person };
};
const matchDispatchToProp = {
  logout,
};
export default connect(matchStateToProps, matchDispatchToProp)(Header);
// Header.propTypes = {
//   login: PropTypes.bool.isRequired,
//   logout: PropTypes.func.isRequired,
//   person: PropTypes.string.isRequired,
// };
