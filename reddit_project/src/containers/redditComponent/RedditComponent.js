import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './RedditComponent.css';
import moment from "moment";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faComment} from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";

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
            <div className="flex">
                <div className="likes">
                    <FontAwesomeIcon icon={faArrowAltCircleUp} color="#61dafb"/> 
                    <p>{ups}</p> 
                    <FontAwesomeIcon icon={faArrowAltCircleDown} color="rgb(116, 6, 106)"/>
                </div>  
                <div className="card">              
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
        </div>
     )})
    
        return renderReddits;
};

export default RedditComponent;