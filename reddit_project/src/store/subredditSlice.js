import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../api/apis";


const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        homepage: '/r/Home'
    },
    reducers: {
       /* loadingSubreddits (state) {
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
        }*/
        addSubreddit: (state, action) => {
            state.subreddits.push(action.payload);
        },
        changeSubreddit: (state, action) => {
            state.homepage = action.payload;
        }
    

    }
})

export const {
   addSubreddit, changeSubreddit
} = subredditSlice.actions;

export default subredditSlice.reducer;

/*export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(loadingSubreddits());
        const subreddits = await getSubreddits();
        dispatch(loadingSubredditsSuccess(subreddits));
    } catch (error) {
        dispatch(loadingSubredditsFailed);
    }
}; */

