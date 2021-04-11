import React from 'react';

const HamburgerMenu = ({isMenuOpened, setIsMenuOpened}) => {
  return (
    <div
      className="bg-menu bg-cover bg-center bg-no-repeat w-12 h-12"
      onClick={() => setIsMenuOpened(!isMenuOpened)}
    />
  )
}

export default HamburgerMenu;
