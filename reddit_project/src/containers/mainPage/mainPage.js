import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../redditComponent/RedditComponent";
import { fetchComments, selectError, selectIsLoading, loadingPostsSuccess, selectSearchTerm, setSearchTerm, selectSelectSubreddit, selectPostsIncludingSearchTerm, fetchPosts } from "../redditComponent/redditSlice";

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
             <div>Is Loading</div>
         )
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
             <div>
                <h2>No posts found</h2>
                <button type='button' onClick={dispatch(setSearchTerm(''))}>
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
                        onToggleComments={onToggleComments(index)}/>
                    )
                 )}
         </div> 
     )
}

export default MainPage;