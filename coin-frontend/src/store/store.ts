import { configureStore} from "@reduxjs/toolkit";
import Admin from "./Slices/admin/admin";
import Modal from "./Slices/modal/model";
import Teacher from "./Slices/teacher/teacher"

export const store = configureStore({
  reducer: {
    admin: Admin,
    modal: Modal,
    teacher:Teacher
  },
});

