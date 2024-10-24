import config from "../config.json"

export const BUTTON_TITLES = [
    'All', 'Music', 'Gaming', 'Cooking', 'Soccer', 'News', 'Guitar',
    'Songs', 'Video', 'Live', 'Tech', 'Cricket']

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${config.api.youtubeApiKey}`

