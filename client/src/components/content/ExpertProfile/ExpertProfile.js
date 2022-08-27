import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ExpertProfile.css";
import expert1 from "../../../Images/expert1.png";
import { getConsultantProfileData } from "../../../api/consulantProfile";
const ExpertProfile = ({ match }) => {
  const [data, setData] = useState({});
  useEffect(async () => {
    try {
      const res = await getConsultantProfileData(match.params.id);
      console.log(res);
      setData(res);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="expert-profile">
      <div className="heading">Operations & supply chain management Expert</div>
      <div className="intro">
        <div className="image-part">
          <img src={expert1} alt="Expert Image" />
        </div>
        <div className="description-part">
          <div className="name">{data.introduction}</div>
          <div className="subtitle">
            Operations & supply chain expert in Delhi, India{"    "}
            <span className="exp">8 years of experience</span>
          </div>
          <div className="kahani">
            About Andrew libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat facere
            possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores repella.
          </div>
          <div className="skills">
            <div className="box">Skill 1</div>
            <div className="box">Skill 2</div>
            <div className="box">Skill 3</div>
            <div className="box">Skill 4</div>
            <div className="box">Skill 5</div>
            <div className="box">Skill 6</div>
            <div className="box">Skill 7</div>
            <div className="box">Skill 8</div>
          </div>
        </div>
      </div>
      <div className="call_to_action">
        <Link className="btn btn-primary">Hire now</Link>
      </div>
      <div className="experience">
        <div className="work_experience">Work Experience</div>
        <div className="work_experiences">
          <div className="role">
            <div className="Role-heading">Role of the individual</div>
            <div className="role-sub-title">Company name . 2021 - present</div>
            <div className="list">
              <ul>
                <li>
                  <div className="dot"></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, provident.
                </li>
                <li>
                  <div className="dot"></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, provident.
                </li>
                <li>
                  <div className="dot"></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, provident.
                </li>
                <li>
                  <div className="dot"></div>
                  Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, illum! ipsum dolor sit amet consectetur adipisicing
                  elit. Voluptas, provident.
                </li>
                <li>
                  <div className="dot"></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, provident.
                </li>
              </ul>
            </div>
          </div>
          <div className="role">
            <div className="Role-heading">Role of the individual</div>
            <div className="sub-title">Company name . 2021 - present</div>
            <div className="list">
              <ul>
                <li>
                  <div className="dot"></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, provident.
                </li>
                <li>
                  <div className="dot"></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, provident.
                </li>
                <li>
                  <div className="dot"></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, provident.
                </li>
                <li>
                  <div className="dot"></div>
                  Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, illum! ipsum dolor sit amet consectetur adipisicing
                  elit. Voluptas, provident.
                </li>
                <li>
                  <div className="dot"></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, provident.
                </li>
              </ul>
            </div>
          </div>
          <div className="role">
            <div className="Role-heading">
              <div className="dot"></div>
              Role of the individual
            </div>
            <div className="sub-title">Company name . 2021 - present</div>
            <div className="list">
              <ul>
                <li>
                  <div className="dot"></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, provident.
                </li>
                <li>
                  <div className="dot"></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, provident.
                </li>
                <li>
                  <div className="dot"></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, provident.
                </li>
                <li>
                  <div className="dot"></div>
                  Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, illum! ipsum dolor sit amet consectetur adipisicing
                  elit. Voluptas, provident.
                </li>
                <li>
                  <div className="dot"></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, provident.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="education work_experience">Education</div>
        <div className="role">
          <div className="Role-heading">Role of the Name of the degree</div>
          <div className="sub-title">university name . 2004 - 2005</div>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;
