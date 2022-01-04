import { combineReducers } from "redux";
import redditReducer from "./redditSlice";
import commentsSliceReducer from './commentsSlice'
import subredditReducer from './subredditSlice';

const reducers = combineReducers({
    allReddits: redditReducer,
    comments: commentsSliceReducer,
    subreddits: subredditReducer
})

export default reducers;