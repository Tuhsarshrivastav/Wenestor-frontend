import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TrendingProject.css";
import Layout from "../Layout";
import ProjectCard from "./ProjectCard/ProjectCard";
import EditProject from "../../modals/EditProject";
import RejectModal from "../../modals/DeleteProject";
import { API_URL } from "../../../services/url";

const dummy = {
  title: "",
  domains: "",
  description: "",
};

const TrendingProject = () => {
  const [editProject, setEditProject] = useState(null);
  const [deleteProject, setDeleteProject] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const token = localStorage.getItem("admin");
        const res = await axios.get(`${API_URL}/admin/treding_project`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log("fetched", res.data.data);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProjects();
  }, [editProject, deleteProject]);
  console.log("dashboard rendered", editProject);
  return (
    <Layout>
      {editProject && (
        <EditProject
          projectToEdit={editProject.project}
          creating={editProject.creating}
          onClose={() => setEditProject(null)}
        />
      )}
      {deleteProject && (
        <RejectModal
          id={deleteProject.id}
          message={deleteProject.message}
          onClose={() => setDeleteProject(null)}
        />
      )}
      <button
        className="btn btn-primary create-project"
        onClick={() =>
          setEditProject({
            project: dummy,
            creating: true,
          })
        }
      >
        Create Project
      </button>
      {data.map((project) => (
        <ProjectCard
          key={project.projects_trendingprojects_id}
          project={project}
          setEditProject={setEditProject}
          setDeleteProject={setDeleteProject}
        />
      ))}
    </Layout>
  );
};

export default TrendingProject;
