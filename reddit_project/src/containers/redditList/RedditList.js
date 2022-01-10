import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { changeRedditId } from "../individualReddit/individualRedditSlice";
import { RedditComponent } from '../redditComponent/RedditComponent';
import {  setReddits } from "../redditComponent/redditSlice";
import { SubredditMenu } from "../subredditMenu/subredditMenu";
import './RedditList.css';

const RedditList = () => {
    const reddits = useSelector((state) => state);
    const searchInput = useSelector(state => state.search);
    const dispatch = useDispatch();
      
    console.log(reddits);
    useEffect(() => {
        const fetchReddits = async () => {
            const response = await fetch('https://www.reddit.com/r/all.json');
            const json = await response.json();
            dispatch(setReddits(json.data.children.map((reddit) => reddit.data)));
        }  
        fetchReddits();
    }, [dispatch]);
    
   

    return (
        <div>   
            <SubredditMenu/>         
            <RedditComponent/>
        </div>
    );
};

export default RedditList;