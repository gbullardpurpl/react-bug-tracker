import { createSlice } from '@reduxjs/toolkit';
import { retrieveBugs } from '../bugController';

const bugsSlice = createSlice({
    name: "bugs",
    initialState: [],
    reducers: {
        getBugs: state => retrieveBugs(),
        createBugs: (state, actions) => {

        },
        updateBugs: (state, actions) => {

        },
        markComplete: (state, action) => {
            
        },
    }
});

export default bugsSlice.reducer;

export const {getBugs, createBugs, updateBugs, markComplete} = bugsSlice.actions;