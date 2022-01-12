import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSubreddit } from "../subredditComponent/subredditSlice";
import './SubredditMenu.css';

export const SubredditMenu = () => {
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const subreddits = useSelector(state => state.subreddits.subreddits);
    const dispatch = useDispatch();

    const subredditSelection = (e) => {
        e.preventDefault();
        dispatch(changeSubreddit(e.target.value));
    }

    const menu = (subreddits) => {
        return (
            <select 
                className="menu"
                value={activeSub}
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
}