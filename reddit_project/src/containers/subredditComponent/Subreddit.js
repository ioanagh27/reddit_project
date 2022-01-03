import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchSubreddits, selectSubreddits } from "../../store/subredditSlice";
import { setSelectedSubreddit, selectSelectedSubreddit } from "../../store/redditSlice";      

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return (
        <div className="subreddits_section">
            <h2>Subreddits</h2>
            <ul>
                {subreddits.map(subreddit =>
                        <li key={subreddit.id}
                        onClick={() => {
                            dispatch(setSelectedSubreddit(subreddit.url));
                        }}>
                            {subreddit.display_name}
                        </li>
                )}
            </ul>
        </div>
    )
}

export default Subreddits;

