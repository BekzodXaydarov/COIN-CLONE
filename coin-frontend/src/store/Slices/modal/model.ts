import { createSlice } from "@reduxjs/toolkit";

const Modal = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    setModal: (state, { payload }) => {
      state = payload;
      return payload;
    },
  },
});

export const { setModal } = Modal.actions;
export default Modal.reducer