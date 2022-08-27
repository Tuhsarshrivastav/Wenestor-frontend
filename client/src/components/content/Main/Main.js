import React from "react";
// import Landing from "../../Images/landing1.svg";
import { Link } from "react-router-dom";
import main from "../../../Images/main.png";
import "./Main.css";
export default function Main() {
  return (
    // <section style={{ marginTop: "3%" }}>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-12 col-lg-6  align-self-center">
    //         <h1
    //           style={{ color: "#01BD4E", fontFamily: "Playfair Display" }}
    //           className="display-4"
    //         >
    //           Excel your business with right expertise.
    //         </h1>
    //         <p className="text-secondary lead mt-3">
    //           Find the talent which fits your needs, market and business.
    //         </p>
    //         <span className=" navbtn padding-0 ">
    //           <Link
    //             style={{
    //               background: "white",
    //               color: "#01BD4E",
    //               fontFamily: "Playfair Display",
    //             }}
    //             className="btn btn-outline-secondary rounded-left"
    //             type="button"
    //           >
    //             Apply as Expert
    //           </Link>
    //         </span>
    //         <span className="navbar-text navbtn padding-0">
    //           <Link
    //             style={{
    //               background: "#01BD4E",
    //               color: "white",
    //               fontFamily: "Playfair Display",
    //             }}
    //             className="btn btn-outline-secondary rounded-left"
    //             type="button"
    //           >
    //             Find Expert
    //           </Link>
    //         </span>
    //       </div>

    //       <div className="col-md-12 col-lg-6">
    //         <div className="mainimgbox container">
    //           <div className="col">
    //             <div
    //               style={{ color: "black", fontFamily: "Playfair Display" }}
    //               className="row"
    //             >
    //               <h6>Pankaj Ahuja </h6>
    //             </div>
    //             <div
    //               style={{ color: "#01BD4E", fontFamily: "Playfair Display" }}
    //               className="row"
    //             >
    //               <h6>Sr. Data Analyst</h6>
    //             </div>
    //             <div
    //               style={{ color: "black", fontFamily: "Playfair Display" }}
    //               className="row"
    //             >
    //               <h6>10 yr experience</h6>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="jumbotron">
    //           <img alt="landing img" src={main} className="img-responsive" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="landing">
      <div className="content">
        <div className="title">Excel your business with right expertise.</div>
        <div className="para">
          Find the talent which fits your needs, market and business.
        </div>
        <div className="buttons">
          <Link className="btn btn-outline">Apply as expert</Link>
          <Link className="btn btn-dark">Find expert</Link>
        </div>
      </div>
      <div className="main-img">
        <img src={main} alt="landing image" />
        <div className="profile">
          <div className="name">Pankaj ahuja</div>
          <div className="field">Sr. Data Analyst</div>
          <div className="exp">10 yr experience</div>
        </div>
      </div>
    </section>
  );
}
