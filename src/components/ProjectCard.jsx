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

    if (project.images && project.images.length > 0) {
      return <ImageCarousel images={project.images} />;
    }

    // Fallback cuando no hay video ni imágenes
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary-900 to-primary-950 rounded-lg overflow-hidden p-6">
        <div className="text-center">
          <div className="text-5xl mb-4 opacity-50">📱</div>
          <p className="text-light-100 text-sm md:text-base font-medium">Ver en GitHub</p>
          <p className="text-light-100/70 text-xs md:text-sm mt-2">Código disponible en los repositorios</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-8 items-stretch shadow-lg shadow-primary-500/10 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300">
      {/* Media Section */}
      <div className="flex-shrink-0 w-full md:w-5/12 lg:w-[40%] h-56 sm:h-60 md:h-[420px] lg:h-[480px] overflow-hidden rounded-lg md:rounded-none">
        {renderMedia()}
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-start p-3 sm:p-4 md:p-6">
        <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-light-50 mb-2 sm:mb-3">{project.title}</h3>
        <p className="text-light-100 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed whitespace-pre-wrap">{project.description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-primary-950 text-primary-500 text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-primary-500"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-auto">
          <div className="flex gap-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary-500 text-primary-950 px-2.5 sm:px-4 py-1.5 sm:py-3 rounded-lg font-semibold hover:bg-primary-400 transition-all flex items-center justify-center gap-1 text-xs sm:text-sm"
              >
                <span>Ver</span> <ExternalLink size={12} className="sm:w-4 sm:h-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-primary-500 text-primary-500 px-2.5 sm:px-4 py-1.5 sm:py-3 rounded-lg font-semibold hover:bg-primary-500 hover:text-primary-950 transition-all flex items-center justify-center gap-1 text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">{project.githubLabel || 'GitHub'}</span>
                <span className="sm:hidden">Code</span> <Github size={12} className="sm:w-4 sm:h-4" />
              </a>
            )}
          </div>
          {project.github2 && (
            <a
              href={project.github2}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-secondary-500 text-secondary-500 px-2.5 sm:px-4 py-1.5 sm:py-3 rounded-lg font-semibold hover:bg-secondary-500 hover:text-primary-950 transition-all flex items-center justify-center gap-1 text-xs sm:text-sm"
            >
              <span className="hidden sm:inline">{project.github2Label || 'GitHub 2'}</span>
              <span className="sm:hidden">{project.github2Label ? project.github2Label.split(' ')[0] : 'Code'}</span> <Github size={12} className="sm:w-4 sm:h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
