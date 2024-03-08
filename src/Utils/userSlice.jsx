import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },

    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
            console.log(state.user);
        },

        removeUser: (state, action) => {
            state.user = null;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;