import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addSubreddit, changeSubreddit} from "./subredditSlice";
import { Link } from "react-router-dom";
import { getSubreddits } from "../../api/apis";
import './Subreddit.css';
import { SubredditMenu } from "../subredditMenu/SubredditMenu";


export const Subreddits = (props) => {
    const subreddits = useSelector(state => state.subreddits.subreddits);
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const dispatch = useDispatch();

    useEffect(() => getSubreddits().then(json => {
        json.forEach(item => dispatch(
            addSubreddit({
                name: item.display_name,
                url: item.url,
                id: item.id,
                icon: item.community_icon.split('?')[0]
            })
        ));
    }), [dispatch]);

    return (
        <section>
            <SubredditMenu/> 

            <ul className='list'>
                {subreddits.map(item => (
                <Link to='/' className="links">
                        <li
                        onClick={() => dispatch(changeSubreddit(item.url))}
                        className={activeSub === item.url}>
                            <span><img src={item.icon} alt={''}/></span>
                            {item.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    )
}

export default Subreddits;
