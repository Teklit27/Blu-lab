// Navbar.js

import { useState } from 'react';
import logo from '../assets/logo.png'
import Switcher from './Switcher';

export default function Navbar({activeSection,scrollToSection}) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav  className='bg-blue-300 '>
      <div className="max-w-7xl mx-auto px-4  ">
      
        <div className="flex items-center justify-between h-16">
          
          <button onClick={()=>scrollToSection('Home')} className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 mr-3" />
          </button>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <button onClick={()=>scrollToSection('Services')} className="font-semibold text-white  hover:text-white px-3 py-2 rounded-md">
              Services  
              </button>
              <button onClick={()=>scrollToSection('AboutUs')} className="font-semibold text-white  hover:text-white px-3 py-2 rounded-md">
                About
              </button> 
              <button onClick={()=>scrollToSection('Contact')} className="font-semibold text-white  hover:text-white px-3 py-2 rounded-md">
                Contact
              </button>
              <Switcher/>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              className="text-gray-300 hover:text-white focus:outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div className={`md:hidden ${ isOpen ? 'block' : 'hidden' }`}>
        <div className="px-2  bg-blue-500">
              <button onClick={()=>scrollToSection('Services')} className="font-medium block text-white  hover:text-white px-3 py-2 rounded-md">
                Services  
              </button>
              <button onClick={()=>scrollToSection('AboutUs')} className="font-medium block text-white  hover:text-white px-3 py-2 rounded-md">
                About
              </button> 
              <button onClick={()=>scrollToSection('Contact')} className="font-medium block text-white  hover:text-white px-3 py-2 rounded-md">
                Contact
              </button>
              <div className='mx-3 pb-2'>
               <Switcher/>
              </div>
        </div>
      </div>

    </nav>
  );
}