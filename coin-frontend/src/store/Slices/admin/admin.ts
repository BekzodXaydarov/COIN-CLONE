import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../../components/utils";

export const setAdmin = createAsyncThunk(
  "admin/setAdmin",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(api + "/admin-profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.setItem(
        "admin",
        JSON.stringify({ ...response.data.admin, token })
      );

      return { ...response.data.admin, token };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

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
    updateAdmin: (state, { payload }) => {
      state.updateAdmin = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setAdmin.fulfilled, (_, { payload }) => {
        return payload;
      })
      .addCase(setAdmin.rejected, (_, { payload }) => {
        console.error("Failed to set admin:", payload);
      });
  },
});

export const { logOutAdmin, setAdmins, updateAdmin } = Admin.actions;
export default Admin.reducer;
