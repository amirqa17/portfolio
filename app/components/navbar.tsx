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
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mb-8">
  
  <nav className="bg-gray-100 text-indigo-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
      <Link href="/" passHref className="inline-flex items-center gap-2.5 text-xl font-bold text-black md:text-3xl" aria-label="logo">
            <TbAlignBoxRightBottomFilled className="text-2xl lg:text-4xl" />
            / Amir I.
        </Link>

        <div className="md:flex space-x-4 hidden mx-auto">
          <Link href="/" passHref className="text-base font-semibold text-indigo-500 lg:text-lg mx-24">Home
          </Link>
          <Link href="/about" passHref className="text-base font-semibold text-indigo-500 lg:text-lg">About Me / Contact Me
          </Link>
       
        </div>
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
          className="md:hidden"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="space-y-4">
            <li>
              <Link href="/" passHref className="block text-base font-semibold text-indigo-500 lg:text-lg mt-4">Home
              </Link>
            </li>
            <li>
              <Link href="/about" passHref className="block text-base font-semibold text-indigo-500 lg:text-lg mt-4">About Me / Contact Me
              </Link>
            </li>
        
        
          </ul>
        </div>
      )}
    </nav>

   
    </div>
  );
};

export default Navbar;
