import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchReddit } from "./searchBarSlice";


export const SearchBar = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector(state => state.search);
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    

    const onTextChange = (e) => {
        dispatch(searchReddit(e.target.value));
    }

    return (
       
        <input className="searchBar"
        id="Search"
        value={searchValue}
        placeholder={"Search for..."}
        onChange={onTextChange}
        />
        
    )
}