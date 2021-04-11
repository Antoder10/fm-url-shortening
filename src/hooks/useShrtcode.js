import { useState } from 'react';

import Shrtcode from '../api/Shrtcode';
const KEY = 'dd6007367d96a2ca377e5ff7e552e232b153556d';


const useShrtcode = () => {
  const [shortenedUrl, setShortenedUrl] = useState([]);

  const getShortenedUrl = async (url) => {
    const response = await Shrtcode.post('shorten',
      {
        long_url: url
      },
      {
        headers: {
          'Authorization': `Bearer ${KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    setShortenedUrl(response.data.link);
  }

  return [shortenedUrl, getShortenedUrl];
}

export default useShrtcode;
