import { configureStore } from "@reduxjs/toolkit";
import redditSliceReducer from "../containers/redditComponent/redditSlice";

export const store = configureStore({
    reducer: {
        redditPosts: redditSliceReducer
    }
})
