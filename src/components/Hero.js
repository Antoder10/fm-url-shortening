import React, {useEffect, useRef} from 'react';
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    gsap.from([heroRef.current], {
    duration: 0.75,
    scale: 0.75,
    x: 300,
    ease: "bounce"
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="w-full h-56 bg-illustration-working bg-center bg-contain bg-no-repeat mb-8 sm:order-last sm:bg-right sm:bg-contain"
    />
  )
}

export default Hero
