import { createSlice } from "@reduxjs/toolkit";

const Modal = createSlice({
  name: "modal",
  initialState: { is_active: false, Form: null },
  reducers: {
    Open: (state, { payload }) => {
      state.is_active = true;
      state.Form = payload.Form;
    },
    Close: (state,_) => {
      state.is_active = false;
    },
  },
});

export const { Open,Close } = Modal.actions;
export default Modal.reducer;
