import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-primary-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-50 mb-3 sm:mb-4">Vamos a Trabajar Juntos</h2>
          <p className="text-light-100 text-sm sm:text-base md:text-lg">
            ¿Tienes un proyecto en mente?
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          <a href="mailto:jsebastiantrangol@gmail.com" className="bg-primary-950 border-2 border-primary-500 rounded-lg p-4 sm:p-6 hover:border-secondary-500 hover:bg-primary-900 transition-all text-center group">
            <Mail size={32} className="sm:w-10 sm:h-10 text-primary-500 mx-auto mb-3 sm:mb-4 group-hover:text-secondary-500 transition-colors" />
            <h3 className="text-base sm:text-xl font-semibold text-light-50 mb-1 sm:mb-2">Email</h3>
            <p className="text-light-100 break-all text-xs sm:text-sm">jsebastiantrangol@gmail.com</p>
          </a>
          <a href="https://github.com/sebaTrangol" target="_blank" rel="noopener noreferrer" className="bg-primary-950 border-2 border-primary-500 rounded-lg p-4 sm:p-6 hover:border-secondary-500 hover:bg-primary-900 transition-all text-center group">
            <Github size={32} className="sm:w-10 sm:h-10 text-primary-500 mx-auto mb-3 sm:mb-4 group-hover:text-secondary-500 transition-colors" />
            <h3 className="text-base sm:text-xl font-semibold text-light-50 mb-1 sm:mb-2">GitHub</h3>
            <p className="text-light-100 text-xs sm:text-sm">Ver mi código</p>
          </a>
          <a href="https://linkedin.com/in/jose-trangol" target="_blank" rel="noopener noreferrer" className="bg-primary-950 border-2 border-primary-500 rounded-lg p-4 sm:p-6 hover:border-secondary-500 hover:bg-primary-900 transition-all text-center group">
            <Linkedin size={32} className="sm:w-10 sm:h-10 text-primary-500 mx-auto mb-3 sm:mb-4 group-hover:text-secondary-500 transition-colors" />
            <h3 className="text-base sm:text-xl font-semibold text-light-50 mb-1 sm:mb-2">LinkedIn</h3>
            <p className="text-light-100 text-xs sm:text-sm">Conectar conmigo</p>
          </a>
        </div>
        <div className="text-center">
          <a href="mailto:jsebastiantrangol@gmail.com" className="inline-flex items-center gap-2 bg-primary-500 text-primary-950 px-6 sm:px-8 py-2.5 sm:py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all text-sm sm:text-base md:text-lg">
            Enviar un Correo <ArrowRight size={18} className="sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
