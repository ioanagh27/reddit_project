import { combineReducers } from "redux";
import { redditReducer} from "./redditReducer";

const reducers = combineReducers({
    allReddits: redditReducer
})

export default reducers;