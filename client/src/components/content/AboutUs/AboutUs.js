import React from "react";
import "./AboutUs.css";
import landing from "../../../Images/aboutUs-landing.png";
import projectImg from "../../../Images/blog3.png";
import member1 from "../../../Images/hdiw-img2.png";
import member2 from "../../../Images/member2.png";
import member3 from "../../../Images/member3.png";
import linkedIn from "../../../Images/linkedIn.svg";
import facebook from "../../../Images/facebook.svg";
import twitter from "../../../Images/twitter.svg";
import graph from "../../../Images/aboutUs-dashboard.png";
import ellipse from "../../../Images/aus-success-ellipse.png";
import review1 from "../../../Images/review-1.svg";
import review2 from "../../../Images/review-2.svg";
import review3 from "../../../Images/review-3.svg";
import arrow from "../../../Images/read-more-arrow.svg";
import PropTypes from "prop-types";

const TeamMember = ({ img, name, role, desc }) => {
  return (
    <div className="member-card">
      <div
        className="member-img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="member-card__content">
        <div className="member-card__content-name">
          Hi, {"I'm"} {name}
        </div>
        <div className="member-card__content-role">{role}</div>
        <div className="member-card__content-desc">{desc}</div>
      </div>
      <div className="member-card__social">
        <div className="linkedIn">
          <img src={linkedIn}></img>
        </div>
        <div className="twitter">
          <img src={twitter}></img>
        </div>
        <div className="facebook">
          <img src={facebook}></img>
        </div>
      </div>
    </div>
  );
};
const Review = ({ img, title }) => {
  return (
    <div className="review">
      <img src={img} className="review-__img" />
      <div className="review__title">{title}</div>
    </div>
  );
};
const AboutUs = () => {
  return (
    <div className="aus">
      <div className="aus__landing">
        <div
          className="aus__landing-img"
          style={{ backgroundImage: `url(${landing})` }}
        ></div>
        <div className="aus__landing-card">
          <div className="aus__landing-card-title">About Us</div>
          <div className="aus__landing-card-desc">
            A Micro consulting platform for business and startups to onboard
            best talent to get growth through either solving a burning problem
            or getting a new initiative to stategize better. A big chunk of
            indian organisations that come under various categories that provide
            employment to around 60%, lack the talent they deserve which we wish
            to make accessible by this platform.
          </div>
        </div>
      </div>
      <div className="aus__mission">
        <div className="aus__mission-heading">The mission</div>
        <div className="aus__mission-para">
          On a mission to bridge the gap between industry and academics and its
          funded through tech development as service we do for the companies{" "}
        </div>
      </div>
      <div className="aus__navigation">
        <div className="aus__nav-header">
          <div>Our Team</div>
          <div>Stats figures</div>
          <div>Trending Projects</div>
        </div>
        <div className="aus__navigation__main">
          <div className="title">Our Team</div>
          <div className="aus__navigation__main__team-members">
            <TeamMember
              img={member1}
              name="Smith"
              role="Lead developer"
              desc="Smith is a technical professional with a passion for learning and 15+ years of experience leading teams to build enterprise-grade distributed applications that solve real-world problems. He is a firm believer that collaboration across all facets of a business, from development to marketing to sales, is required to succeed in this endeavor."
            />
            <TeamMember
              img={member2}
              name="Arya"
              role="Senior Designer"
              desc="Arya is an award-winning designer who uses storytelling, art, and technology to instigate positive social change and build stronger businesses. He's worked with a range of Fortune500 companies, major nonprofits, government agencies, and startups. Over the last ten years, Arya's work has helped these companies change their public image and impact more lives.She'd love to collaborate with you."
            />
            <TeamMember
              img={member3}
              name="John"
              role="Marketing Researcher"
              desc="John has more than fifteen years of experience in research, finance, consulting, and business management. During this time, he has worked on more than 20 projects as a consultant at Bain Company and launched Uber operations in Turin, Italy. Jhon is passionate about innovation and entrepreneurship."
            />
          </div>
          <div className="aus__navigation-pagination">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
        </div>
      </div>
      <div className="aus__success-overview">
        <div className="aus__success-overview-heading">Success overview</div>
        <div className="aus__success-overview-content">
          <img className="aus__success-overview-graph" src={graph}></img>
          <div className="aus__success-overview-engagement">
            <img src={ellipse} className="percentage-cont" />
            <div className="percentage">65%</div>
            <div className="title">Engagement</div>
          </div>
        </div>
      </div>
      <div className="aus__client-reviews">
        <div className="heading">Clients review</div>
        <div className="aus__client-reviews-content">
          <Review img={review1} title="lorem ipsum" />
          <Review img={review2} title="lorem ipsum" />
          <Review img={review3} title="lorem ipsum" />
        </div>
      </div>
      <div className="aus__trending-projects">
        <div className="aus__trending-projects-heading">Trending projects</div>
        <div className="cards">
          <div className="aus__trending-project-card">
            <div
              className="img"
              style={{ backgroundImage: `url(${projectImg})` }}
            ></div>
            <div className="heading">
              ssitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae
            </div>
            <div className="desc">
              ssitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae
            </div>
            <div className="learn-more">
              Learn More <img className="arrow" src={arrow} />
            </div>
          </div>
          <div className="aus__trending-project-card">
            <div
              className="img"
              style={{ backgroundImage: `url(${projectImg})` }}
            ></div>
            <div className="heading">
              ssitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae
            </div>
            <div className="desc">
              ssitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae
            </div>
            <div className="learn-more">
              Learn More <img className="arrow" src={arrow} />
            </div>
          </div>
          <div className="aus__trending-project-card">
            <div
              className="img"
              style={{ backgroundImage: `url(${projectImg})` }}
            ></div>
            <div className="heading">
              ssitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae
            </div>
            <div className="desc">
              ssitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae
            </div>
            <div className="learn-more">
              Learn More <img className="arrow" src={arrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

TeamMember.PropTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
};
