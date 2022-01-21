import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import './Subreddit.css';
import { fetchSubreddits, selectError, selectIsLoading, selectSubreddits, selectSubreddit } from "../redditComponent/redditSlice";


export const Subreddits = () => {
    const subreddits = useSelector(selectSubreddits);
    let isLoading = useSelector(selectIsLoading);
    let error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchSubreddits());
    }, [dispatch]);

    if(isLoading) {
        return (
            <h2>Subreddits loading...</h2>
        )
    }

    if(error) {
        return (
            <h2>Error loading subreddits.Try again!</h2>
        )
    }
    
    if(subreddits && !isLoading && !error)
    return (
        <section className="subreddits_container">
            <ul className='list'>
                {subreddits.map(subreddit => {
                    return (
                        <li key={subreddit.id}>
                            <button
                             className="subreddit_button"
                             onClick={() => {dispatch(selectSubreddit(subreddit.url))}}>
                            <span><img src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`} alt={''}/></span>
                            {subreddit.display_name}
                            </button>
                        </li>
                                        
                )})}
            </ul>
        </section>
    )
}

export default Subreddits;
