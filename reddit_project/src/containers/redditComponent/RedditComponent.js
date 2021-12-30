import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './RedditComponent.css';
import moment from "moment";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faComment} from '@fortawesome/free-solid-svg-icons';

export const RedditComponent = () => {
    const dispatch = useDispatch();
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
                <div className="media"> 
                    <p><span>{subreddit_name_prefixed} </span>Posted by: {author} {moment.unix(reddit.created_utc).fromNow()}</p>
                    <img src={url} alt=''/> 
                </div>  
                <hr/>
                <div className="comments">
                    <button>
                        <FontAwesomeIcon icon={faComment} />
                    </button>
                </div>      
            </div>
        </div>
     )})
    
        return renderReddits;
};

export default RedditComponent;