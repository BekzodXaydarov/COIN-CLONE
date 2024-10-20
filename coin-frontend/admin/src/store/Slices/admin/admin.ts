import { createSlice } from "@reduxjs/toolkit";

const local = localStorage.getItem("admin");

const Admin = createSlice({
  name: "admin",
  initialState: local ? JSON.parse(local) : {},
  reducers: {
    setAdmin: (state, { payload }) => {
      localStorage.setItem("admin", JSON.stringify(payload));
      state = payload;
      return payload;
    },
    logOutAdmin: (state, _) => {
      localStorage.removeItem("admin");
      state = {};
      return state;
    },
  },
});

export const { setAdmin, logOutAdmin } = Admin.actions;
export default Admin.reducer