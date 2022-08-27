import React from "react";

// import Whyus from "../content/Whyus";
// import PricingModel from "../content/PricingModel";
import Main from "../content/Main/Main";
// import WorkOn from "../content/WorkOn";
import About from "../content/About/About";
import TrendingProjects from "../content/TrendingProjects/TrendingProjects";
import OurExperts from "../content/OurExperts/OurExperts";
import HowWeWork from "../content/HowWeWork";
import SkillsNav from "../header/SkillsNav.js";
import { getHomePageData } from "../../api/home";
// import { Base_Url } from "../../services/url";
import { useEffect } from "react";
import { useState } from "react";
export default function Home() {
  const [skills, setSkills] = useState([]);
  const [trendingProjects, setTrendingProjects] = useState([]);
  const [experts, setExperts] = useState([]);

  useEffect(async () => {
    try {
      const res = getHomePageData();
      setSkills(res.data.data);
      setTrendingProjects(res.trendingprojects);
      setExperts(res.consultant);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div className="">
      <SkillsNav experts={experts} skills={skills} />
      <Main />
      {/* <PricingModel /> */}
      <About />
      <TrendingProjects trendingProjects={trendingProjects} />
      <OurExperts experts={experts} />
      {/* <Whyus /> */}
      <HowWeWork />
      {/* <SocialInitiative /> */}
      {/* <WorkOn />  */}
    </div>
  );
}
