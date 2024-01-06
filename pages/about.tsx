import React from 'react';
import Layout from '@/app/layout';
import { BsFillPersonVcardFill } from 'react-icons/bs';

const Section = ({ title, content }: { title: string; content: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
    <hr />
    {content}
  </div>
);

const About = () => {
  return (
    <Layout>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 flex items-center justify-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12 font-family-myfont">
            <BsFillPersonVcardFill className="mr-2 inline-block text-2xl md:text-3xl lg:text-4xl" />
            Brief Introduction
          </h2>
          <div className="container mx-auto px-4 md:w-9/12">
            <p className="mb-6 text-left text-lg text-gray-700 md:text-xl">
              As a passionate Front-End Developer with over 3 years of experience, I am dedicated to crafting visually appealing and user-friendly web experiences. Eager to leverage technical expertise and creativity to create exceptional online interfaces. Currently exploring opportunities and considering positions in Japan to further develop my career.
            </p>

            <Section
              title="Skills & Competencies"
              content={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc list-outside text-gray-700 text-lg md:text-xl font-light">
                    <li>HTML, CSS, Sass/Less</li>
                    <li>Bootstrap, TailwindCSS, Material UI</li>
                    <li>Adobe Suite (Photoshop / Illustrator)</li>
                    <li>JavaScript, TypeScript, React, Next.js, MySQL, Firestore</li>
                  </ul>
                  <ul className="list-disc list-outside text-gray-700 text-lg md:text-xl font-light">
                    <li>Responsive Design, Cross Browser Compatibility</li>
                    <li>Performance Optimization, Form Validation</li>
                    <li>API Integrations</li>
                    <li>Git Version Control</li>
                  </ul>
                </div>
              }
            />

            <Section
              title="Languages"
              content={
                <ul className="list-disc list-outside text-gray-700 text-lg md:text-xl font-light">
                  <li>English (Fluent)</li>
                  <li>Japanese (JLPT N3). Aiming for N2 in July 2024.</li>
                  <li>Russian (Native)</li>
                </ul>
              }
            />

            <Section
              title="Education"
              content={<p className="text-gray-700 text-lg md:text-xl font-light">Staffordshire University / BSc (Hons) Software Engineering 2015-2019</p>}
            />

            <Section
              title="Contact Information and Links"
              content={
                <>
                  <p className="text-gray-700 text-lg md:text-xl font-light">
                    Email: <a href="mailto:Ibraimov.amir1996@gmail.com" className="text-blue-600">Ibraimov.amir1996@gmail.com</a>
                  </p>
                  <p className="text-gray-700 text-lg md:text-xl font-light">
                    Phone: <span className="text-black">+81 070 3137 1220</span>
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;