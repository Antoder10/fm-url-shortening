import React from 'react';

const Cta = () => {
  return (
    <div className="flex flex-col items-center mb-8 sm:items-start">
      <h1 className="font-extrabold text-4xl text-center text-dark-violet mb-4 sm:text-left">More than just shorter links</h1>
      <p className="text-center text-cyan mb-6 sm:text-left">Build your brand's recognition and get detailed insights on how your link are performing.</p>
      <button className="bg-cyan rounded-full py-3 text-white font-bold w-40">Get Started</button>
    </div>
  )
}

export default Cta;
