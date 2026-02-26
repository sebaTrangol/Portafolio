import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-primary-900 rounded-xl overflow-hidden border border-primary-500 hover:border-secondary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 group">
      <div className="h-48 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-light-50 mb-2">{project.title}</h3>
        <p className="text-light-100 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className="bg-primary-950 text-primary-500 text-xs px-3 py-1 rounded-full border border-primary-500">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary-500 text-primary-950 px-4 py-2 rounded-lg font-semibold hover:bg-primary-400 transition-all flex items-center justify-center gap-2 text-sm">
              Ver Proyecto <ExternalLink size={16} />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-primary-500 text-primary-500 px-4 py-2 rounded-lg font-semibold hover:bg-primary-500 hover:text-primary-950 transition-all flex items-center justify-center gap-2 text-sm">
              GitHub <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
