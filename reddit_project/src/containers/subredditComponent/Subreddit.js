import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addSubreddit, changeSubreddit} from "../../store/subredditSlice";
import { Link } from "react-router-dom";
import { getSubreddits } from "../../api/apis";
import './Subreddit.css';


export const Subreddits = (props) => {
    const subreddits = useSelector(state => state.subreddits.subreddits);
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
            <ul className='list'>
                {subreddits.map(item => (
                    <Link to='/' key={item.id} className="links">
                        <li
                        onClick={() => dispatch(changeSubreddit(item.url))}>
                            <img src={item.icon} alt={''}/>
                            {item.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    )
}

export default Subreddits;
