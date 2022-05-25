import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
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

export default authSlice.reducer;

export const {signIn, signOut, createUser} = authSlice.actions;