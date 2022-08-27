import React, { Component } from "react";

import { LinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

class LinkedInPage extends Component {
  state = {
    code: "",
    errorMessage: "",
  };

  storeValue() {
    localStorage.setItem("linkedin", JSON.stringify(this.state.code));
  }
  handleSuccess = (data) => {
    this.setState({
      code: data.code,
      errorMessage: "",
    });
  };

  handleFailure = (error) => {
    this.setState({
      code: "",
      errorMessage: error.errorMessage,
    });
  };

  render() {
    const { code, errorMessage } = this.state;
    return (
      <div>
        <LinkedIn
          clientId="77931mz46ins5h"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="http://localhost:3001/linkedin"
        >
          <img
            src={linkedin}
            alt="Log in with Linked In"
            style={{ maxWidth: "180px" }}
          />
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default LinkedInPage;
