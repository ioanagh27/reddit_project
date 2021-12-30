import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadComments = createAsyncThunk('comments/loadComments', async ( {subreddit, id} ) => {
    console.log('id= ' + id);
    console.log('subreddit = ' + subreddit);
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}.json`);
    const json = await response.json();

    return json
});

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        isLoadingComments: false,
        failedToLoadComments: false,
        data: []
    },
    extraReducers: {
        [loadComments.pending]: (state) => {
            state.isLoadingComments = true;
            state.failedToLoadComments = false
        },
        [loadComments.fulfilled]: (state, action) => {
            state.isLoadingComments = false;
            state.failedToLoadComments = false;
            const commentObjs = action.payload[1].data.children;
            state.data = commentObjs.map(item => {
                return {
                    author: item.data.author,
                    body: item.data.body,
                    id: item.data.id
                }
            })
        },
        [loadComments.rejected]: (state) => {
            state.isLoadingComments = false;
            state.failedToLoadComments = true
        }
    }
});

export default commentsSlice.reducer;