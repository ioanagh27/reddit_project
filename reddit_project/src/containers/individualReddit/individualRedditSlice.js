import { createSlice } from "@reduxjs/toolkit";

export const individualRedditSlice = createSlice({
    name: 'individualRedditId',
    initialState: '',
    reducers: {
        changeRedditId: (state, action) => state = action.payload
    }
})

export default individualRedditSlice.reducer;
export const {changeRedditId} = individualRedditSlice.actions;