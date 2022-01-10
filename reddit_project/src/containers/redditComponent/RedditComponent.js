import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './RedditComponent.css';
import moment from "moment";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faComment} from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import UserReplies from "../comments/Comments";


export const RedditComponent = () => {
    const reddits = useSelector((state) => state.allReddits.reddits);
    const [replies, setReplies] = useState([])
    const renderReddits = reddits.map((reddit) => {
    const {
        id,
        title, 
        ups,
        url, 
        media,
        author, 
        num_comments,
        coms,
        permalink,
        comments,
        subreddit_name_prefixed,
    } = reddit;


    const getComments = async () => {
        const response = await fetch(`https://www.reddit.com${permalink}.json`);
        const data = await response.json();
        setReplies(data[1].data.children.map(({data}) => data));
    }
    const handleClick = () => {
        getComments();
    }

    const time = moment.unix(reddit.created_utc).fromNow();

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
                        <img src={url} alt=''/>                           
                    </div>              
                    <hr/>
                    <div className="comments">
                        <p><span>{subreddit_name_prefixed}</span>Posted by: {author} <span className="time">{time}</span></p>
                        <h5><button onClick={handleClick}>
                            <FontAwesomeIcon icon={faComment}/>
                            Comments: {comments}
                            {num_comments}
                        </button></h5>
                        <div>
                            {replies.map(reply => (
                                <UserReplies 
                                coms = {reply.body}
                                key= {reply.id}
                                userName={reply.author}/>
                            ))}
                        </div>
                    </div>    
                </div>
            </div>
        </div>
     )})
    
        return renderReddits;
};

export default RedditComponent;