import React from "react";
import ApplyedProjectCard from "./ApplyedProjectCard";
import { useState , useEffect } from "react";
import axios from "axios"
import ApplyedModel from "./models/Applyed";
import { API_URL } from "../../services/url";
const baseUrl = API_URL;


const ApplyedProject = () => {

  const [applyedSuccess, setApplyedSuccess] = useState(false);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const AllProjects = async () => {
      setLoading(true);
      try {
        // token is working here
        // const token = localStorage.getItem("reset-password-token");
        // const id =  consultant_id ;
        const token = localStorage.getItem("consultant_token");
        const consultant_id = localStorage.getItem("consultant_id");
        const res = await axios.get(baseUrl+`/api/consultant/projectappliedbyconsultant/${consultant_id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        // const id = "62987d55073ac29be8764c0d";
        // const res = await axios.get(`http://localhost:8000/api/consultant/projectappliedbyconsultant/${id}`, {
        //   // headers: {
        //   //   authorization: `Bearer ${token}`,
        //   // },
        // });
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
        // console.log("first itme",items);
        return <><ApplyedProjectCard 
        title={items.title}
        domain = {items.domains}
        description = {items.description}

        /></>

      }) 
    }
    </>
  );
};

export default ApplyedProject;
