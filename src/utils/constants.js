import config from "../config.json"

export const BUTTON_TITLES = [
    'All', 'Music', 'Gaming', 'Cooking', 'Soccer', 'News', 'Guitar',
    'Songs', 'Video', 'Live', 'Tech', 'Cricket']

const MAX_RESULTS = 50
export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${config.api.youtubeApiKey}&maxResults=${MAX_RESULTS}`
export const COMMENT_API = `https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key=${config.api.youtubeApiKey}`

export const YOUTUBE_SEARCH_API = "https://cors-anywhere.herokuapp.com/suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q="