import React, { useState } from "react";
import { useRouter } from "next/router";
import { TbAlignBoxRightBottomFilled } from "react-icons/tb";
import Link from "next/link";
import {
  BsLinkedin,
  BsTelegram,
  BsWhatsapp,
  BsLine,
  BsGithub,
} from "react-icons/bs";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const isLinkActive = (href: string) => router.pathname === href;
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    
      <nav className="bg-gray-100 text-black p-4 px-4 md:px-8 mb-8">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <Link
            href="/"
            passHref
            className="inline-flex items-center gap-2.5 text-xl font-bold text-black md:text-3xl"
            aria-label="logo"
          >
            <TbAlignBoxRightBottomFilled className="text-4xl" />/
            Amir Ibraimov
          </Link>

         <button
            className="md:hidden pl-2" // Adjusted padding for better positioning
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

          <div
            className= "hidden md:flex space-x-12 "
          
          >
            <Link
              href="/"
              passHref
              className={`text-base font-semibold lg:text-lg hover:bg-gray-200 hover:text-black transition duration-300 px-2 py-1 rounded ${
                isLinkActive("/") ? "bg-gray-300 underline text-black" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              passHref
              className={`text-base font-semibold lg:text-lg hover:bg-gray-200 hover:text-black transition duration-300 px-2 py-1 rounded ${
                isLinkActive("/about") ? "bg-gray-300 underline text-black" : ""
              }`}
            >
              About Me
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <a
              href="https://www.linkedin.com/in/amiribraimov/"
              className="text-blue-800 hover:text-blue-900 transition-transform transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={34} />
            </a>
            <a
              href="https://t.me/Amiracle17"
              className="text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTelegram size={34} />
            </a>
            <a
              href="https://wa.me/+8107031371220"
              className="text-green-600 hover:text-green-700 transition-transform transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp size={34} />
            </a>
            <a
              href="https://github.com/amirqa17"
              className="text-gray-700 hover:text-black transition-transform transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={34} />
            </a>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  passHref
                  className={`block text-base font-semibold text-black lg:text-lg ${
                    isLinkActive("/") ? "text-gray-800" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  passHref
                  className={`block text-base font-semibold text-black lg:text-lg ${
                    isLinkActive("/about") ? "text-gray-800" : ""
                  }`}
                >
                  About Me 
                </Link>
              </li>
              <li>
                  <a
                    href="https://www.linkedin.com/in/amiribraimov/"
                    className="block text-base font-semibold text-blue-800 hover:text-blue-900 mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/Amiracle17"
                    className="block text-base font-semibold text-blue-500 hover:text-blue-600 mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+8107031371220"
                    className="block text-base font-semibold text-green-600 hover:text-green-700 mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/amirqa17"
                    className="block text-base font-semibold text-gray-700 hover:text-black mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>

              </ul>
            </div>
          )}
        </nav>
   
    );
  };

export default Navbar;
