import { combineReducers } from "redux";
import searchBarSlice from "../../containers/searchBar/searchBarSlice";
import { redditReducer } from "./redditReducer";

const reducers = combineReducers({
    allReddits: redditReducer,
    search: searchBarSlice
})

export default reducers;