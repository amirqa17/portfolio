import React, { useState } from 'react';
import { useRouter } from 'next/router';
import projectsData from './projects.json';
import { RiArchiveDrawerLine } from 'react-icons/ri';

const Projects = () => {
  const router = useRouter();
  const [visibleProjects, setVisibleProjects] = useState(6); // Initial number of visible projects
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
  const handleShowMoreClick = () => {
    // Increase the number of visible projects by 4 on each click
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
  };
  return (
    <>
      <h2 className="mb-4 flex items-center justify-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
        <RiArchiveDrawerLine className="mr-2" />
        Some of my projects
      </h2>
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-8 md:grid-cols-2 md:gap-6 xl:gap-8 ">
        {projectsData.slice(0, visibleProjects).map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project.id)}
            tagColors={tagColors}
          />
        ))}
      </div>

      {visibleProjects < projectsData.length && (
       <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
       <button
          onClick={handleShowMoreClick}
          className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"  role="button"
        >
          Show more projects
        </button></div>
      )}
    </>

  
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

  const cardClassName = `group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-80 `;

  return (
    <button
    className={`group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-80`}
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
        <div className="absolute inset-0 flex flex-col justify-end p-4" style={{ background: 'linear-gradient(to top, gray, transparent)', backdropFilter: 'blur(3px)' }}>
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white ">
  {project.title}
</h3>

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
  </button>
);
};

export default Projects;
