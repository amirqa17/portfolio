import Layout from '@/app/layout';
import React from 'react';
import { RiArchiveDrawerLine } from 'react-icons/ri';

const About = () => {
  const commonFontStyle = { fontFamily: 'Arial, sans-serif', fontSize: '18px' };
  const titleFontStyle = { ...commonFontStyle, fontSize: '24px', fontWeight: 'bold' };

  return (
    <Layout>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 flex text-black items-center justify-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12 font-family-myfont">
            <RiArchiveDrawerLine className="mr-2" />
           about me
          </h2>
          <div className="flex flex-col space-y-6">
            {/* Self-Promotion Section */}
            <div style={commonFontStyle}>
              <h3 className="text-xl font-semibold mb-2" style={titleFontStyle}>
                Self-Promotion
              </h3>
              <p className="text-gray-700" style={commonFontStyle}>
                Hi, I am Amir, a passionate Front-End Developer currently based in Japan. I specialize in creating visually stunning and user-friendly web experiences. With a strong foundation in front-end technologies and a knack for design, I am dedicated to crafting digital solutions that delight users.
              </p>
            </div>

            {/* Languages Section */}
            <div style={commonFontStyle}>
              <h3 className="text-xl text-black font-semibold mb-2" style={titleFontStyle}>
                Languages
              </h3>
              <ul className="list-disc list-inside text-gray-700" style={commonFontStyle}>
                <li>English (Full Proficienty)</li>
                <li>Japanese (JLPT N3)</li>
                <li>Russian / Kazakh (Native)</li>
                {/* Add more languages as needed */}
              </ul>
            </div>

            {/* Skills Section */}
            <div style={commonFontStyle}>
              <h3 className="text-xl text-black font-semibold mb-2" style={titleFontStyle}>
                Something I am familiar with
              </h3>
              <ul className="list-disc list-inside text-gray-700" style={commonFontStyle}>
                <li>HTML/CSS/Tailwind</li>
                <li>React</li>
                {/* Add more skills as needed */}
              </ul>
            </div>

            {/* Education Section */}
            <div style={commonFontStyle}>
              <h3 className="text-xl text-black font-semibold mb-2" style={titleFontStyle}>
                Education
              </h3>
              <p className="text-gray-700" style={commonFontStyle}>
                Bachelors Degree with Honours in Computer Science - Staffordshire University (2019)
              </p>
            </div>

            {/* Work Experience Section */}
            <div style={commonFontStyle}>
              <h3 className="text-xl text-black font-semibold mb-2" style={titleFontStyle}>
                Work Experience
              </h3>
              <p className="text-gray-700" style={commonFontStyle}>
                Front-End Developer at XYZ Company - Tokyo, Japan (Year - Present)
              </p>
            </div>

            {/* Contact Information Section */}
            <div style={commonFontStyle}>
              <h3 className="text-xl text-black font-semibold mb-2" style={titleFontStyle}>
                Contact Information
              </h3>
              <p className="text-gray-700" style={commonFontStyle}>Email: Ibraimov.amir1996@gmail.com</p>
              <p className="text-gray-700" style={commonFontStyle}>Phone: +81 070 3137 1220</p>
              <p className="text-gray-700" style={commonFontStyle}>LinkedIn: your-linkedin-profile</p>
              <p className="text-gray-700" style={commonFontStyle}>GitHub: your-github-profile</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
