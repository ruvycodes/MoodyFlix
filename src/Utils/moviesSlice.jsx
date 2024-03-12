import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({

    name: "movies",
    initialState: {
        popularMovies: null,
    },

    reducers: {
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
            console.log(state.popularMovies);
        },
    }
})

export const { addPopularMovies } = moviesSlice.actions
export default moviesSlice.reducer