import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
            <p className='text-xs fond-bold p-2'>GROWING WITH COMPANIES DATA</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-1'>Grow with data.</h1>
            <div className='flex justify-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Data for every </p>
                <Typed className='text-gray-500 md:text-5xl sm:text-4xl text-xl font-bold pl-2' strings={['Sales', 'CTO', 'CEO', 'CFO', 'B2B']} typeSpeed={130} backSpeed={40} loop />
            </div>
           <p className='text-gray-500 md:text-2xl text-xl font-bold pt-2'>Monitor companies data to increase revenue for yours SALES, CFO, CEO, CTO & B2B.</p> 
           <button className='mt-2 mx-auto px-8 py-2 bg-white rounded-md text-black font-medium md:px-12 md:py-3'>Get Started</button> 
        </div>
    </div>
  );
}

export default Hero;