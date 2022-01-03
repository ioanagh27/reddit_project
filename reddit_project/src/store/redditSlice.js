import {createSlice} from '@reduxjs/toolkit';
import { getComments, getSubredditPosts } from '../api/apis';

const initialState = {
    reddits: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '/r/pics/'
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
        },
        setSelectedSubreddit (state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
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
    loadingCommentsFailed,
    setSelectedSubreddit
} = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(loadingReddits());
        const posts = await getSubredditPosts(subreddit);

        const postsWithComments = posts.map((post) => ({
            ...post,
            visibleComments: false,
            comments: [],
            loadingComments: false,
            loadingCommentsFailed: false
        }));
        dispatch(loadingRedditsSuccess(postsWithComments));
    } catch (error) {
        dispatch(loadingRedditsFailed)
    }
}

export const fetchComments = (index, permalink) => async (dispatch) => {
    try {
        dispatch(loadingComments(index));
        const comments = await getComments(permalink);
        dispatch(loadingCommentsSuccess({index, comments}));
    } catch (error) {
        dispatch(loadingCommentsFailed(index));
    }
}

const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit;

