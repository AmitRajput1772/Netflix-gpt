import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        searchView : false,
    },
    reducers: {
        toggleSearchView : (state) => {
            state.searchView = !state.searchView;
        }
    }
})


export const { toggleSearchView } = gptSlice.actions;
export default gptSlice.reducer;