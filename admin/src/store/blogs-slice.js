import { createSlice } from "@reduxjs/toolkit";
import { getAllBlogs } from "../services/services";

const blogs = createSlice({
  name: "blogs",
  initialState: {
    allBlogs: [],
    approvedBlogs: [],
  },
  reducers: {
    setAllBlogs(state, payload) {
      state.allBlogs = payload;
    },
    setApprovedBlogs(state, payload) {
      state.approvedBlogs = payload;
    },
  },
});

export const loadAllBlogs = () => async (dispatch) => {
  console.log("reached load all blogs");
  try {
    const res = await getAllBlogs();
    console.log("api res", res);
    dispatch(blogs.actions.setAllBlogs(res));
  } catch (error) {
    console.log(error);
  }
};

export default blogs.reducer;
export const blogsActions = blogs.actions;
