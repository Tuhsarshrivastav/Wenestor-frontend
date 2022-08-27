import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ExpertCard.css";
// import expert1 from "../../../../../Images/expert1.png";
// import expert2 from "../../../../../Images/expert2.png";
// import expert3 from "../../../../../Images/expert3.png";
// import expert4 from "../../../../../Images/expert4.png";
import close from "../../../../../Images/close.svg";
import axios from "axios";
import { API_URL } from "../../../../../services/url";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;

const ExpertCard = ({
  name,
  role,
  introduction,
  consultant_id,
  project_id,
}) => {
  const [showChatModal, setShowChatModal] = useState(false);
  // const images = [expert1, expert2, expert3, expert4];
  const handleInvite = async () => {
    // send request to api
    try {
      const token = localStorage.getItem("token");
      console.log("handling invite func", consultant_id, project_id);
      const res = await axios.post(
        baseUrl + "/api/business/invcons",
        {
          consultant_id: consultant_id,
          project_id: project_id,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      // setState(res.data.data);
      console.log(res.data.data);
      // setExperts(res.data.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      // setLoading(false);
    }
  };
  const handleChat = async () => {
    // send request to api
  };
  return (
    <>
      {showChatModal && (
        <ChatModal
          consultant_id={consultant_id}
          project_id={project_id}
          onClose={() => setShowChatModal(false)}
        />
      )}
      <div className="expert-card">
        {/* <Link to="expert/profile">
        <div className="img-container">
          <img src={images[image]} alt="Expert-Image" />
        </div>
      </Link> */}
        <h3 className="expert-name">{name}</h3>
        <div className="experience">{role}</div>
        <div className="description">{introduction}</div>
        <div className="d-flex">
          <Link
            className="btn btn-primary invite-btn"
            onClick={() => setShowChatModal(true)}
          >
            Chat
          </Link>
          <Link className="btn btn-primary invite-btn" onClick={handleInvite}>
            Invite
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExpertCard;

function ChatModal({ consultant_id, project_id, onClose }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const msgRef = useRef();
  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    let chat_id ;
    try{
      const res = await axios.get(
         `${baseUrl}/api/business/chat/${consultant_id}/${project_id}`,
        config
      );
      console.log(res.data.data.chat_id);
      chat_id = res.data.data.chat_id;
    }catch(error)
    {
      console.log(error);
    }

    if(chat_id === undefined)
    {
      chat_id = null;
    }
    const message = msgRef.current.value;
    const formData = new FormData();
    formData.append("chat_file", selectedFiles[0]);
    console.log("res");
    formData.append("text", message);
    formData.append("consultant_id", consultant_id);
    formData.append("project_id", project_id);
    formData.append("chat_id", chat_id);
    console.log(formData);
    
    try {
      const res = await axios.post(
        baseUrl + "/api/business/chat",
        formData,
        config
      );
      if (res.status === 200) {
        // window.location = "/trendingprojects";
      }
    } catch (error) {
      console.log(error);
    }
  };

      // const token = localStorage.getItem("token");
      // const res = await axios.post(
      //   baseUrl+"/api/business/chat",
      //  {
      //   chat_id: "",
      //   project_id,
      //   consultant_id,
      //   text: message
      //  },
      //   {
      //     headers: `Bearer ${token}`,
      //     "Content-Type": "multipart/form-data"
      //   }
      // );
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
  // };
  return (
    <div className="backdrop" 
    // onClick={onClose}
    >
      <div className="modal">
        <div className="close" onClick={onClose}>
          <img src={close} alt="X" className="close" />
        </div>
        <label htmlFor="message" className="input__message-label">
          Message
        </label>
        <form onSubmit={onSubmit}>

        <input
          type="text"
          placeholder="Your message"
          ref={msgRef}
          className="input__message"
        />
        <input
              type="file"
              id="fileupload"
              placeholder="Select a File"
              onChange={(e) => {
                setSelectedFiles(e.target.files);
              }}
            />
        <button type="submit" className="btn btn-primary" >
          Send
        </button>

        </form>
      </div>
    </div>
  );
}
