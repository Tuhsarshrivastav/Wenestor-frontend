import React, { useState } from "react";
import Layout from "./Layout";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";

const UploadFile = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [progress, setProgress] = useState(0);

  const submitHandler = async (e) => {
    e.preventDefault(); //prevent the form from submitting

    let formData = new FormData();
    try {
      formData.append("file", selectedFiles[0]);
      console.log();
      let res = await axios.post(`/upload_file/${1}`, formData, {
        /// put new api
        headers: {
          "Content-Type": "multipart/form-data",
        },

        onUploadProgress: (data) => {
          //Set the progress value to show the progress bar
          setProgress(Math.round((100 * data.loaded) / data.total));
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      {" "}
      <div className="edit-modal backdrop">
        <div className="modal editForm2">
          <div className="modelheader">
            <Link to="/dashboard/create">Create Blog</Link>
            <Link to="/dashboard">Back</Link>
          </div>

          <form className="formModel" onSubmit={submitHandler}>
            <label className="labelStyle" htmlFor="fileupload" placeholder="hh">
              {selectedFiles.length > 0 ? "File Selected" : " Select Your File"}
            </label>
            <input
              type="file"
              id="fileupload"
              placeholder="Select a File"
              hidden
              onChange={(e) => {
                setSelectedFiles(e.target.files);
              }}
            />
            <progress
              className="imageUpload__progress"
              value={progress}
              max="100"
            />

            <button type="submit" className="create btn btn-primary">
              Upload File
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default UploadFile;
