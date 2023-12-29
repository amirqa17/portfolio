import React, { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { TbAlignBoxRightBottomFilled } from 'react-icons/tb';
import Link from 'next/link'; // Import Link from Next.js
import { BsLinkedin, BsTelegram, BsWhatsapp, BsLine } from 'react-icons/bs';
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mb-8">
  
  <nav className="bg-white text-indigo-800 p-4">
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
        <div className="flex pl-48">
          <div className="hidden rounded-lg bg-gray-200 px-4 py-2 text-base font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 lg:text-lg lg:inline-block">
            <span className="flex items-center text-black">
              
              <a href="https://www.linkedin.com/in/amiribraimov/" className="ml-4 text-gray-500 hover:text-black" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={34} />
          </a>
          <a href="https://t.me/Amiracle17" className="ml-4 text-gray-500 hover:text-black" target="_blank" rel="noopener noreferrer">
            <BsTelegram size={34} />
          </a>
          <a href="https://wa.me/+8107031371220" className="ml-4 text-gray-500 hover:text-black" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp size={34} />
          </a>
            </span>
           
          </div>
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
