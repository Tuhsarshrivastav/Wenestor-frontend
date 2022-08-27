import React, { useState } from "react";
import axios from "axios";
import "./modal.css";
import close from "../../Images/close.svg";
import PropTypes from "prop-types";
import { API_URL } from "../../services/url";

const EditProject = ({ projectToEdit, onClose, creating }) => {
  const [project, setProject] = useState(projectToEdit);
  const [loading, setLoading] = useState("");
  console.log(projectToEdit);
  const onChange = ({ target }) => {
    setProject({ ...project, [target.name]: target.value });
    console.log(project);
  };
  const onSubmit = async () => {
    console.log("submit", project, creating);

    if (creating) {
      console.log("creating new project", project);
      try {
        setLoading("Creating...");
        const token = localStorage.getItem("admin");
        const res = await axios.post(
          `${API_URL}/admin/treding_project`,
          {
            title: project.title,
            domains: project.domain,
            description: project.description,
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
      console.log("editing this skill", project.projects_id);
      setLoading("Editing...");
      try {
        const token = localStorage.getItem("admin");
        const res = await axios.put(
          `${API_URL}/admin/treding_project/${project.trendingprojects_id}`,
          {
            title: project.title,
            domains: project.domain,
            description: project.description,
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
          <span className="input-label">Title: </span>
          <input
            type="text"
            value={project.title}
            name="title"
            onChange={onChange}
          />
        </div>
        <div className="input-field">
          <span className="input-label">Description: </span>
          <input
            type="text"
            value={project.description}
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="input-field">
          <span className="input-label">Domain: </span>
          <input
            type="text"
            value={project.domain}
            name="domain"
            onChange={onChange}
          />
        </div>
        <button className="create btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
EditProject.prototypes = {
  setEditProject: PropTypes.func.isRequired,
  projectToEdit: PropTypes.object.isRequired,
  creating: PropTypes.bool.isRequired,
};
export default EditProject;
