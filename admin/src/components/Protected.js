import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = ({ Component }) => {
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

export default Protected;
