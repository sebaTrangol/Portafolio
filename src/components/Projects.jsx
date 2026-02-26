import ProjectCard from './ProjectCard';
import ProjectsCarousel from './ProjectsCarousel';

export default function Projects() {
  const projects = [
    {
      title: 'Banking Blue Cat',
      description: `App móvil bancaria fullstack para testing QA. Frontend en React Native con Expo y backend REST en Node.js con Express y SQLite, ambos en TypeScript.
Incluye autenticación JWT con sesiones persistidas, consulta de cuentas con saldos, historial de movimientos y transferencias.
El backend incorpora un sistema de QA Flags que permite simular latencia, errores forzados, modo offline y expiración de sesión, facilitando pruebas de escenarios reales sin modificar código.`,
      video: '/banking-demo-15s.mp4',
      tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'JWT'],
      github: 'https://github.com/sebaTrangol/banking-qa-platform-backend',
      githubLabel: 'Github Backend',
      github2: 'https://github.com/sebaTrangol/banking-qa-platform-mobile',
      github2Label: 'Github Mobile',
    },
    {
      title: 'Banking QA Platform - Automation',
      description: 'Framework de automatizacion QA multicapa: testing de API con RestAssured, E2E mobile con Appium y Cucumber BDD, y pruebas de carga con Locust. Implementado bajo el patron Page Object Model.',
      video: '/qa-automation-demo.mp4',
      tech: ['Selenium', 'Cucumber', 'Appium', 'RestAssured', 'TestNG', 'Locust', 'Java', 'Python'],
      github: 'https://github.com/sebaTrangol/banking-qa-platform-automation',
      githubLabel: 'Github Automation',
    },
    {
      title: 'Mis Notas App',
      description: 'App movil para gestionar notas personales con fecha y hora. Desarrollada con React Native y Expo, con sincronizacion en tiempo real mediante Firebase.',
      comingSoon: true,
      comingSoonMessage: 'Sprint 2 en construccion con nuevas funcionalidades',
      tech: ['React Native', 'Expo', 'Firebase', 'JavaScript'],
      github: 'https://github.com/sebaTrangol/app-notas',
      githubLabel: 'GitHub',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-primary-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-light-50 mb-4">Mis Proyectos</h2>
          <p className="text-light-100 text-lg max-w-2xl">
            Una seleccion de mis mejores trabajos en desarrollo, testing y QA. Cada proyecto representa mi compromiso con la calidad, la innovacion y la pasion por el desarrollo de software.
          </p>
        </div>
        <ProjectsCarousel>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectsCarousel>
      </div>
    </section>
  );
}
