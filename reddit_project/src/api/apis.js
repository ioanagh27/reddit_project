export const rootApis = 'https://www.reddit.com/';

export const getSubredditPosts= async(subreddit) => {
    const response = await fetch(`${rootApis}.${subreddit}.json`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
} 

export const getSubreddits = async() => {
    const response = await fetch(`${rootApis}/subreddits.json`);
    const json = await response.json();

    return json.data.children.map((subreddit) => subreddit.data);
}

export const getComments = async(permalink) => {
    const response = await fetch(`${rootApis}${permalink}.json`);
    const json = await response.json();

    return json[1].data.children.map((subreddit) => subreddit.data)
}