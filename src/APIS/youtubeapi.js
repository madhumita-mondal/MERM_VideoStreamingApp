import axios from 'axios';
const KEY = "AIzaSyDhqDr3XsR6N7Eabeah9Rc61kaIG_HZZFE";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY,
    },
});