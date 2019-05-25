import axios from 'axios';

const KEY = 'AIzaSyC0cZRqOCYdygzRuNHH2895S4DxRM7efRM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 4,
    key: KEY
  }
});
