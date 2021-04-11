import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
});