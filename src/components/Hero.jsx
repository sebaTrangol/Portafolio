import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-950 to-primary-900 pt-10 sm:pt-16 md:pt-20 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light-50 mb-4 sm:mb-6 leading-tight">
              José Trangol
              <span className="text-primary-500"> QA Sr.</span>
            </h1>
            <p className="text-base sm:text-lg text-light-100 mb-3 sm:mb-4 leading-relaxed">
              Especialista en testing y QA con experiencia en Banca.
              Apasionado por la tecnología, desarrollo fullstack y calidad del software.
            </p>
            <p className="text-sm sm:text-base text-light-100 mb-6 sm:mb-8 leading-relaxed">
              Combino rigor técnico con innovación para entregar soluciones de alta calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a
                href="#projects"
                className="bg-primary-500 text-primary-950 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary-400 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Ver Proyectos <ArrowRight size={18} className="hidden sm:inline" />
              </a>
              <a
                href="#contact"
                className="border-2 border-primary-500 text-primary-500 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary-500 hover:text-primary-950 transition-all text-sm sm:text-base"
              >
                Contáctame
              </a>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <a href="https://github.com/sebaTrangol" target="_blank" rel="noopener noreferrer" className="bg-primary-900 p-2.5 sm:p-3 rounded-lg hover:bg-primary-500 transition-all hover:text-primary-950">
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-primary-900 p-2.5 sm:p-3 rounded-lg hover:bg-primary-500 transition-all hover:text-primary-950">
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="mailto:jsebastiantrangol@gmail.com" className="bg-primary-900 p-2.5 sm:p-3 rounded-lg hover:bg-primary-500 transition-all hover:text-primary-950">
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl opacity-20 blur-3xl absolute"></div>
            <div className="relative bg-primary-900 rounded-2xl p-8 border border-primary-500 backdrop-blur">
              <div className="w-64 h-64 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <div className="text-6xl font-bold text-primary-950">JT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
