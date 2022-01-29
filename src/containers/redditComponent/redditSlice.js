import {createSelector, createSlice} from '@reduxjs/toolkit';
import { getComments, getSubredditPosts, getSubreddits } from '../../api/apis';


const redditSlice = createSlice({
    name: 'redditPosts',
    initialState: {
        posts: [],
        subreddits: [],
        error: false,
        isLoading: false,
        searchTerm: '',
        selectedSubreddit: '/r/pics/'
    },
    reducers: {
        loadingPosts(state) {
            state.isLoading = true;
            state.error = false;
        },
        loadingPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts= action.payload;
        },
        loadingPostsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
        loadingSubreddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        loadingSubredditsSuccess(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        loadingSubredditsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
        selectSubreddit (state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        loadingComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
            if (!state.posts[action.payload].showingComments) {
                return;
            }
            state.posts[action.payload].loadingComments = true;
            state.posts[action.payload].error = false;
        },
        loadingCommentsSuccess(state, action) {
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        loadingCommentsFailed(state, action) {
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].error = true;
        },
        toggleComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
        }        
}});

export const {
    loadingPosts,
    loadingPostsSuccess,
    loadingPostsFailed,
    loadingSubreddits,
    loadingSubredditsSuccess,
    loadingSubredditsFailed,
    selectSubreddit,
    setSearchTerm,
    loadingComments,
    loadingCommentsSuccess,
    loadingCommentsFailed,
    toggleComments
} = redditSlice.actions;

export const selectPosts = (state) => state.redditPosts.posts;
export const selectSubreddits = (state) => state.redditPosts.subreddits;
export const selectSearchTerm = (state) => state.redditPosts.searchTerm;
export const selectSelectSubreddit = (state) => state.redditPosts.selectedSubreddit;
export const selectIsLoading = (state) => state.isLoading;
export const selectError = (state) => state.error;

const redditSliceReducer =  redditSlice.reducer;

export default redditSliceReducer;

export const fetchPosts= (subreddit) => async (dispatch) => {
    try {
        dispatch(loadingPosts());
        const posts = await getSubredditPosts(subreddit);

        const postWithMetadata = posts.map(post => {
            return {
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            loadingCommentsFailed: false
        }});
        dispatch(loadingPostsSuccess(postWithMetadata));
    } catch (error) {
        dispatch(loadingPostsFailed());
    }
}

export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(loadingSubreddits());
        const subreddits = await getSubreddits();
        dispatch(loadingSubredditsSuccess(subreddits));
    } catch (error) {
        dispatch(loadingSubredditsFailed());
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

export const selectPostsIncludingSearchTerm = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if (searchTerm) {
            return posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        return posts;
    }
)
