import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "auth",
    initialState: [{
        admin: false,
        loggedIn: false,
    }],
    reducers: {
        signIn: (state, action) => {
            // eslint-disable-next-line
            const { name, password } = action.payload;
            return state = {
                loggedIn: true, // temporary
                admin: true, // temporary
            }
        },
        signOut: (state) => {
            return state = {
                loggedIn: false, // temporary
                admin: false, // temporary
            }
        },
        createUser: (state, action) => {
            // more later
        }
    },
});

export default slice.reducer;

export const {signIn, signOut, createUser} = slice.actions;