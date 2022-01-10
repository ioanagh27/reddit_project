import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RedditComponent from "../redditComponent/RedditComponent";

export const IndividualReddit = () => {
    const reddits = useSelector(state => state.allReddits.reddits);
    const activeRedditId = useSelector(state => state.individualRedditId);
    const selectedReddit = reddits.filter(reddit => reddit.name === activeRedditId);
        
    return (
        <section>
            <Link to='/'><button>Go Back</button></Link>
            {selectedReddit.map(reddit => (
                <section className="reddit" key={reddit.id}>
                    <div className="likes">
                        <FontAwesomeIcon icon={faArrowAltCircleUp} color="#61dafb"/> 
                        <p>{ups}</p> 
                        <FontAwesomeIcon icon={faArrowAltCircleDown} color="rgb(116, 6, 106)"/>
                    </div> 
                    <div className="text">
                        <h2>{title}</h2>
                        <p>{selftext}</p>
                        <img src={reddit.url} alt={''}/>
                    </div>
                    <div key={reddit.id}>
                        <p>{author}</p>
                        <p></p>
                    </div>
                </section>

            ))}
        </section>
    )
}