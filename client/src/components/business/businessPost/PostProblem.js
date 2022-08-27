import React, { useState, useEffect } from "react";
import BusinessForm from "./BusinessForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../redux/actions/loginAction";
import { saveProject } from "../../../redux/actions/businessProjectAction";
import { initialProjectModel } from "../../../models/ProjectModel";
import { fetchOptions } from "../../../redux/actions/fetchOptionsAction";
function PostProblem({
  project,
  saveProject,
  logout,
  options,
  fetchOptions,
  ...props
}) {
  if (project === null) {
    props.history.push("/business/post");
    project = initialProjectModel;
  }
  const post_project = {
    ...project,
    questions: [
      ...project.questions,
      {
        id: project.questions.length + 1 + "",
        value: "",
      },
    ],
    files_to_be_uploaded: [],
  };
  const [values, setValues] = useState(post_project);
  // debugger;
  useEffect(() => {
    if (options.domain_types.length === 0) {
      fetchOptions();
    }
  }, []);
  useEffect(() => {
    setValues({
      ...values,
      domains: options.domain_types
        .filter((option) => project.domains.includes(option.name))
        .map((option) => ({ value: option.id, label: option.name })),
    });
  }, [options]);

  const onSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...values,
      questions: values.questions.slice(0, values.questions.length - 1),
      domains: values.domains.map((domain) => domain.label),
    };
    if (submitData.domains.length === 0) {
      alert("Please add domain types as well");
      return;
    }
    saveProject(submitData)
      .then(() => props.history.push("/business"))
      .catch((err) => {
        console.log(err);
        const response = err.response;
        if (response.status === 403) {
          logout();
          alert("You are not logged in as business.Please login as Business");
        } else {
          alert("Some error encountered, Status code: " + response.status);
        }
      });
  };
  const onChange = (name, value) => {
    if (name !== "files_to_be_uploaded") {
      setValues({ ...values, [name]: value });
      return;
    }
    const size = 1000 * 1000 * 20;
    setValues({
      ...values,
      [name]: [
        ...values.files_to_be_uploaded,
        ...Object.values(value.files).filter((file) => file.size <= size),
      ],
    });
  };
  const delFile = (name) => {
    setValues({
      ...values,
      files_to_be_uploaded: values.files_to_be_uploaded.filter(
        (file) => file.name !== name
      ),
    });
  };
  const delUploadedFile = (id) => {
    setValues({
      ...values,
      files: values.files.filter((fileObj) => fileObj.id !== id),
    });
  };
  return (
    <div className="business-post-problem">
      <h3>Project / Business Problem</h3>
      <BusinessForm
        values={values}
        edit={project.id ? true : false}
        onChange={onChange}
        onSubmit={onSubmit}
        delFile={delFile}
        domain_types={options.domain_types.map((domain) => ({
          label: domain.name,
          value: domain.id,
        }))}
        delUploadedFile={delUploadedFile}
      />
    </div>
  );
}

export function getProjectById(projects, id) {
  if (projects && projects.length > 0)
    return projects.find((project) => project.id === id) || null;
  else return null;
}

function matchStatetoProps(state, ownProps) {
  const options = state.options;
  const id = ownProps.match.params.id;
  let project = id ? getProjectById(state.projects, id) : initialProjectModel;
  // if (project)
  //   project = {
  //     ...project,
  //
  //   };
  return {
    project,
    options,
  };
}
const matchDispatchtoProps = { saveProject, logout, fetchOptions };
export default connect(matchStatetoProps, matchDispatchtoProps)(PostProblem);
PostProblem.propTypes = {
  project: PropTypes.object,
  history: PropTypes.object.isRequired,
  saveProject: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  fetchOptions: PropTypes.func.isRequired,
};
