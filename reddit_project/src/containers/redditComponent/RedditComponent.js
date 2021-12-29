import React from "react";
import { useSelector } from "react-redux";
import './RedditComponent.css';
import moment from "moment";
import Comments from "../comments/Comments";


export const RedditComponent = () => {
    const reddits = useSelector((state) => state.allReddits.reddits);
    const renderReddits = reddits.map((reddit) => {
    const {
        title, 
        ups, 
        url, 
        author, 
        subreddit_name_prefixed,
        // eslint-disable-next-line no-unused-vars
        created_utc
    } = reddit;
    
    return (
        <div className="redditsContainer">
            <div className="card">
                <div className="likes">
                    {ups}
                </div>
                <div className="title">
                    {title} 
                </div>
                <div className="comments">

                </div>
                <div className="media"> 
                    <p><span>{subreddit_name_prefixed} </span>Posted by: {author} {moment.unix(reddit.created_utc).fromNow()}</p>
                    <img src={url} alt=''/> 
                </div>        
            </div>
        </div>
     )})
    
        return renderReddits;
};

export default RedditComponent;