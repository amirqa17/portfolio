import Layout from '@/app/layout';
import Link from 'next/link';
import React from 'react';



      


const Home = () => {
  return (
    <Layout>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      

          <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            
            <div className="absolute inset-0 bg-indigo-600 mix-blend-multiply"></div>

            
            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
  <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">hi, my name is Amir</p>
  <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">I am a Web Devessloper</h1>

  <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
  <Link href="/projects" className="inline-block rounded-lg bg-indigo-500 ...">View Portfolio
</Link>
<Link href="/about" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">About me
 </Link> 
 </div>
</div>

          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
