import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../../components/utils";

const local = localStorage.getItem("admin");

const Admin = createSlice({
  name: "admin",
  initialState: local ? JSON.parse(local) : {},
  reducers: {
    setAdmin: async (state, { payload }) => {
      const admin = await axios.get(api + "/admin-profile", {
        headers: {
          Authorization: `Bearer ${payload}`
        }
      })
      localStorage.setItem("admin", JSON.stringify({ ...admin.data.admin, token: payload }));
      state = { ...admin.data.admin, token: payload };
    },
    logOutAdmin: (state, _) => {
      localStorage.removeItem("admin");
      state.admin = {};
      return state;
    },
  },
});

export const { setAdmin, logOutAdmin } = Admin.actions;
export default Admin.reducer