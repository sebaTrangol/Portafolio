export default function About() {
  const skills = [
    { name: 'SQL', level: 95 },
    { name: 'Testing & QA', level: 95 },
    { name: 'Jira', level: 90 },
    { name: 'Automation', level: 85 },
    { name: 'React Native', level: 80 },
    { name: 'Postman', level: 85 },
    { name: 'Firebase', level: 80 },
    { name: 'Java', level: 75 },
  ];

  return (
    <section id="about" className="py-20 bg-primary-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-light-50 mb-12">Sobre mí</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-light-100 text-lg mb-6 leading-relaxed">
              Soy <span className="text-primary-500 font-semibold">Analista Programador Computacional</span> titulado en Duoc UC, apasionado por la tecnología, inteligencia artificial, desarrollo web y móvil.
            </p>
            <p className="text-light-100 text-lg mb-6 leading-relaxed">
              Actualmente trabajo como <span className="text-primary-500 font-semibold">QA Specialist en Banco Scotiabank</span>, donde liderizo la certificación de productos críticos y valido servicios web.
            </p>
            <p className="text-light-100 text-lg mb-8 leading-relaxed">
              Mi enfoque se basa en aprender constantemente, adaptarme a nuevos desafíos y aportar valor a través de soluciones tecnológicas eficientes y de alta calidad.
            </p>
            <h3 className="text-2xl font-semibold text-light-50 mb-6">Habilidades Técnicas</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-light-100 font-medium">{skill.name}</span>
                    <span className="text-primary-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-primary-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-light-50 mb-8">Experiencia</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-primary-500 pl-6">
                <h4 className="text-xl font-semibold text-light-50 mb-2">QA Specialist</h4>
                <p className="text-primary-500 font-medium mb-2">Banco Scotiabank</p>
                <p className="text-light-100 text-sm mb-3">2023 - Presente</p>
                <ul className="text-light-100 space-y-2 text-sm">
                  <li>✓ Liderazgo en certificación de productos financieros críticos</li>
                  <li>✓ Validación de servicios web y onboarding digital</li>
                  <li>✓ Manejo de sistemas satélites y procesos complejos</li>
                  <li>✓ Aseguramiento de calidad en entregas</li>
                </ul>
              </div>
              <div className="border-l-4 border-secondary-500 pl-6">
                <h4 className="text-xl font-semibold text-light-50 mb-2">Developer & QA</h4>
                <p className="text-secondary-500 font-medium mb-2">Freelance</p>
                <p className="text-light-100 text-sm mb-3">2022 - 2023</p>
                <ul className="text-light-100 space-y-2 text-sm">
                  <li>✓ Desarrollo de aplicaciones móviles con React Native</li>
                  <li>✓ Testing y automatización de procesos</li>
                  <li>✓ Implementación con Firebase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
