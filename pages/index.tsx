import Layout from "@/app/layout";
import Link from "next/link";
import React from "react";
import Projects from "./projects";
import { MdDevices } from "react-icons/md";
import Metadata from "@/app/MetaData";
const Home = () => {
  return (

    <Layout>
         <Metadata
    title={'Amir Ibraimov - Front-End Developer'}
    description={'A portfolio website for Amir Ibraimov, a front-end Developer'} imageUrl={""}
  />
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="mb-8">
            <h2 className="mb-4 flex items-center justify-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
              <MdDevices className="mr-2" />
              Front End Developer
            </h2>
            <article className="container mx-auto px-4 lg:w-9/12">
            <p className="mb-6 text-justify text-lg text-gray-700 md:text-xl">
            Hi there, I am Amir, a Front-End Developer with over 3 years of experience. I am
            committed to creating visually appealing and user-friendly web
            experiences. I believe in the power of collaboration and teamwork,
            and I am grateful for the opportunities to learn from my colleagues.
            I strive to be an approachable and easy-to-work-with team member,
            valuing open communication and the collective effort that comes with
            building great online interfaces. I am constantly learning new things and trying to stay updated with the latest technologies.
            Currently exploring
            opportunities in Japan as I continue to grow and develop in my
            career.
          </p>
            </article>
            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <Link
                href="/about"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                role="button"
              >
                Read more about me
              </Link>
            </div>
          </section>

          <section className="mb-8 lg:w-9/12 mx-auto">
            <Projects />
          </section>

      </div>
    </Layout>
  );
};

export default Home;
