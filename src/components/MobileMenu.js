import React, {useEffect, useRef} from 'react';
import { gsap } from "gsap";

const MobileMenu = () => {
  const mobileMenuRef = useRef();

  useEffect(() => {
    gsap.from([mobileMenuRef.current], {
    duration: 0.75,
    scale: 0.75,
    x: -300,
    ease: "expo.out"
    })
  }, [])

  return (
    <div
      ref={mobileMenuRef}
      className="flex flex-col w-full items-center justify-between bg-dark-violet text-white text-l font-bold rounded-md px-4 py-12 mb-4 -mt-4"
    >
      <span className="mb-8">Features</span>
      <span className="mb-8">Prices</span>
      <span className="mb-8">Resources</span>
      <span className="mb-8">Login</span>
      <button className="bg-cyan rounded-full py-3 text-white font-bold w-40">Sign Up</button>
    </div>
  )
}

export default MobileMenu;
