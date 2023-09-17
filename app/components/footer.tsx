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

      <footer className="py-4">
        <hr className="border-gray-300 mb-4"></hr>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xl text-gray-600 font-semibold mb-2">Amir Ibraimov</p>
              <p className="text-black">Front-End Developer</p>
            </div>
            <div>
              <p className="text-black mb-2">
                <a href="mailto:Ibraimov.amir1996@gmail.com">Ibraimov.amir1996@gmail.com</a>
              </p>
              <p className="text-black">+81 070 3137 1220</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
