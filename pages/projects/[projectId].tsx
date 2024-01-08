import React from "react";
import { useRouter } from "next/router";
import projectsData from "./projects.json";
import Layout from "@/app/layout";
import { BiPlanet } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import Metadata from "@/app/MetaData";
const ProjectPage = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const tagColors = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-green-500",
    "bg-yellow-500",
    // Add more colors as needed
  ];

  const project = projectsData.find(
    (proj) => proj.id === parseInt(projectId as string)
  );

  if (!project) {
    return (
      <Layout>
      <div className="mb-4 flex items-center justify-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
        Project not found. <Link href="/">Return to homepage</Link>
      </div></Layout>
    );
  }

  return (
    <Layout>
        <Metadata
    title={project.title}
    description={project.description} imageUrl={project.imageUrl}
  />
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 mx-auto max-w-screen-2xl px-4 md:px-8">
      <section className="mb-8">
          <h2 className="mb-4 flex items-center justify-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12 mx-auto">
            {project.title}
          </h2>
        </section>

        
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-100 sm:flex-row h-full lg:w-9/12 mx-auto">
            <aside className="order-first h-48 w-full bg-gray-100 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img
                src={project.imageUrl}
                loading="lazy"
                alt={`Photo of ${project.title}`}
                className="h-full w-full object-contain object-center"
              />
            </aside>
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-6/6">
              <p
                className="mb-8 max-w-md text-gray-600 font-normal text-justify"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {project.description}
              </p>

              <div className="mt-auto flex items-center">
                {project.hasgithub && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto md:w-6/12 mx-auto inline-flex items-center justify-center rounded-lg bg-gray-700 px-4 py-2 text-center text-sm md:text-base font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-800 focus-visible:ring active:bg-gray-100"
                  >
                    <BsGithub className="mr-2" />
                    View on Github
                  </Link>
                )}
              </div>

              <div className="mt-auto flex items-center">
                {project.online && (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto md:w-6/12 mx-auto inline-flex items-center justify-center rounded-lg bg-gray-700 px-4 py-2 text-center text-sm md:text-base font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-800 focus-visible:ring active:bg-gray-100"
                  >
                    <BiPlanet className="mr-2" />
                    View Online
                  </Link>
                )}
              </div>

              <div className="mt-4 flex flex-wrap mt-12">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className={`text-white px-2 py-1 rounded-lg text-sm font-semibold mr-2 mb-2 ${
                      tagColors[index % tagColors.length]
                    }`}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Display imageUrlDescription images */}
            </div>
          </div>
          <div className="pt-12">
            {/* Display imageUrlDescription images
            {project.imageUrlDescription?.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                loading="lazy"
                alt={`Photo of ${project.title}`}
                className="h-full w-full object-contain object-center"
              />
            ))} */}
          </div>
      
      </div>
    </Layout>
  );
};

export default ProjectPage;
