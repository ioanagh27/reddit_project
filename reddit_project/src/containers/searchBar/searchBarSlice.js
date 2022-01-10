import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        searchReddit: (state, action) => state = action.payload
    }
});

export const {searchReddit} = searchBarSlice.actions;
export default searchBarSlice.reducer;