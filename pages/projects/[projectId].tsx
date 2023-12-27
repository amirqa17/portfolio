import React from 'react';
import { useRouter } from 'next/router';
import projectsData from './projects.json';
import Layout from '@/app/layout';
import { BiArrowToLeft, BiPlanet } from 'react-icons/bi';
import { AiFillGithub, AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageUrlDescription: string[]; // Update the interface to include imageUrlDescription
  technologies: string[];
  online: boolean;
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
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex justify-between items-center mb-8">
        <Link href="/" className="">
        <span className="text-gray-300 hover:text-gray-400">


       
      <AiOutlineArrowLeft size={82} />
  </span>
 
</Link>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-black mx-auto text-center">
            {project.title}
          </h2>
        </div>

        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-100 sm:flex-row md:h-80 lg:h-full">
            <div className="order-first h-48 w-full bg-gray-100 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img
                src={project.imageUrl}
                loading="lazy"
                alt={`Photo of ${project.title}`}
                className="h-full w-full object-contain object-center"
              />
            </div>
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-6/6">
              <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">{project.title}</h2>
              <p className="mb-8 max-w-md text-gray-600 font-normal" style={{ fontFamily: 'Arial, sans-serif' }}>
                {project.description}
              </p>

              <div className="mt-auto flex items-center">
  {project.online && (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-auto md:w-3/12 mx-auto inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm md:text-base font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-400 focus-visible:ring active:bg-gray-100"
    >
      <BiPlanet className="mr-2" />
      View Online
    </a>
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
      </div>
    </Layout>
  );
};

export default ProjectPage;
