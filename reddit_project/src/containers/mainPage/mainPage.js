import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import Post from "../redditComponent/RedditComponent";
import { fetchComments, selectError, selectIsLoading, selectSearchTerm, setSearchTerm, selectSelectSubreddit, selectPostsIncludingSearchTerm, fetchPosts } from "../redditComponent/redditSlice";
import './mainPage.css';
import 'react-loading-skeleton/dist/skeleton.css';

export const MainPage = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPostsIncludingSearchTerm);
    const selectSubreddit = useSelector(selectSelectSubreddit);
    const searchTerm = useSelector(selectSearchTerm);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchPosts(selectSubreddit));
    }, [dispatch, selectSubreddit]); 



    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        }
        return getComments;
    }

    if (isLoading) {
        return (
          <Skeleton/>
        );
      }

     if (error) {
         return (
             <div>
                 <h2>Failed to load posts</h2>
                 <button onClick={fetchPosts(selectSubreddit)}>
                    Retry...
                 </button>
             </div>
         )
     }

     if (posts.length === 0 && searchTerm !== '') {
         return (
             <div className="error">
                <h2 className="alert">No posts found!</h2>
                <button 
                type='button'
                className="return"
                onClick={() => dispatch(setSearchTerm(''))}>
                    Go home
                </button>
             </div>
         )
     }

     return (
         <div>
             {posts.map((post, index) => (                 
                    <Post 
                        key={post.id}
                        post={post}
                        description={post.selftext}
                        onToggleComments={onToggleComments(index)}/>
                    )
                 )}
         </div> 
     )
}

export default MainPage;