import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        NowPlayingMovies: null,
        PopularMovies: null,
        UpcomingMovies: null,
        trailerVideo: null,
        TopRatedMovies: null,
        SelectedMovie: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.NowPlayingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => { 
            state.TopRatedMovies = action.payload;
        },

        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        },

        addUpComingMovies: (state, action) => {
            state.UpcomingMovies = action.payload;
        },

        addTrailerVideo: (state, action) => { 
            state.trailerVideo = action.payload;
        },
        addSelectedMovie: (state, action) => { 
            state.SelectedMovie = action.payload;
        }
    }
})

export const {
    addNowPlayingMovies,
    addTrailerVideo,
    addPopularMovies,
    addUpComingMovies,
    addTopRatedMovies,
    addSelectedMovie
} = movieSlice.actions;

export default movieSlice.reducer;