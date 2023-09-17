import React, { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { TbAlignBoxRightBottomFilled } from 'react-icons/tb';
import { BsGithub, BsLine, BsLinkedin, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header className="mb-4 flex items-center justify-between py-4 md:py-8">
        <Link href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
            <TbAlignBoxRightBottomFilled />
            / Amir I.
        
        </Link>

        <nav className={`gap-12 lg:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <Link href="/" className="text-lg font-semibold text-indigo-500">Home
          </Link>
          <Link href="/about" className="text-lg font-semibold text-indigo-500">About me / Contact
          </Link>
         
        </nav>
       
    
        <div className="flex items-center">
          <a href="#" className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">
            <span className="flex items-center text-black">
              <FaLocationArrow className="mr-1" />
              松戸市、千葉県、日本
            </span>
            +81 070 3137 1220
          </a>
         
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          onClick={handleMobileMenuToggle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          Menu
        </button>
      </header>
    </div>
  );
};

export default Navbar;