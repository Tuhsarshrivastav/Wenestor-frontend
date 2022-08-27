import axios from "axios";
import jwt from "jwt-decode";
import { API_URL } from "./url";

const adminLogin = async ({ email, password }) => {
  try {
    const res = await axios.post("http://35.225.88.225/admin/login", {
      email_id: email,
      password,
    });
    if (res.status === 200) {
      const token = res.data.hash;
      const admin = jwt(token);
      localStorage.setItem("admin", token);
      window.location = "/dashboard/consultants";
    }
  } catch (error) {
    console.log(error);
  }
};
const addBlog = async (blog) => {
  try {
    const res = await axios.post("http://35.225.88.225/admin/blog", blog);
    if (res.status === 200) {
      window.location = "/blogs";
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};
const getAllBlogs = async () => {
  try {
    const token = localStorage.getItem("admin");
    const res = await axios.get(`${API_URL}/admin/blog`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error.messagge);
  }
};
const getAllSkills = async () => {
  try {
    const token = localStorage.getItem("admin");
    const res = await axios.get("http://35.225.88.225/admin/skills/", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data.data);
  } catch (error) {
    console.log(error.messagge);
  }
};
// this api will work after redeploy
const getAllBusiness = async () => {
  try {
    const token = localStorage.getItem("admin");
    const res = await axios.get("http://35.225.88.225/admin/fatchallbusiness", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data.data);
  } catch (error) {
    console.log(error.messagge);
  }
};
// this api will work after redeploy
const getAllConsultants = async () => {
  try {
    const token = localStorage.getItem("admin");
    const res = await axios.get(
      "http://35.225.88.225/admin/fatchallconsultant",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data.data);
  } catch (error) {
    console.log(error.messagge);
  }
};
const fatchTredingProjects = async () => {
  try {
    const token = localStorage.getItem("admin");
    const res = await axios.get("http://35.225.88.225/admin/treding_project", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data.data);
  } catch (error) {
    console.log(error.messagge);
  }
};
const UpdateTrendingProjects = async () => {
  try {
    const token = localStorage.getItem("admin");
    const body = {
      title: "update1 tasting",
      domains: "update1 ",
      description: "update1 ",
    };
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    const res = await axios.put(
      `http://35.225.88.225/admin/treding_project/${3}`,
      body,
      config
    );
    console.log(res.data.data);
  } catch (error) {
    console.log(error.messagge);
  }
};
const approvedBlog = async () => {
  try {
    const token = localStorage.getItem("admin");
    const body = {
      approvedtogoforwebsite: 1,
    };
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    const res = await axios.put(
      `http://35.225.88.225/admin/blog/${6}`,
      body,
      config
    );
    console.log(res.data.data);
  } catch (error) {
    console.log(error.messagge);
  }
};
// this api will work after redeploy
const fatchBlogById = async (id) => {
  try {
    const token = localStorage.getItem("admin");
    const res = await axios.get("http://35.225.88.225/admin/blog/${id}", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
  } catch (error) {
    console.log(error.messagge);
  }
};
// this api will work after redeploy
const DeleteBlogByid = async (id) => {
  try {
    const token = localStorage.getItem("admin");
    const res = await axios.delete(`http://35.225.88.225/admin/blog/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
  } catch (error) {
    console.log(error.messagge);
  }
};
const AddTrendingProject = async ({ title, domains, description }) => {
  const token = localStorage.getItem("admin");
  const body = {
    title,
    domains,
    description,
  };
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
  try {
    const res = await axios.post(
      "http://35.225.88.225/admin/treding_project/",
      body,
      config
    );
    if (res.status === 200) {
      window.location = "/trendingprojects";
    }
  } catch (error) {
    console.log(error);
  }
};

export { adminLogin, addBlog, getAllSkills, getAllConsultants, getAllBlogs };
