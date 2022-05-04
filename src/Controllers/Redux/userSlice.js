import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: [{}],
    reducers: {
        getUser: (state) => {
            state.push({ name: "Dan Yell" });
            state.push({ name: "John Doe" });
            state.push({ name: "Jane Dough" });
        }
    }
});

export default slice.reducer;

export const { getBugs, createBugs, updateBugs, markComplete } = slice.actions;