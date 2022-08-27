import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../home/HomePage";
// eslint-disable-line import/no-named-as-default
import SkillsPage from "../content/Skills/SkillsPage";
import ExpertProfile from "../content/ExpertProfile/ExpertProfile";
import ProfileCreation from "../ProfileCreation/ProfileCreation";
import Header from "../header/Header";
import HowDoesItWork from "../HowDoesItWork/HowDoesItWork";
import AboutUs from "../content/AboutUs/AboutUs";
import PostProblem from "../business/businessPost/PostProblem";
import BusinessDashboardOld from "../business/businessDashboard/BusinessDashboard";
import Consultant from "../consultant/Consultant";
import Footer from "../content/Footer/Footer";
import Profile from "../consultant/Profile";
import AllBlogs from "../blogs/allblogs";
import Blog from "../blogs/blog";
import CreateBlog from "../blogs/CreateBlog";
import CreateBusinessProject from "../BusinessDashboard/company/CreateBusinessProject";

function LayoutWithHeader() {
  return (
    <>
      <Header />
      <div className="w-100">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blogs" component={AllBlogs} />
          <Route exact path="/blogs/:blogName" component={Blog} />
          <Route exact path="/create-blog" component={CreateBlog} />
          <Route exact path="/business" component={BusinessDashboardOld} />
          <Route path="/business/post/:id" component={PostProblem} />

          <Route path="/business/post" component={PostProblem} />
          <Route path="/consultant/profile" component={Profile} />
          <Route path="/expert/profile/:id" component={ExpertProfile} />
          <Route exact path="/how-does-it-work" component={HowDoesItWork} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route
            exact
            path="/profile-creation/:step"
            component={ProfileCreation}
          />
          <Route exact path="/consultant" component={Consultant} />
          <Route exact path="/skills" component={SkillsPage} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default LayoutWithHeader;
