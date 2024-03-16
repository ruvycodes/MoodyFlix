import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({

    name: "movies",
    initialState: {
        popularMovies: null,
        moviesTrailer: null
    },

    reducers: {
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },

        addMoviesTrailer: (state , action) => {
            state.moviesTrailer = action.payload
            console.log(state.moviesTrailer);
        }

    }
})

export const { addPopularMovies , addMoviesTrailer } = moviesSlice.actions
export default moviesSlice.reducer