import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../api/apis";

const initialState = {
    subreddits: [],
    isLoading: false,
    error: false
};

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: initialState,
    reducers: {
        loadingSubreddits (state) {
            state.isLoading = true;
            state.error = false;
        },
        loadingSubredditsSuccess (state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        loadingSubredditsFailed (state) {
            state.isLoading = false;
            state.error = true;
        }

    }
})

export const {
    loadingSubreddits,
    loadingSubredditsSuccess,
    loadingSubredditsFailed
} = subredditSlice.actions;

export default subredditSlice.reducer;

export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(loadingSubreddits());
        const subreddits = await getSubreddits();
        dispatch(loadingSubredditsSuccess(subreddits));
    } catch (error) {
        dispatch(loadingSubredditsFailed);
    }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;