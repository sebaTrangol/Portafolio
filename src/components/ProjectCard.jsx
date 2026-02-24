import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const isImageLeft = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 items-stretch shadow-lg shadow-primary-500/10 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300`}>
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-5/12 lg:w-[45%] h-64 md:h-80 lg:h-96 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center overflow-hidden rounded-lg md:rounded-none">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          style={project.imagePosition ? { objectPosition: project.imagePosition } : {}}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-start p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-light-50 mb-3">{project.title}</h3>
        <p className="text-light-100 text-sm md:text-base mb-6 leading-relaxed">{project.description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
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
