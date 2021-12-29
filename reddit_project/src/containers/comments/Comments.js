import React from "react";

export const API_ROOT = 'https://www.reddit.com';

export const getPostComments = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();
  
    return json[1].data.children.map((subreddit) => subreddit.data);
  };

  const Comments = () => {
      return (
          <div>
              {getPostComments}
          </div>
      )
  }

  export default Comments;

