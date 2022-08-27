import React, { useState } from "react";
import { useEffect } from "react";
import * as profileApi from "../../api/profileApi";
export default function Profile({ match }) {
  const consultant_id = match.params.id;
  const [profile, setProfile] = useState({ name: "" });
  useEffect(() => {
    profileApi.loadProfile(consultant_id).then((response) => {
      setProfile(response.data.profile);
    });
  }, []);
  console.log(profile);
  return (
    <div
      className="container text-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card mt-5 mx-auto shadow-lg w-75">
        <div className="card-header">
          <h1>Profile</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col h5 text-primary">Name</div>
            <div className="col h5">{profile.name}</div>
          </div>
          <div className="row">
            <div className="col h5 text-primary">Experience</div>
            <div className="col h5">{profile.experience}</div>
          </div>
          <div className="row">
            <div className="col h5">Other fields</div>
            <div className="col h5">...</div>
          </div>
        </div>
      </div>
    </div>
  );
}
