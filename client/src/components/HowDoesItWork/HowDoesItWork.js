import React from "react";
import "./HowDoesItWork.css";
import createAccount from "../../Images/create-account.png";
import fillDetails from "../../Images/fill-details.png";
import shakingHand from "../../Images/shaking-hands.png";
import team from "../../Images/team.png";
import img1 from "../../Images/hdiw-img1.png";
import img2 from "../../Images/hdiw-img2.png";
import img3 from "../../Images/hdiw-img3.png";
import img4 from "../../Images/hdiw-img4.png";
import PropTypes from "prop-types";

const StepCard = ({ title, desc, bg }) => {
  return (
    <div className="steps__card">
      <div
        className="steps__card-img"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="steps__card-content">
        <div className="steps__card-title">{title}</div>
        <div className="steps__card-desc">{desc}</div>
      </div>
    </div>
  );
};

const HowDoesItWork = () => {
  console.log(typeof team);
  return (
    <div className="hdiw">
      <div className="hdiw__header">
        <div className="hdiw__header-title">How Does it work?</div>
        <div className="hdiw__header-sub-title">
          At Wenstor, you won’t have to figure out how to find the best talent,
          throw project requirements over a wall, deal with multiple middlemen
          managing your team, or pay a flat project fee. Instead connect with
          superb freelancers who will make the best team.
        </div>
      </div>
      <div className="hdiw__steps">
        <StepCard
          bg={createAccount}
          title="Create Account"
          desc="Create an account and become a part of wenstor"
        />
        <StepCard
          bg={fillDetails}
          title="Fill the details"
          desc="Let us know what your needs are"
        />
        <StepCard
          bg={shakingHand}
          title="Find the Perfect Match"
          desc="We'll notify you with a status report concerning your request within a few days. "
        />
        <StepCard
          bg={team}
          title="Become a part of the team"
          desc="Find the perfect team for you"
        />
      </div>
      <div className="hdiw__find-best-talent">
        <div className="hdiw__find-best-talent-images">
          <div
            className="img1"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <div
            className="img2"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
        </div>
        <div className="hdiw__find-best-talent__main">
          <div className="hdiw__find-best-talent__main-header">
            Find the best talent
          </div>
          <div className="hdiw__find-best-talent-desc">
            ta nobis est eligendi optio cumque nihil impedit quo minus id quod
            maxime placeat facere possimus, omnis voluptas assum jhfb jndo amml
            njswkj nwiwe ndenf ierf
          </div>
        </div>
      </div>

      <div className="hdiw__connect-with-experts">
        <div className="hdiw__connect-with-experts__main">
          <div className="hdiw__connect-with-experts__main-header">
            Connect with the experts{" "}
          </div>
          <div className="hdiw__connect-with-experts-desc">
            ta nobis est eligendi optio cumque nihil impedit quo minus id quod
            maxime placeat facere possimus, omnis voluptas assum jhfb jndo amml
            njswkj nwiwe ndenf ierf
          </div>
        </div>
        <div className="hdiw__connect-with-experts-images">
          <div
            className="img1"
            style={{ backgroundImage: `url(${img3})` }}
          ></div>
          <div
            className="img2"
            style={{ backgroundImage: `url(${img4})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
StepCard.PropTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  bg: PropTypes.object.isRequired,
};
