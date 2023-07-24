import React, { useEffect, useState } from 'react';

const AboutUs = () => {

  return (
    <section className='h-screen bg-gray-100' id='about'>
        <div className='relative h-1/2 bg-gray-800 justify-center items-center flex'>
        <span className="font-semibold text-3xl sm:text-5xl text-white uppercase animate-fade-down animate-ease-linear animate-fade-right animate-repeat">
            ABOUT US
          </span>
            <div className='absolute border h-64 sm:h-[300px] w-11/12 sm:w-[900px] md:w-[700px] -bottom-10 sm:-bottom-44 bg-white'>
            </div>
        </div>

    </section>
    
  );
};

export default AboutUs;
