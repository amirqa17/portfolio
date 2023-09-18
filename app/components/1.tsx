import React, { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { TbAlignBoxRightBottomFilled } from 'react-icons/tb';
import Link from 'next/link'; // Import Link from Next.js

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header className="mb-4 flex items-center justify-between py-4 md:py-8">
        
        <Link href="/" passHref className="inline-flex items-center gap-2.5 text-xl font-bold text-black md:text-3xl" aria-label="logo">
            <TbAlignBoxRightBottomFilled className="text-2xl lg:text-4xl" />
            / Amir I.
        </Link>
        
        <nav className={`gap-8 lg:flex ${isMobileMenuOpen ? 'flex-col' : 'hidden'} lg:inline `}>
  <div>
    <Link href="/" passHref className="text-base font-semibold text-indigo-500 lg:text-lg">Home
    </Link>
  </div>
  <div>
    <Link href="/about" passHref className="text-base font-semibold text-indigo-500 lg:text-lg">About me
    </Link>
  </div>
</nav>


       
        <div className="flex items-center">
          <a href="#" className="hidden rounded-lg bg-gray-200 px-4 py-2 text-base font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 lg:text-lg lg:inline-block">
            <span className="flex items-center text-black">
              <FaLocationArrow className="mr-1" />
              松戸市、千葉県、日本
            </span>
            +81 070 3137 1220
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-base font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 lg:hidden"
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
