import { ExternalLink, Github, Construction } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

export default function ProjectCard({ project }) {
  const renderMedia = () => {
    if (project.comingSoon) {
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-primary-950 rounded-lg overflow-hidden p-6 gap-4">
          <Construction size={48} className="text-primary-500 animate-pulse" />
          <p className="text-light-50 text-lg md:text-xl font-semibold text-center">
            {project.comingSoonMessage || 'En construccion'}
          </p>
          <span className="text-primary-500 text-sm font-medium bg-primary-500/10 px-4 py-1.5 rounded-full border border-primary-500/30">
            Proximamente
          </span>
        </div>
      );
    }

    if (project.video) {
      return (
        <div className="relative w-full h-full flex items-center justify-center bg-primary-950 rounded-lg overflow-hidden p-4">
          <video
            src={project.video}
            controls
            playsInline
            className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg"
          />
        </div>
      );
    }

    return <ImageCarousel images={project.images} />;
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch shadow-lg shadow-primary-500/10 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300">
      {/* Media Section */}
      <div className="flex-shrink-0 w-full md:w-5/12 lg:w-[40%] h-72 md:h-[420px] lg:h-[480px] overflow-hidden rounded-lg md:rounded-none">
        {renderMedia()}
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-start p-5 md:p-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-light-50 mb-2">{project.title}</h3>
        <p className="text-light-100 text-sm md:text-base mb-5 leading-relaxed whitespace-pre-wrap">{project.description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-primary-950 text-primary-500 text-xs md:text-sm px-3 py-1 rounded-full border border-primary-500"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-3 mt-auto">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary-500 text-primary-950 px-4 py-3 rounded-lg font-semibold hover:bg-primary-400 transition-all flex items-center justify-center gap-2 text-sm"
            >
              Ver Proyecto <ExternalLink size={16} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-primary-500 text-primary-500 px-4 py-3 rounded-lg font-semibold hover:bg-primary-500 hover:text-primary-950 transition-all flex items-center justify-center gap-2 text-sm"
            >
              {project.githubLabel || 'GitHub'} <Github size={16} />
            </a>
          )}
          {project.github2 && (
            <a
              href={project.github2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-secondary-500 text-secondary-500 px-4 py-3 rounded-lg font-semibold hover:bg-secondary-500 hover:text-primary-950 transition-all flex items-center justify-center gap-2 text-sm"
            >
              {project.github2Label || 'GitHub 2'} <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
