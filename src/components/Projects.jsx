import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Banking QA Platform - Automation',
      description: 'Framework de automatización QA multicapa: testing de API con RestAssured, E2E mobile con Appium y Cucumber BDD, y pruebas de carga con Locust. Implementado bajo el patrón Page Object Model.',
      image: '/screenshots/banking-login.png',
      tech: ['Selenium', 'Cucumber', 'Appium', 'RestAssured', 'TestNG', 'Locust', 'Java', 'Python'],
      github: 'https://github.com/sebaTrangol/banking-qa-platform-automation',
      githubLabel: 'Automation',
    },
    {
      title: 'Banking QA Platform - App',
      description: 'App móvil bancaria fullstack con autenticación JWT, consulta de cuentas y transferencias. Frontend en React Native y backend REST en Node.js con SQLite. Sistema bajo prueba del framework de automatización.',
      image: '/screenshots/banking-home.png',
      tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'JWT'],
      github: 'https://github.com/sebaTrangol/banking-qa-platform-backend',
      githubLabel: 'Backend',
      github2: 'https://github.com/sebaTrangol/banking-qa-platform-mobile',
      github2Label: 'Mobile',
    },
    {
      title: 'Mis Notas App',
      description: 'App móvil para gestionar notas personales con fecha y hora. Desarrollada con React Native y Expo, con sincronización en tiempo real mediante Firebase.',
      image: '/screenshots/notas-app.png',
      tech: ['React Native', 'Expo', 'Firebase', 'JavaScript'],
      github: 'https://github.com/sebaTrangol/app-notas',
      githubLabel: 'GitHub',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-light-50 mb-4">Mis Proyectos</h2>
          <p className="text-light-100 text-lg max-w-2xl">
            Una selección de mis mejores trabajos en desarrollo, testing y QA. Cada proyecto representa mi compromiso con la calidad, la innovación y la pasión por el desarrollo de software.
          </p>
        </div>
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
