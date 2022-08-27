import React from "react";
import ApplyedProjectCard from "./ApplyedProjectCard";
import { useState , useEffect } from "react";
import axios from "axios"
import ApplyedModel from "./models/Applyed";

const ApplyedProject = () => {

  const [applyedSuccess, setApplyedSuccess] = useState(false);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const AllProjects = async () => {
      setLoading(true);
      try {
        // const token = localStorage.getItem("admin");
        // const res = await axios.get("http://35.225.88.225/api/consultant/project", {
        //   headers: {
        //     authorization: `Bearer ${token}`,
        //   },
        // });
        const res = await axios.get("http://localhost:8000/api/consultant/project", {
          // headers: {
          //   authorization: `Bearer ${token}`,
          // },
        });
        console.log("hi 2",res.data.data);
        setState(res.data.data);
      } catch (error) {
        console.log(error.messagge);
      } finally {
        setLoading(false);
      }
    };
    AllProjects();
  }, [state.length]);
  const closeApplyed = () => {
    setApplyedSuccess(false);
  };

  return (
    <>
      {applyedSuccess && <ApplyedModel onClose={closeApplyed} />}
    
    {
      state.map((items)=>{
        console.log("first itme",items);
        <ApplyedProjectCard 
        title={items.title}
        domain = {items.domains}
        description = {items.description}

        />

      }) 
    }
    </>
  );
};

export default ApplyedProject;
