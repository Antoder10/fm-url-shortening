import React from 'react';
import {isMobile, isDesktop} from 'react-device-detect';

import {ReactComponent as Logo} from '../images/logo.svg';
import HamburgerMenu from './HamburgerMenu';

const Header = ({isMenuOpened, setIsMenuOpened}) => {
  return (
    <header className="flex items-center w-full py-12 justify-between sm:w-3/4 sm:mb-12">
      <Logo />
      {isMobile && <HamburgerMenu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened}/>}
      {isDesktop &&
        <>
          <div className="mx-8 ">
            <span className="mr-8">Features</span>
            <span className="mr-8">Pricing</span>
            <span>Resources</span>
          </div>
          <div className="mx-8 ml-auto">
            <span className="mr-8">Login</span>
            <button className="bg-cyan rounded-full py-3 text-white font-bold w-40">Sign Up</button>
          </div>
        </>
      }
    </header>
  )
}

export default Header
