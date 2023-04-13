import React, {useState} from 'react';
import '../App.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavbarApp = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <>
    <div className='flex flex-row bg-black justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <div>
            <div className='w-full text-white flex flex-col'>
                <h1 className='text-3xl font-bold flex justify-start'>CompanyConnect</h1>        
                <p className='text-[0.6rem] flex justify-end'>POWER BY REACT.js</p>
            </div>
        </div>
        <div className='flex flex-row justify-end text-gray-400'>
            <ul className='hidden md:flex'>
                <li className='p-2'>Home</li>
                <li className='p-2'>Companies</li>
                <li className='p-2'>Employee</li>
                <li className='p-2'>About</li>
                <li className='p-2'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 text-gray-400 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <div className='w-full text-white flex flex-col mt-2.5 ml-6'>
                <h1 className='text-3xl font-bold flex justify-start'>CompanyConnect</h1>        
            </div>
            <ul className='uppercase'>
                <li className='p-2 border-b border-r-gray-600'>Home</li>
                <li className='p-2 border-b border-r-gray-600'>Companies</li>
                <li className='p-2 border-b border-r-gray-600'>Employee</li>
                <li className='p-2 border-b border-r-gray-600'>About</li>
                <li className='p-2 border-b border-r-gray-600'>Contact</li>
            </ul>
        </div>
    </div>
    </>
    );
}

export default NavbarApp