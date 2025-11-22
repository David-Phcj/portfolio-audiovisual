
import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import SectionTitle from './SectionTitle';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    if (project.videoUrl) {
      setIsVideoOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div
        className={`group relative overflow-hidden rounded-lg shadow-lg bg-slate-800 border border-slate-700/50 ${
          project.videoUrl ? 'cursor-pointer' : ''
        } transition-all duration-300 hover:border-cyan-500/50`}
        onClick={project.videoUrl ? openVideo : undefined}
      >
        <div className="relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          {project.videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-cyan-500/90 rounded-full p-2.5 sm:p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-6 text-white transition-all duration-500 w-full">
          <h3 className="text-base sm:text-lg md:text-xl font-bold line-clamp-2">{project.title}</h3>
          <p className="text-xs sm:text-sm text-cyan-300 mb-1 sm:mb-2">{project.category}</p>
          <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <p className="text-slate-300 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tools.map(tool => (
                <span key={tool} className="text-xs bg-slate-700 text-cyan-300 px-2 py-1 rounded-full">{tool}</span>
              ))}
            </div>
            {project.videoUrl && (
              <p className="text-xs text-cyan-400 mt-2 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Ver proyecto completo
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Modal de Video */}
      {isVideoOpen && project.videoUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto"
          onClick={closeVideo}
        >
          <div className="min-h-full flex items-start sm:items-center justify-center py-4 sm:py-8 px-2 sm:px-4">
            <div
              className="relative w-full max-w-6xl bg-slate-900 rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideo}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-slate-800 hover:bg-slate-700 text-white rounded-full p-2 transition-colors duration-200 shadow-lg"
                aria-label="Cerrar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="p-4 sm:p-5 md:p-6">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 pr-10 sm:pr-0 break-words">{project.title}</h2>
                <p className="text-xs sm:text-sm md:text-base text-cyan-300 mb-3 sm:mb-4">{project.category}</p>
                <div className="relative w-full mb-4 aspect-video max-h-[60vh] sm:max-h-none">
                  <video
                    src={project.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full rounded-lg object-contain"
                  >
                    Tu navegador no soporta la reproducción de video.
                  </video>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4 break-words">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-xs bg-slate-700 text-cyan-300 px-2 sm:px-3 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container mx-auto">
      <SectionTitle title="Proyectos Destacados" subtitle="Donde las Ideas Cobran Vida" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
