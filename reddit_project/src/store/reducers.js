import { combineReducers } from "redux";
import redditReducer from "../containers/redditComponent/redditSlice";
import commentsSliceReducer from '../../src/containers/comments/commentsSlice';
import subredditReducer from '../containers/subredditComponent/subredditSlice';
import searchBarReducer from '../containers/searchBar/searchBarSlice';
import individualRedditReducer from '../containers/individualReddit/individualRedditSlice';


const reducers = combineReducers({
    allReddits: redditReducer,
    comments: commentsSliceReducer,
    subreddits: subredditReducer,
    search: searchBarReducer,
    individualRedditId: individualRedditReducer
})

export default reducers;