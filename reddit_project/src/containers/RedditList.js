import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RedditComponent } from './redditComponent/RedditComponent';
import {  setReddits } from "../redux/actions/redditActions";

const RedditList = () => {
    const reddits = useSelector((state) => state);
    const dispatch = useDispatch();

      
    console.log(reddits);
    useEffect(() => {
        const fetchReddits = async () => {
            const response = await fetch('https://www.reddit.com/r/popular.json');
            const json = await response.json();
            dispatch(setReddits(json.data.children.map((reddit) => reddit.data)));
        }  
        fetchReddits();
    }, [dispatch]);
    
   

    return (
        <div>
            <RedditComponent />
        </div>
    );
};

export default RedditList;