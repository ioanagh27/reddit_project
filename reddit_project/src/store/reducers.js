import { combineReducers } from "redux";
import redditReducer from "./redditSlice";
import commentsSliceReducer from './commentsSlice'

const reducers = combineReducers({
    allReddits: redditReducer,
    comments: commentsSliceReducer
})

export default reducers;