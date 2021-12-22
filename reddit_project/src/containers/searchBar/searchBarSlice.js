import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        changeActiveReddit: (state, action) => 
        state = action.payload
    }
});

export const {changeActiveReddit} = searchBarSlice.actions;
export default searchBarSlice.reducer;