import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    loginSuccess(state) {
      state.loggedIn = true;
    },
  },
});

export default auth.reducer;
export const authActions = auth.actions;
