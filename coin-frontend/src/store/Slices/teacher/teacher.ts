import { createSlice } from "@reduxjs/toolkit";

const Teacher = createSlice({
    name: "teacher",
    initialState: [],
    reducers: {
        setTeacher: (state, { payload }) => {
            state = payload
            return payload
        }
    }
})

export const { setTeacher } = Teacher.actions
export default Teacher.reducer