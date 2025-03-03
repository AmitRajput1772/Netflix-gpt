import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        searchView: false,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        toggleSearchView : (state) => {
            state.searchView = !state.searchView;
        },
        addGptMovieResult: (state, action) => {

            const { movieNames, movieResults } = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;

        }
    }
})


export const { toggleSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;