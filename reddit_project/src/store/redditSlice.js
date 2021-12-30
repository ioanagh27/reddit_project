import {createSlice} from '@reduxjs/toolkit';
import { getComments } from '../api/apis';

const initialState = {
    reddits: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '/r/'
}

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState: initialState,
    reducers: {
        setReddits(state, action) {
            state.reddits = action.payload;}
        },
        loadingReddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        loadingRedditsSuccess(state, action) {
            state.isLoading = false;
            state.reddits = action.payload;
        },
        loadingRedditsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        loadingComments(state, action) {
            state.reddits[action.payload].isloadingComments = true;
            state.reddits[action.payload].error = false;
        },
        loadingCommentsSuccess(state, action) {
            state.reddits[action.payload.index].isloadingComments = false;
            state.reddits[action.payload.index].comments = action.payload.comments;
        },
        loadingCommentsFailed(state, action) {
            state.reddits[action.payload].isloadingComments = false;
            state.reddits[action.payload].error = true;
        }
});

export const {
    setReddits,
    loadingReddits,
    loadingRedditsSuccess,
    loadingRedditsFailed,
    setSearchTerm,
    loadingComments,
    loadingCommentsSuccess,
    loadingCommentsFailed
} = redditSlice.actions;

export default redditSlice.reducer;

export const fetchComments = (index, permalink) => async (dispatch) => {
    try {
        dispatch(loadingComments(index));
        const comments = await getComments(permalink);
        dispatch(loadingCommentsSuccess({index, comments}));
    } catch (error) {
        dispatch(loadingCommentsFailed(index));
    }

}