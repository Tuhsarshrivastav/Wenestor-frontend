import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SkillsDashboard.css";
import Layout from "../Layout";
import SkillCard from "./SkillCard/SkillCard";
import EditSkillModal from "../../modals/EditSkill";
import RejectModal from "../../modals/DeleteSkill";
import { API_URL } from "../../../services/url";

const SkillsDashboard = () => {
  const [editSkill, setEditSkill] = useState(null);
  const [deleteSkill, setDeleteSkill] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAllSkills = async () => {
      try {
        const token = localStorage.getItem("admin");
        const res = await axios.get(`${API_URL}/admin/skills`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data.data);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSkills();
  }, [editSkill, deleteSkill]);
  console.log("dashboard rendered");
  return (
    <Layout>
      {editSkill && (
        <EditSkillModal
          skillToEdit={editSkill.skill}
          creating={editSkill.creating}
          onClose={() => setEditSkill(null)}
        />
      )}
      {deleteSkill && (
        <RejectModal
          id={deleteSkill.id}
          message={deleteSkill.message}
          onClose={() => {
            console.log("called");
            setDeleteSkill(null);
          }}
        />
      )}
      <button
        className="btn btn-primary create-skill"
        onClick={() =>
          setEditSkill({
            skill: {
              name: "",
              details: "",
              brief: "",
              subskills: "",
              skill_id: "",
            },
            creating: true,
          })
        }
      >
        Create Skill
      </button>
      {data.map((skill) => (
        <SkillCard
          key={skill.skills_id}
          skill={skill}
          setEditSkill={setEditSkill}
          setDeleteSkill={setDeleteSkill}
        />
      ))}
    </Layout>
  );
};

export default SkillsDashboard;
