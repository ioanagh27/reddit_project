import React from "react";
import './RedditComponent.css';
import moment from "moment";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faComment} from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import {Comment} from '../comments/Comments.js';
import Skeleton from "react-loading-skeleton";
import ReactMarkdown from 'react-markdown';


const Post = ({post, onToggleComments}) => {

    const renderComments = () => {
        if(post.loadingComments){
          return (
            <div>
              <Skeleton count={7} width={600} height={100}/>
            </div>
          )
        }
        
        if(post.error){
            return (
                <div>
                    <h2>Error loading comments</h2>
                </div>
            )
        }

        if(post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
                </div>
            )
        }
        return null;
    }
     

    const time = moment.unix(post.created_utc).fromNow();

    return (
            <div className="redditsContainer">
                <div className="flex">
                    <div className="likes">
                        <FontAwesomeIcon icon={faArrowAltCircleUp} color="#61dafb"/> 
                        <p>{post.ups}</p> 
                        <FontAwesomeIcon icon={faArrowAltCircleDown} color="rgb(116, 6, 106)"/>
                    </div>  
                    <div className="card">              
                        <div className="title">
                            {post.title}
                        </div>          
                        <div>
                        <ReactMarkdown children={post.selftext}/>
                        </div>     
                        <div className="media"> 
                            <img src={post.url} alt=''/>                      
                        </div>              
                        <hr/>
                        <div className="comments">
                            <p><span>{post.subreddit_name_prefixed}</span>Posted by: {post.author} <span className="time">{time}</span></p>
                            <button onClick={() => onToggleComments(post.permalink)}>
                                <FontAwesomeIcon icon={faComment}/>
                                Comments:
                                {post.num_comments}
                            </button>
                            
                        </div>  
                        {renderComments()} 
                    </div>                    
                </div>                
            </div>            
     )
};

export default Post;