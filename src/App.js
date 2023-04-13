import './App.css';
import Hero from './components/Hero';
import NavbarApp from './components/NavbarApp';
import React from 'react';

function App() {
          return (
            <div className='bg-[#000300]'>
                <NavbarApp />
                <Hero />
            </div>
          );
}

export default App;
