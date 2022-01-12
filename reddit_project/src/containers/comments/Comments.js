import React, { useEffect } from "react";
import { fetchComments } from "../redditComponent/redditSlice";
import './Comments.css';



const UserReplies = ({userName, coms}) => {

    return (
        <div className="replies">
            <p className="user">{userName}</p>
            <p className="coms">{coms}</p>
        </div>
    )
}

export default UserReplies;