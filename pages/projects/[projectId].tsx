import React from 'react';
import { useRouter } from 'next/router';
import projectsData from './projects.json';
import Layout from '@/app/layout';
import { BiPlanet } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageUrlDescription: string[]; // Update the interface to include imageUrlDescription
  technologies: string[];
}

const ProjectPage = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const tagColors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-green-500',
    'bg-yellow-500',
    // Add more colors as needed
  ];

  const project = projectsData.find((proj) => proj.id === parseInt(projectId as string));

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <Layout>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <h2 className="mb-4 flex items-center justify-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12 font-family-myfont">
          {project.title}
        </h2>
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80 lg:h-full">
            <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img
                src={project.imageUrl}
                loading="lazy"
                alt={`Photo of ${project.title}`}
                className="h-full w-full object-contain object-center"
              />
            </div>
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">{project.title}</h2>
              <p className="mb-8 max-w-md text-gray-600 font-normal" style={{ fontFamily: 'Arial, sans-serif' }}>
                {project.description}
              </p>

              <div className="mt-auto flex items-center">
                <a
                  href={project.url}
                  className="w-3/12 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                  <BiPlanet className="mr-2" />
                  View Online
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base ml-4"
                >
                  <AiFillGithub className="mr-2" />
                  GitHub link
                </a>
              </div>

              <div className="mt-4 flex flex-wrap">
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
          {project.imageUrlDescription?.map((imageUrl, index) => (
  <img
    key={index}
    src={imageUrl}
    loading="lazy"
    alt={`Photo of ${project.title}`}
    className="h-full w-full object-contain object-center"
  />
))}


        </div>
        
      </div>
    </Layout>
  );
};

export default ProjectPage;
