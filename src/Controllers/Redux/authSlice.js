import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "auth",
    inititalState: {
        admin: false,
        loggedIn: false,
    },
    reducers: {
        signIn: (state, action) => {
            // more later
        },
        signOut: (state) => {
            // more later
        },
        createUser: (state, action) => {
            // more later
        }
    },
});