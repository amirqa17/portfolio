import Layout from '@/app/layout';
import Link from 'next/link';
import React from 'react';
import Projects from './projects';


      


const Home = () => {
  return (
    <Layout>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
       
        <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
  Front-End Developer | Actively Seeking Opportunities in Japan
</p>

          <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-12 shadow-lg md:py-12 xl:py-12">
            
            <div className="absolute inset-0 bg-indigo-600 mix-blend-multiply"></div>

            
            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
            <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl"></h1>
  <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Hi, I'm Amir, a Front End Developer currently based in Japan with a passion for crafting visually stunning and user-friendly web experiences</p>


  <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
  <Link href="/about" className="inline-block rounded-lg bg-green-100 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">View my CV
 </Link> 
<Link href="/about" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">About me
 </Link> 
 </div>
</div>

          </section> <Projects /> 
        </div>
      </div>
    </Layout>
  );
};

export default Home;
