import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({

    name: "movies",
    initialState: {
        popularMovies: null,
        nowPlayingMovies: null,
        topRatedMovies:null,
        upcomingMovies:null,
        moviesTrailer: null
    },

    reducers: {
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },

        
        addNowPlayingMovies: (state , action)=> {
            state.nowPlayingMovies = action.payload
        },

        addTopRatedMovies: (state , action) => {
            state.topRatedMovies = action.payload
        },
        
        addUpcomingMovies: (state , action) => {
            state.upcomingMovies = action.payload
        },
        
        addMoviesTrailer: (state , action) => {
            state.moviesTrailer = action.payload
        },
    }
})

export const { addPopularMovies , addMoviesTrailer , addNowPlayingMovies , addTopRatedMovies , addUpcomingMovies} = moviesSlice.actions
export default moviesSlice.reducer