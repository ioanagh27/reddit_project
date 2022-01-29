/*import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubreddits } from "../../api/apis";
import { loadingSubredditsSuccess, selectSelectSubreddit } from "../redditComponent/redditSlice";
import { changeSubreddit } from "../subredditComponent/subredditSlice";
import './SubredditMenu.css';

export const SubredditMenu = () => {
    const subreddits = useSelector(state => state.redditPosts.subreddits);
    const dispatch = useDispatch();

    const subredditSelection = (e) => {
        e.preventDefault();
        selectSelectSubreddit(e.target.value);
    }

    const menu = (subreddits) => {
        return (
            <select 
                className="menu"
                value={''}
                onChange={subredditSelection}>
                    {subreddits.map(subreddit => (
                        <option value={subreddit.url}>{subreddit.name}</option>
                    ))}
                </select>
        )
    };

    return (
        <section>
            {menu(subreddits)}
        </section>
    )
}*/