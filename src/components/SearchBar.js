import React, {useState, useEffect, useRef} from 'react';
import { gsap } from "gsap";

const SearchBar = ({onSubmit, setShowSearchBar, setUrlToBeShorten}) => {
  const [urlToShorten, setUrlToShorten] = useState('');
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);

  const seachBar = useRef();

  useEffect(() => {
    gsap.from([seachBar.current], {
    duration: 2,
    opacity: 0,
    })
  }, [])

  const onFormSubmit = event => {
    event.preventDefault();
    if (urlToShorten.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/)) {
      onSubmit(urlToShorten);
      setShowSearchBar(false);
      setUrlToBeShorten(urlToShorten);
    }
    else setIsInvalidUrl(true);
  }

  return (
    <div
      ref={seachBar}
      className="flex flex-col w-full rounded-md items-center bg-shorten-mobile bg-cover bg-no-repeat bg-center px-4 py-6 mx-2 mb-8 sm:w-3/4 sm:items-baseline"
    >
      <form
        className="sm:flex sm:flex-row sm:justify-around sm:w-full"
        onSubmit={onFormSubmit}
      >
        <div className="flex flex-col w-full sm:mb-0 sm:mr-8">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className={`rounded-md w-full p-3 ${isInvalidUrl ? "border-red-500 border-4 mb-1" : "border-none mb-4"} sm:mb-0`}
            onChange={e => setUrlToShorten(e.target.value)}
            value={urlToShorten}
          />
          {isInvalidUrl && <span className="text-red-500 text-sm mb-4 sm:block sm:order-last sm:w-full sm:mb-0">Enter a valid URL</span>}
        </div>
        <button
          type="submit"
          className={`bg-cyan rounded-md py-3 text-white font-bold w-full ${isInvalidUrl ? "mt-4" : "mt-0"} sm:max-w-max sm:px-8 sm:mt-0`}
        >
          Shorten It!
        </button>
      </form>
    </div>
  )
}

export default SearchBar;
