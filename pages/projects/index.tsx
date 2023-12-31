import React, { useState } from 'react';
import Layout from '@/app/layout';
import { useRouter } from 'next/router';
import projectsData from './projects.json';
import { RiArchiveDrawerLine } from 'react-icons/ri';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import Link from 'next/link';

const Projects = () => {
  const router = useRouter();
  const [sortedProjects, setSortedProjects] = useState(projectsData);
  const tagColors = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-green-500",
    "bg-yellow-500",
    // Add more colors as needed
  ];

  const handleProjectClick = (projectId: number) => {
    router.push(`/projects/${projectId}`);
  };

  const handleRandomProjectClick = () => {
    const randomProjectId = Math.floor(Math.random() * projectsData.length) + 1;
    router.push(`/projects/${randomProjectId}`);
  };
 
  const handleSortByTechnology = (technology: string) => {
    const sortedProjects = projectsData.filter((project) =>
      project.technologies.includes(technology)
    );
    setSortedProjects(sortedProjects);
  };

  return (
 
      <div className="bg-white py-6 sm:py-8 lg:py-12 lg:px-4">
        <div className="pacman-container">
          <div className="pacman"></div>
        </div>

        <div className="mx-auto max-w-screen-3xl px-4 md:px-8">
          <h2 className="mb-4 flex items-center justify-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12 font-family-myfont">
            <RiArchiveDrawerLine className="mr-2" />
           Some of my projects
          </h2>
          
          {/* Iterate over projectsData and render ProjectCard for each project */}
        
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-8 md:grid-cols-2 md:gap-6 xl:gap-8">
            {projectsData.map((project) => (




<ProjectCard
  key={project.id}
  project={project}
  onClick={() => handleProjectClick(project.id)} // Pass the project ID
  tagColors={tagColors}
/>





           
            ))}
          </div>
        </div>
      </div>
  
  );
};

interface Project {
  id: number;
  title: string;
  brief: string;
  imageUrl: string;
  status: string; // Use the "status" field instead of "recent" boolean
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  tagColors: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, tagColors }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const cardClassName = `group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80`;

  return (
    <a
    href="#"
    className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80`}
    onClick={onClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <img
      src={project.imageUrl}
      loading="lazy"
      alt={`Photo of ${project.title}`}
      className={`absolute mx-auto inset-0 h-full w-fit object-contain object-center transition duration-200 group-hover:blur-sm group-hover:scale-105 ${
        hovered ? 'blur-sm scale-105' : ''
      }`}
    />

    {project.status && (
      <div className="absolute top-2 right-2 bg-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded-md transform -translate-x-1/2 -translate-y-1/2">
        {project.status}
      </div>
    )}

    {hovered && (
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-gray-800 via-transparent to-transparent">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-white">{project.brief}</p>
        <div className="mt-2 flex flex-wrap">
          {project.technologies.map((technology, index) => (
            <span
              key={index}
              className={`${tagColors[index % tagColors.length]} text-white px-2 py-1 rounded-lg text-xs font-semibold mr-2 mb-2`}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    )}
  </a>
);
};

export default Projects;
