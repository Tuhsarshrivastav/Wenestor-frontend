import React from "react";
import TextInput from "../../common/TextInput";
import PropTypes from "prop-types";
import * as filesApi from "../../../api/filesApi";
import Select from "react-select";
export default function BusinessForm({
  edit,
  onSubmit,
  values,
  onChange,
  delFile,
  delUploadedFile,
  domain_types,
}) {
  const onValChange = (e, vals) => {
    const newValues = values[vals]
      .map((val) =>
        val.id === e.target.name ? { ...val, value: e.target.value } : val
      )
      .filter((val) => val.value !== "");
    const id = newValues[newValues.length - 1]
      ? newValues[newValues.length - 1].id
      : "0";
    newValues.push({
      id: "" + (parseInt(id) + 1),
      value: "",
    });
    onChange(vals, newValues);
  };
  const ask_question_section = values.questions.map((ques) => (
    <TextInput
      key={ques.id}
      value={ques.value}
      placeholder={"Add Custom Question"}
      name={ques.id}
      required={false}
      onChange={(e) => onValChange(e, "questions")}
    />
  ));
  // const domain = values.domains.map((dom) => (
  //   <TextInput
  //     key={dom.id}
  //     value={dom.value}
  //     placeholder={"Add Domain"}
  //     name={dom.id}
  //     required={false}
  //     onChange={(e) => onValChange(e, "domains")}
  //   />
  // ));
  return (
    <form className="post-form" onSubmit={onSubmit}>
      <div className="form-group">
        <TextInput
          value={values.title}
          placeholder={"Add Title..."}
          name="title"
          required={true}
          onChange={({ target }) => onChange(target.name, target.value)}
        />
      </div>
      <div className="input-group">
        <textarea
          className="form-control "
          onChange={({ target }) => {
            onChange(target.name, target.value);
          }}
          value={values.description}
          name="description"
          required={true}
          placeholder={"Add Description..."}
        />
      </div>
      {values.files_to_be_uploaded.length > 0 ? (
        <>
          <h4>File Details:</h4>
          {values.files_to_be_uploaded.map((file) => (
            <div
              key={file.name}
              className="d-flex .d-inline-flex justify-content-start align-items-center"
            >
              <div className="p-10">
                <p className="text-left">
                  <strong>File Name:</strong> {file.name}
                  <strong> File Type:</strong>
                  {file.type}
                  <strong> File Size:</strong> {file.size / 1000 / 1000} MB
                </p>
                <p></p>
                <p></p>
              </div>
              <button
                onClick={() => delFile(file.name)}
                className="btn btn-danger btn-sm ml-auto p-1"
              >
                Del
              </button>
            </div>
          ))}
        </>
      ) : (
        ""
      )}
      {values.files && values.files.length > 0 ? (
        <>
          <h4>Already Uploaded Files</h4>
          {values.files.map((file) => (
            <div
              key={file.id}
              className="d-flex .d-inline-flex justify-content-start align-items-center"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  filesApi.fetchFile(file.id);
                }}
                className="btn btn-link"
              >
                {file.file_url}
              </button>
              <button
                onClick={() => delUploadedFile(file.id)}
                className="btn btn-danger btn-sm ml-auto p-1"
              >
                Del
              </button>
            </div>
          ))}
        </>
      ) : (
        ""
      )}
      {/* Files input */}
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="validatedCustomFile"
          name="files_to_be_uploaded"
          multiple
          onChange={({ target }) => onChange(target.name, target)}
        />
        <label className="custom-file-label" htmlFor="validatedCustomFile">
          Choose files...
        </label>
        <div className="invalid-feedback">
          Example invalid custom file feedback
        </div>
        <p className="text-info">Size of file should be less than 20 MB</p>
      </div>
      {/* Questions */}
      <div className="form-group">
        <h5>Ask Questions</h5>
        {ask_question_section}
      </div>
      <div className="form-group">
        <h5>Domain of the Project problem</h5>
        <Select
          closeMenuOnSelect={false}
          loadingMessage="loading the options"
          isMulti
          options={domain_types}
          value={values.domains}
          onChange={(values) => {
            onChange("domains", values);
          }}
        />
        <small className="text-info">
          select only 5 domains of the projects
        </small>
      </div>
      <button className="btn btn-dark" type="submit">
        {edit ? "Edit Project" : "Add Project"}
      </button>
    </form>
  );
}
BusinessForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  edit: PropTypes.bool,
  delFile: PropTypes.func.isRequired,
  delUploadedFile: PropTypes.func.isRequired,
  domain_types: PropTypes.array,
};
