import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 bg-primary-950 bg-opacity-95 backdrop-blur-md z-50 border-b border-primary-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <a href="#" className="text-xl sm:text-2xl font-bold text-primary-500">JT</a>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-light-100 hover:text-primary-500 transition-colors font-medium text-sm lg:text-base">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="bg-primary-500 text-primary-950 px-5 lg:px-6 py-1.5 sm:py-2 rounded-lg font-semibold hover:bg-primary-400 transition-all text-sm lg:text-base">
              Contáctame
            </a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-light-50">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-3 sm:pb-4 pt-2 border-t border-primary-900">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block py-2 text-sm text-light-100 hover:text-primary-500 transition-colors" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="block mt-3 bg-primary-500 text-primary-950 px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-semibold text-center text-sm" onClick={() => setIsOpen(false)}>
              Contáctame
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
