import { createSlice } from '@reduxjs/toolkit';
import { retrieveBugs } from '../bugController';

const slice = createSlice({
    name: "bug",
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