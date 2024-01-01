import Layout from '@/app/layout';
import Link from 'next/link';
import React from 'react';
import Projects from './projects';
import { RiArchiveDrawerLine } from 'react-icons/ri';
import { MdDevices } from "react-icons/md";

      


const Home = () => {
  return (
    <Layout>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      
        <h2 className="mb-4 flex items-center justify-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12 font-family-myfont">
            <MdDevices className="mr-2" />
            Front End Developer
          </h2>
          

      
                      
        

            
         
          <div className="container mx-auto px-4 md:w-8/12">
  <p className="mb-4 text-center text-lg text-black sm:text-xl md:mb-8">
    Hello there! I am Amir, a dedicated Front-End Developer with over 3 years of experience in the dynamic world of web development. 🚀

    My passion lies in creating visually stunning and user-friendly web experiences that leave a lasting impression. I thrive on turning ideas into innovative interfaces, blending technical prowess with a touch of creativity.

    Currently I am located in Japan and looking for new opportunities 👨‍💻✨
  </p>
</div>



  <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
 
<Link href="/about" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Read more about me
 </Link> 
 </div>


          <Projects /> 
        </div>
      </div>
    </Layout>
  );
};

export default Home;
