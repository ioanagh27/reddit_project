import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setSelectedSubreddit } from "../redditComponent/redditSlice";
import { searchReddit } from "./searchBarSlice";
import { useState } from "react";
import { changeSubreddit } from "../subredditComponent/subredditSlice";

export const SearchBar = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector(state => state.search);
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('r/memes');

    const getSubreddits = async () => {
        const response = await fetch(`https://www.reddit.com/search.json?q=${query}`);
        const data = await response.json();
        setSearch(data.data.children.map(({data}) => data));
    }

    const onTextChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('')
  }

    return (
       
        <input className="searchBar"
        id="Search"
        onSubmit={getSearch}
        value={searchValue}
        placeholder={"Search for..."}
        onChange={onTextChange}
        />
        
    )
}