import Layout from '@/app/layout';
import React from 'react';
import { BsLinkedin, BsTelegram, BsWhatsapp, BsLine } from 'react-icons/bs';

const About = () => {
  return (
    <Layout>
      <div className="text-center py-6 sm:py-8">
        <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
        <div className="flex flex-col items-center">
          <p className="text-gray-700 mb-4">Feel free to reach out to me for any inquiries or collaborations.</p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <a href="#" className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Email: Ibraimov.amir1996@gmail.com</a>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <a href="#" className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Phone: +81 070 3137 1220</a>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>

            </div>
            <div className="flex items-center">
   
              <a href="#" className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">+81 070 3137 1220</a>
            </div>
            <a href="https://www.linkedin.com" className="ml-4 text-gray-500 hover:text-black" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={34} />
          </a>
          <a href="https://www.linkedin.com" className="ml-4 text-gray-500 hover:text-black" target="_blank" rel="noopener noreferrer">
            <BsTelegram size={34} />
          </a>
          <a href="https://www.linkedin.com" className="ml-4 text-gray-500 hover:text-black" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp size={34} />
          </a>
          <a href="https://www.linkedin.com" className="ml-4 text-gray-500 hover:text-black" target="_blank" rel="noopener noreferrer">
            <BsLine size={34} />
          </a>
      
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
