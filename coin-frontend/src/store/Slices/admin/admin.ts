import { createSlice } from "@reduxjs/toolkit";

const local = localStorage.getItem("admin");

const Admin = createSlice({
  name: "admin",
  initialState: {
    admin: local ? JSON.parse(local) : {},
    admins: [],
    updateAdmin: {},
  },
  reducers: {
    logOutAdmin: (state, _) => {
      localStorage.removeItem("admin");
      state.admin = {};
      return state;
    },
    setAdmins: (state, { payload }) => {
      state.admins = payload;
    },
    setAdmin: (state, { payload }) => {
      localStorage.setItem("admin", JSON.stringify(payload))
      state.admin = payload
    },
    updateAdmin: (state, { payload }) => {
      state.updateAdmin = payload;
    },
  },
});

export const { logOutAdmin, setAdmins, updateAdmin, setAdmin } = Admin.actions;
export default Admin.reducer;
