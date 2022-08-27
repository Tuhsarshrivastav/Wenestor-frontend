import axios from "axios";
import { hostUrl } from "../services/url";

export const getAllBlogs = async () => {
  try {
    const res = await axios.get(hostUrl + "/api//blog/approved");
    return res.data;
  } catch (error) {
    console.log("error is ", error);
  }
};

export const postBlog = async (blog, consultant_id) => {
  try {
    const res = await axios.post(hostUrl + "/consultant/blogs", {
      consultant_id,
      title: blog.title,
      description: blog.description,
      tags: blog.tags,
      file_upload: blog.files,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
