import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-2xl font-semibold mb-2">Amir Ibraimov</p>
            <p className="text-gray-400">Front End Developer</p>
          </div>
          <div>
            <p className="mb-2 flex items-center">
              <FaEnvelope className="mr-2" />{' '}
              <a href="mailto:Ibraimov.amir1996@gmail.com" className="text-gray-400 hover:text-white">
                Ibraimov.amir1996@gmail.com
              </a>
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="mr-2" /> +81 070 3137 1220
            </p>
          </div>
        </div>
      
   
      </div>
    </footer>
  );
};

export default Footer;
