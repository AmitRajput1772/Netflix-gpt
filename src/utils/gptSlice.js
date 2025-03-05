import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        searchView: false,
        movieResults: null,
        movieNames: null,
        loading: false,  // ⬅️ Added loading state
    },
    reducers: {
        toggleSearchView: (state) => {
            state.searchView = !state.searchView;
        },
        setLoading: (state, action) => {
            state.loading = action.payload; // ⬅️ Set loading state for shimmer effect
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
            state.loading = false; // ⬅️ Disable shimmer when movies are fetched
        }
    }
});

export const { toggleSearchView, setLoading, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
