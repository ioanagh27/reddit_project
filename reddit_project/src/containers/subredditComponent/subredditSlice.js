import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../../api/apis";


const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        activeSubreddit: '/r/Home/'
    },
    reducers: {
        addSubreddit: (state, action) => {
            state.subreddits.push(action.payload);
        },
        changeSubreddit: (state, action) => {
            state.activeSubreddit = action.payload;
        }
    }
})

export const {
   addSubreddit, changeSubreddit
} = subredditSlice.actions;

export default subredditSlice.reducer;

