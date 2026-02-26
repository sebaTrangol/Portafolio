import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Mis Notas App',
      description: 'Aplicación móvil para crear, gestionar y almacenar notas personales con sincronización en tiempo real.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
      tech: ['React Native', 'Firebase', 'JavaScript', 'iOS', 'Android'],
      link: 'https://github.com/sebaTrangol/app-notas',
      github: 'https://github.com/sebaTrangol/app-notas',
    },
    {
      title: 'Automatización QA',
      description: 'Framework de testing automatizado para validación de sistemas financieros con Selenium y Java.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70a504f0?w=400&h=300&fit=crop',
      tech: ['Selenium', 'Java', 'JUnit', 'Automation', 'Testing'],
      github: '#',
    },
    {
      title: 'Web Testing Suite',
      description: 'Suite de testing para validación web incluyendo funcionales, regresión y seguridad.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      tech: ['Postman', 'SQL', 'API Testing', 'Jira'],
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-light-50 mb-4">Proyectos Destacados</h2>
          <p className="text-light-100 text-lg max-w-2xl">
            Una selección de mis mejores trabajos en desarrollo, testing y QA. Cada proyecto representa mi compromiso con la calidad y la innovación.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
