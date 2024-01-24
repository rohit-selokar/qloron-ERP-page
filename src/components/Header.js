import React, { useState } from 'react';
import img1 from '../images/qloron-logo.png';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className='bg-[#000000] font-sans sticky top-0 z-50'>
        <nav className='flex items-center justify-between h-16 text-white '>
          <a href='/'>
            <img src={img1} alt='error' className='h-16'/>
          </a>

          <div className={`hidden lg:flex lg:items-center lg:justify-evenly lg:w-full max-lg:bg-[#000000] ${showMenu ? 'block' : 'hidden'}` }>
            
            <ul className=' flex lg:gap-4 xl:gap-8 items-center lg:text-xs xl:text-[13px]'>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>SERVICES & SUPPORT</li>
              <li>TECHNOLOGIES</li>
              <li>PORTFOLIO</li>
              <li>CONTACT US</li>
              <li>CAREERS</li>
              <li>HIRE DEVELOPERS</li>
            </ul>

            <div className='flex'>
              <button className='text-xs bg-[#12B1BE] p-2 rounded-2xl lg:mx-2 xl:mx-5 font-bold'>SORTBOXS</button>
              <button>
                <i className="fa-solid fa-user fa-lg md:mx-3"></i>
              </button>
            </div>
          </div>

          <div className='lg:hidden' onClick={toggleMenu}>
            <i className="fa-solid fa-bars fa-lg mr-4"></i>
          </div>
          
          <div className={`lg:hidden fixed top-16 right-0 left-0 bg-[#000000] p-4 ${showMenu ? 'block' : 'hidden'}`}>
            <ul className='flex flex-col gap-4 items-center text-xs'>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>SERVICES & SUPPORT</li>
              <li>TECHNOLOGIES</li>
              <li>PORTFOLIO</li>
              <li>CONTACT US</li>
              <li>CAREERS</li>
              <li>HIRE DEVELOPERS</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
