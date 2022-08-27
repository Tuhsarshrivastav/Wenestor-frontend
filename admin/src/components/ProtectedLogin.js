import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedLogin = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let admin = localStorage.getItem("admin");
    if (!admin) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedLogin;
