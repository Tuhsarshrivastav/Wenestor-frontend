import React from "react";
import { Route, Switch } from "react-router-dom";
// eslint-disable-line import/no-named-as-default
import LayoutWithHeader from "./Layout/LayoutWithHeader";
import LayoutWithoutHeader from "./Layout/LayoutWithoutHeader";

import { LinkedInPopUp } from "react-linkedin-login-oauth2";
import Dashboard from "./Dashboard/Dashboard";
// import CreateBlog from "./blogs/CreateBlog";
import ConsultantBlogCreate from "./Dashboard/ConsultantBlogCreate";
import ConsultantProjects from "./Dashboard/ConsultantProjects";
import UploadFile from "./Dashboard/UploadFile";
import BusinessDashboard from "../components/BusinessDashboard/Business-Dashboard";
import AddCompany from "./BusinessDashboard/company/AddCompany";
import BusinessAllProjects from "./BusinessDashboard/BusinessAllProjects";
import InviteExperts from "./BusinessDashboard/company/InviteExperts/InviteExperts";
import CreateBusinessProject from "./BusinessDashboard/company/CreateBusinessProject";
import BusinessDashboardOld from "./business/businessDashboard/BusinessDashboard";
import ConsultantOld from "./consultant/Consultant";
// import LinkedInPage from "./register/LinkedInPage";
import tasting from "./business/businessDashboard/BusinessDashboard";
import BusinessChat from "../components/BusinessDashboard/chat/Chat";
import BusinessChatscreen from "../components/BusinessDashboard/chat/ChatScreen";

import ConsulatntBusinessChat from "../components/Dashboard/consultantchat/Chat";
import ConsultantBusinessChatscreen from "../components/Dashboard/consultantchat/ChatScreen";
function App() {
  return (
    <>
      <div className="w-100">
        <Switch>
          <Route exact path="/" component={LayoutWithHeader} />
          <Route path="/register/:step" component={LayoutWithoutHeader} />
          <Route path="/login" component={LayoutWithoutHeader} />
          {/* <Route
            path="/login/forgot-password/:step"
            component={ForgotPassword}
          /> */}
          <Route exact path="/blogs" component={LayoutWithHeader} />
          <Route exact path="/blogs/:blogName" component={LayoutWithHeader} />
          <Route exact path="/create-blog" component={LayoutWithHeader} />
          <Route exact path="/business" component={LayoutWithHeader} />
          <Route path="/business/post/:id" component={LayoutWithHeader} />
          <Route path="/business/post" component={LayoutWithHeader} />
          <Route path="/consultant/profile" component={LayoutWithHeader} />
          <Route path="/expert/profile/:id" component={LayoutWithHeader} />
          <Route exact path="/how-does-it-work" component={LayoutWithHeader} />
          <Route exact path="/about-us" component={LayoutWithHeader} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/business/dashboard" component={tasting} />
          <Route
            exact
            path="/business/dashboard/add-company"
            component={AddCompany}
          />
          <Route
            exact
            path="/business/dashboard/projects"
            component={BusinessAllProjects}
          />
          <Route
            exact
            path="/business/dashboard/createprojects"
            component={CreateBusinessProject}
          />
          <Route
            exact
            path="/business/dashboard/createprojects/:id"
            component={CreateBusinessProject}
          />
          <Route
            exact
            path="/business/dashboard/invite-experts/:id"
            component={InviteExperts}
          />
          <Route
            exact
            path="/consultant/projects"
            component={ConsultantProjects}
          />
          <Route
            exact
            path="/business/dashboard/chat"
            component={BusinessChat}
          />
          <Route
            exact
            path="/business/dashboard/chatscreen/:id"
            component={BusinessChatscreen}
          />
          <Route
            exact
            path="/dashboard/chat"
            component={ConsulatntBusinessChat}
          />
          <Route
            exact
            path="/dashboard/chatscreen/:id"
            component={ConsultantBusinessChatscreen}
          />

          <Route
            exact
            path="/dashboard/create"
            component={ConsultantBlogCreate}
          />
          <Route exact path="/dashboard/file" component={UploadFile} />
          <Route
            exact
            path="/profile-creation/:step"
            component={LayoutWithoutHeader}
          />
          <Route exact path="/consultant" component={LayoutWithHeader} />
          <Route exact path="/skills" component={LayoutWithHeader} />
          <Route exact path="/linkedin" component={LinkedInPopUp} />
          <Route exact path="/oldBus" comoponent={BusinessDashboardOld} />
          <Route exact path="/oldCon" comoponent={ConsultantOld} />
          {/* <Route path="/try" component={LinkedInPage} /> */}
          <Route component={LayoutWithoutHeader} />
        </Switch>
      </div>
    </>
  );
}

export default App;
