import { ActionTypes } from "../constants/action-types"

export const setReddits = (reddits) => {
    return {
        type: ActionTypes.SET_REDDITS,
        payload: reddits
    }
}

export const selectedReddit = (reddit) => {
    return {
        type: ActionTypes.SELECTED_REDDIT,
        payload: reddit
    }
}

export const setSearchTerm = (reddit) => {
    return {
        type: ActionTypes.SET_SEARCH_TERM,
        payload: reddit
    }
}