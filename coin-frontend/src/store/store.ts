import { configureStore } from "@reduxjs/toolkit";
import { IStore } from "../types";
import Admin from "./Slices/admin/admin";
import Modal from "./Slices/modal/model";

export const store = configureStore<IStore>({
  reducer: {
    admin: Admin,
    modal: Modal,
  },
});
