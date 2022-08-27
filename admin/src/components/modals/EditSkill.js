import React, { useState } from "react";
import axios from "axios";
import "./modal.css";
import close from "../../Images/close.svg";
import SkillsDashboard from "../Dashboard/SkillsDashboard/SkillsDashboard";
import { API_URL } from "../../services/url";

const EditSkillModal = ({ skillToEdit, onClose, creating }) => {
  console.log(creating);
  const [skill, setSkill] = useState(skillToEdit);
  const [loading, setLoading] = useState("");
  console.log(skillToEdit);
  const onChange = ({ target }) => {
    setSkill({ ...skill, [target.name]: target.value });
    console.log(skill);
  };
  const onSubmit = async () => {
    console.log("submit");

    if (creating) {
      try {
        setLoading("Creating...");
        const token = localStorage.getItem("admin");
        const res = await axios.post(
          `${API_URL}/admin/skills`,
          {
            name: skill.name,
            details: skill.details,
            brief: skill.brief,
            subskills: skill.subskills,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
        if (res.status === 201) {
          setLoading(`Skill created successfully`);
          setTimeout(() => {
            onClose();
            setLoading("");
          }, 3000);
        } else {
          setLoading("Failed :(");
          setTimeout(() => {
            onClose();
            setLoading("");
          }, 3000);
        }
      } catch (error) {
        console.log(error);
        setLoading("Failed :(");
        setTimeout(() => {
          onClose();
          setLoading("");
        }, 3000);
      }
    } else {
      console.log("editing this skill", skill.skills_id);
      setLoading("Editing...");
      try {
        const token = localStorage.getItem("admin");
        const res = await axios.put(
          `${API_URL}/admin/skills/${skill.skills_id}`,
          {
            name: skill.name,
            details: skill.details,
            brief: skill.brief,
            subskills: skill.subskills,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
        if (res.status === 201) {
          setLoading("Skill edited successfully");
          setTimeout(() => {
            onClose();
            setLoading("");
          }, 3000);
        } else {
          setLoading("Failed :(");
          setTimeout(() => {
            onClose();
            setLoading("");
          }, 3000);
        }
      } catch (error) {
        console.log(error);
        setLoading("Failed :(");
        setTimeout(() => {
          onClose();
          setLoading("");
        }, 3000);
      }
    }
  };
  return (
    <div className="edit-modal backdrop">
      <div className="modal editForm">
        <div className="close" onClick={onClose}>
          <img src={close} alt="X" className="close" />
        </div>
        <div className="input-field">
          <span className="input-label">Name: </span>
          <input
            type="text"
            value={skill.name}
            name="name"
            onChange={onChange}
          />
        </div>
        <div className="input-field">
          <span className="input-label">Brief: </span>
          <input
            type="text"
            value={skill.brief}
            name="brief"
            onChange={onChange}
          />
        </div>
        <div className="input-field">
          <span className="input-label">Sub Skills: </span>
          <input
            type="text"
            value={skill.subskills}
            name="subskills"
            onChange={onChange}
          />
        </div>
        <div className="input-field content">
          <input
            type="text"
            value={skill.details}
            placeholder="Details"
            name="details"
            onChange={onChange}
          />
        </div>
        <button className="create btn btn-primary" onClick={onSubmit}>
          {creating ? "Create" : "Edit"}
        </button>
        {loading.length > 0 && (
          <span style={{ marginLeft: "5px" }}>{loading}</span>
        )}
      </div>
    </div>
  );
};

export default EditSkillModal;
