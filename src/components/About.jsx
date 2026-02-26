export default function About() {
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
              Actualmente trabajo como <span className="text-primary-500 font-semibold">Analista QA en Banco Scotiabank</span>, certificando proyectos e iniciativas de tecnología financiera, grantizando estándares de calidad.
            </p>
            <p className="text-light-100 text-lg mb-8 leading-relaxed">
              Mi enfoque se basa en aprender constantemente, adaptarme a nuevos desafíos y aportar valor a través de soluciones tecnológicas eficientes.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-light-50 mb-8">Experiencia</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-primary-500 pl-6">
                <h4 className="text-xl font-semibold text-light-50 mb-2">Analista QA</h4>
                <p className="text-primary-500 font-medium mb-2">Banco Scotiabank</p>
                <p className="text-light-100 text-sm mb-3">2023 - Presente</p>
                <ul className="text-light-100 space-y-2 text-sm">
                  <li>✓ Certificación de proyectos móviles, plataformas web, APIs y sistemas core bancarios</li>
                  <li>✓ Automatización de flujos repetitivos como creación de clientes, altas de tarjetas de crédito y otros procesos en ambientes QA</li>
                  <li>✓ Liderazgo en procesos de certificación de alto impacto y productos financieros críticos</li>
                </ul>
              </div>
              <div className="border-l-4 border-secondary-500 pl-6">
                <h4 className="text-xl font-semibold text-light-50 mb-2">Developer & QA</h4>
                <p className="text-secondary-500 font-medium mb-2">Freelance</p>
                <p className="text-light-100 text-sm mb-3">2022 - Presente</p>
                <ul className="text-light-100 space-y-2 text-sm">
                  <li>✓ Desarrollo de aplicaciones móviles con React Native y Expo</li>
                  <li>✓ Implementación de backend con Node.js, Firebase y Vercel</li>
                  <li>✓ Testing automatizado con Selenium, Cucumber y Appium</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
