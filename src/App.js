import React, {useState} from 'react';


import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import Cta from './components/Cta';
import DisplayShortenedUrl from './components/DisplayShortenedUrl';
import SearchBar from './components/SearchBar';

import useShrtcode from './hooks/useShrtcode';

const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState('false');
  const [shortenedUrl, setShortenedUrl] = useShrtcode('');
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [urlToBeShorten, setUrlToBeShorten] = useState('');

  return (
    <div className="flex flex-col items-center px-8">
      <Header isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      {!isMenuOpened && <MobileMenu />}
      <div className="sm:w-3/4 sm:flex sm:flex-row">
        {isMenuOpened && <Hero />}
        <Cta />
      </div>
      {showSearchBar ?
        <SearchBar
          onSubmit={setShortenedUrl}
          setShowSearchBar={setShowSearchBar}
          setUrlToBeShorten={setUrlToBeShorten}
        />
        :
        <DisplayShortenedUrl
          urlToBeShorten={urlToBeShorten}
          shortenedUrl={shortenedUrl}
          setShowSearchBar={setShowSearchBar}
        />
      }
    </div>
  );
}

export default App;
