import React from 'react';
import Link from 'next/link';
import Layout from '@/app/layout';
import { BsLinkedin, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { RiArchiveDrawerLine } from 'react-icons/ri';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const About = () => {
  return (
    <Layout>
      <div className="bg-white py-8 md:py-12 h-screen-max">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-gray-800 font-bold mb-8">
            <RiArchiveDrawerLine className="mr-2 text-black inline-block" />
            Brief Introduction
          </h2>
          <div className="flex flex-col space-y-8 md:space-y-12">
            <div>
              <p className="text-gray-700 text-lg md:text-xl font-light lg:mt-12">
                Hi, I am Amir, a passionate Front End Developer based in Japan. I specialize in creating visually stunning and user-friendly web experiences. With a strong foundation in front-end technologies and a knack for design, I am dedicated to crafting digital solutions that delight users.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Skills
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl font-light">
                <li>HTML, CSS, SCSS, Tailwind, Bootstrap, Responsive Design</li>
                <li>React / Next.js</li>
                <li>Relational Database (MySQL), noSQL Database (Firebase)</li>
                <li>Experience in API Integrations (Payment Gateway API, Post Service API)</li>
                <li>Experience in CMS Integration (Contentful)</li>
                <li>Performance Optimization, Form Validation, SEO Optimization</li>
                <li>Postman (API Request/Response Testing)</li>
                <li>I18n Internationalization</li>
                <li>Git Version Control</li>
                {/* Add more languages as needed */}
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Languages
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl font-light">
                <li>English (Full Proficiency)</li>
                <li>Japanese (JLPT N3)</li>
                <li>Russian / Kazakh (Native)</li>
                {/* Add more languages as needed */}
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Education
              </h3>
              <p className="text-gray-700 text-lg md:text-xl font-light">
                Bachelors Degree with Honors in Computer Science - Staffordshire University (2019)
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Current Status
              </h3>
              <p className="text-gray-700 text-lg md:text-xl font-light">
                Actively Seeking Opportunities in Japan.
                Located in Matsudo city, Chiba Prefecture, Japan.
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
              <div className="flex items-center mt-4">
                <a href="https://www.linkedin.com/in/amiribraimov/" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin size={34} className="text-indigo-600 hover:text-indigo-800" />
                </a>
                <a href="https://t.me/Amiracle17" className="ml-4" target="_blank" rel="noopener noreferrer">
                  <BsTelegram size={34} className="text-indigo-600 hover:text-indigo-800" />
                </a>
                <a href="https://wa.me/+77776341393" className="ml-4" target="_blank" rel="noopener noreferrer">
                  <BsWhatsapp size={34} className="text-indigo-600 hover:text-indigo-800" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
