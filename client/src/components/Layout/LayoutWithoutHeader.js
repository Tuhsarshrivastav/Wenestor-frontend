import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound";
// eslint-disable-line import/no-named-as-default
import Register from "../register/Register";
import Login from "../login/Login";
import ForgotPassword from "../login/ForgotPassword";
import CreateNewPassword from "../login/CreateNewPassword";
import ProfileCreation from "../ProfileCreation/ProfileCreation";
import Dashboard from "../Dashboard/Dashboard";
function LayoutWithoutHeader() {
  return (
    <>
      <div className="w-100">
        <Switch>
          <Route path="/register/:step" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/login/forgot-password"
            component={ForgotPassword}
          />
          <Route
            exact
            path="/login/create-new-password"
            component={CreateNewPassword}
          />
          <Route
            exact
            path="/profile-creation/:step"
            component={ProfileCreation}
          />
          <Route
            exact
            path="/dashboard"
            component={Dashboard}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </>
  );
}

export default LayoutWithoutHeader;
