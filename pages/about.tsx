import React from 'react';
import Link from 'next/link';
import Layout from '@/app/layout';
import { BsLinkedin, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { RiArchiveDrawerLine } from 'react-icons/ri';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { BsFillPersonVcardFill } from "react-icons/bs";
const About = () => {
  return (
    <Layout>
      <div className="bg-white py-8 md:py-12 h-screen-max">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 flex items-center justify-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12 font-family-myfont">
            <BsFillPersonVcardFill className="mr-2" />
        Brief introduction
          </h2>
          <div className="flex flex-col space-y-8 md:space-y-12">
            <div>
              <p className="mb-4 text-center text-lg text-black sm:text-xl md:mb-8">
              As a passionate and aspiring Front-End Developer with 3+ years of experience, I am dedicated to crafting visually appealing and user-friendly web experiences. I am eager to leverage my technical expertise and creativity to create exceptional online interfaces. Currently, I am exploring opportunities and considering positions in Japan to further develop my career.
              </p>
            </div>
         
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Skills
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl font-light">
                <li>HTML, CSS, SCSS, Tailwind CSS, JavaScript, React, Next.js, MySQL, Firestore</li>
                <li>Experience in API Integrations (Payment Gateway API, Postal Service API)</li>
                <li>Performance Optimization, Form Validation, SEO Optimization,  Responsive Design</li>
                <li>i18n Internationalization</li>
                <li>Git</li>
                {/* Add more languages as needed */}
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Languages
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl font-light">
                <li>English (Fluent)</li>
                <li>Japanese (JLPT N3). Aiming for N2 in July 2024.</li>
                <li>Russian (Native)</li>
                {/* Add more languages as needed */}
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Education
              </h3>
              <p className="text-gray-700 text-lg md:text-xl font-light">
              Staffordshire University /  BSc (Hons) Software Engineering
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Contact Information
              </h3>
              <p className="text-gray-700 text-lg md:text-xl font-light">
                Email: <a href="mailto:Ibraimov.amir1996@gmail.com" className="text-black">Ibraimov.amir1996@gmail.com</a>
              </p>
              <p className="text-gray-700 text-lg md:text-xl font-light">
                Phone: <span className="text-black">+81 070 3137 1220</span>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
