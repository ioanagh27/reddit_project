import React, { useEffect } from "react";
import './Comments.css';
import moment from "moment";
import ReactMarkdown from 'react-markdown';


export const Comment = ({comment}) => {
    if(!comment.body){
      return (<div key={comment.id}></div>);
    }
    return (
      <div key={comment.id} className='comment_container'>
        <hr />
        <br />
        <div className="user">
          <p className="text">{comment.author}</p>
          <p className="comment_time">
            {moment.unix(comment.created_utc).fromNow()}
          </p>
        </div>
        <ReactMarkdown children={comment.body} />
      </div>
    )
  }
  
  export default Comment;