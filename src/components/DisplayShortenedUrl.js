import React, {useState, useEffect, useRef} from 'react';
import { gsap } from "gsap";

const DisplayShortenedUrl = ({urlToBeShorten, shortenedUrl, setShowSearchBar}) => {
  const [isCopiedToClipboard, setIsCopiedToClipboard] = useState(false);
  const shortUrl = useRef();

  useEffect(() => {
    gsap.from([shortUrl.current], {
    duration: 2,
    opacity: 0,
    })
  }, [])

  const copyToClipboard = () => {
    if (!isCopiedToClipboard) {
      navigator.clipboard.writeText(shortenedUrl);
      setIsCopiedToClipboard(true);
      setTimeout(() => setIsCopiedToClipboard(false), 3000);
    }
  }

  return (
    <div
      ref={shortUrl}
      className="flex flex-col w-full rounded-md items-center bg-white shadow-md px-4 py-6 mx-2 mb-8 sm:w-3/4 sm:flex-row sm:items-center sm:justify-around"
    >
      <span className="break-all text-black border-b-2 border-cyan pb-4 mb-4 sm:border-none sm:mb-0 sm:pb-0">{urlToBeShorten}</span>
      <span className="break-all text-cyan mb-4 sm:mb-0">{shortenedUrl}</span>
      <button
        className="bg-cyan rounded-md py-3 text-white font-bold w-full mb-4 sm:w-auto sm:px-4 sm:mb-0"
        onClick={() => copyToClipboard()}
      >
        {isCopiedToClipboard ? 'Link copied to Clipboard!' : 'Copy Shortened Url'}
      </button>
      <button
        className="bg-cyan rounded-md py-3 text-white font-bold w-full sm:w-auto sm:px-4"
        onClick={() => setShowSearchBar(true)}
      >
        Shorten a new link!
      </button>
    </div>
  )
}

export default DisplayShortenedUrl;
